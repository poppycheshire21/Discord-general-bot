exports.run = (client, message, args) => {
  
    let modTeamRole = message.guild.roles.cache.find(role => role.name === "Mod Team");
    let headModRole = message.guild.roles.cache.find(role => role.name === "Head Mod");
    let saMemberRole = message.guild.roles.cache.find(role => role.name === "SA Member");

    let memberRole = message.guild.roles.cache.find(role => role.name === "Member");
    
    // Finding muted role
    let mutedRole = message.guild.roles.cache.find(role => role.name == "Server Mute");
    // Who is being unmuted
    const specifiedUser = message.mentions.users.first() || args[0];
    const member = message.guild.members.cache.find(user => user.id === specifiedUser.id || specifiedUser);

    // unutes the user and removes their muted role
	member.roles.remove(mutedRole);
    member.roles.add(memberRole);
  };