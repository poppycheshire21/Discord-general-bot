const { MessageEmbed } = require('discord.js');

module.exports = (client, guild, user) => {
    const logChan = client.channels.cache.find(chan => chan.name === 'audit-log');

	if(logChan){
		const guildBanRemove = new MessageEmbed()
			.setColor("#F8F8FF")
			.setThumbnail(user.displayAvatarURL())
			.setDescription(`User ${user.username} has been un-banned`)
			.setTimestamp()
		logChan.send({ embed: guildBanRemove });

    }
}