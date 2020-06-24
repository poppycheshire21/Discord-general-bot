exports.run = (client, message, args) => {
	let modTeamRole = message.guild.roles.cache.find(role => role.name === "Mod Team");
	let headModRole = message.guild.roles.cache.find(role => role.name === "Head Mod");
	let saMemberRole = message.guild.roles.cache.find(role => role.name === "SA Member");

	const kUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
	const reason = args.slice(1, args.length).join(" ");
  
	if(!kUser){
		return message.channel.send(`Sorry, you either didn't input a user or they don't exist!`);
	}

	if(!reason){
		return message.channel.send(`Sorry, it looks like you didn't input a reason. Please try again, with a reason included.`);
	}
  
	kUser.send(`You have been kicked from ${message.guild} for ${reason}`).then(function(){
		message.reply(`sent kick message to ${kUser.user.username}`);
		kUser.kick({ reason: `${reason}` });
	}).catch(function(){
		message.reply(`could not send kick message to ${kUser.user.username}`);
		kUser.kick({ reason: `${reason}` });  
	});

	message.reply(`${kUser.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
}