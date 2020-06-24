const Discord = require("discord.js");

exports.run = (client, message, args) => {
	const member = message.guild.members.cache.find(user => user.id === args[0]);
	
    const avatarEmbed = new Discord.MessageEmbed()
		.setColor("#0099ff")
		.setThumbnail(member.user.displayAvatarURL())
		.addField(`${member.user.tag}`, `${member}`, true)
		
    message.channel.send(avatarEmbed);
}