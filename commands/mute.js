exports.run = (client, message, args) => {
    // Roles to be checked for, the role to give (muted), member role and active member role (to remove).
    let mutedRole = message.guild.roles.cache.find(role => role.name == "Server Mute");
	let memberRole = message.guild.roles.cache.find(role => role.name === "Member");
	let actMemberRole = message.guild.roles.cache.find(role => role.name === "Active Member");
	
	// Roles to be checked against for permissions.
    let modTeamRole = message.guild.roles.cache.find(role => role.name === "Mod Team");
	let headModRole = message.guild.roles.cache.find(role => role.name === "Head Mod");
	let saMemberRole = message.guild.roles.cache.find(role => role.name === "SA Member");

	// Check the user's roles and make sure they have the moderator role to perform this command.
	const msgAuthor = message.author;
	const guildMsgAuthor = message.guild.members.cache.find(user => user.id == msgAuthor.id);
	
	// Check the above const's and see if they have the roles.
	// If they have the roles, it will run the code starting from "Who is being muted".
	// If they don't have the roles, it will show "No permissions! in the else statement below.
	if(guildMsgAuthor.roles.cache.find(role => role.id == modTeamRole.id) || guildMsgAuthor.roles.cache.find(role => role.id == headModRole.id)){
		// Who is being muted
		const specifiedUser = message.mentions.users.first() || args[0];
		const member = message.guild.members.cache.find(user => user.id === specifiedUser.id || specifiedUser);
		const reason = args.slice(1, args.length).join(' ');
	  
		// Mutes the user and removes their member role
		member.roles.add(mutedRole, `Muted by ${message.author.tag} Reason: ${reason}`);
		if(member.roles.cache.has('')){
			member.roles.remove(memberRole);
			member.roles.remove(actMemberRole);
		}

		// gives muted role access to muted chat and stops the overwrite affecting this channel
		message.guild.channels.cache.forEach(async (channel, id) => {
			if(channel.id === ''){
				return false;
			}

			// Updates the overwrites for the server to maintain muted role with access to nowhere 
			channel.updateOverwrite(mutedRole.id, {
				SEND_MESSAGES: false,
				VIEW_CHANNEL: false,
				SEND_TTS_MESSAGES: false,
				ADD_REACTIONS: false,
				SPEAK: false,
				USE_VAD: false
			})
		});
		
		message.channel.send(`Command successful`).then(msg => {
			msg.delete({ timeout: 5000 });
		});
	} else {
		return message.channel.send(`No permissions!`).then(msg => {
			msg.delete({ timeout: 5000 });
		});
	}
};