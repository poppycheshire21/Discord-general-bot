exports.run = (client, message, [mention, ...reason]) => {
  
    // Finding muted role
    let mutedRole = message.guild.roles.cache.find(role => role.name == "insert muted role name here");
    // Who is being unmuted
    let member = message.mentions.members.first();
  
    // unutes the user and removes their muted role
	member.roles.remove(mutedRole);
    member.roles.add('insert member role here');
  };