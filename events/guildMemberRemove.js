const { MessageEmbed } = require('discord.js');

module.exports = (client, member) => {
	const logChan = client.channels.cache.find(chan => chan.name === 'audit-log');

	if(logChan){
		const guildMemberRemove = new MessageEmbed()
			.setColor("#F8F8FF")
			.setThumbnail(member.user.displayAvatarURL())
			.setDescription(`User ${member.user.username} left`)
			.setTimestamp()
		logChan.send({ embed: guildMemberRemove });
	}
};