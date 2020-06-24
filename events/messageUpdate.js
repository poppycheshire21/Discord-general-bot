/* Variables */
const { MessageEmbed } = require('discord.js');

/* Message Event */
module.exports = (client, oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
	if(newMessage.author.bot) return;
	
    const logChan = client.channels.cache.find(chan => chan.name === 'audit-log');

	const msgupdateEmbed = new MessageEmbed()
		.setAuthor(oldMessage.author.username, `${oldMessage.author.displayAvatarURL()}`)
		.setColor("#F8F8FF")
		.setDescription(`Message sent by ${oldMessage.author} edited in ${oldMessage.channel}\n\nOld Message: ${oldMessage}\n\nNew message: ${newMessage}`)
		.setTimestamp()
		.setFooter(`Author: ${oldMessage.author.id} | Message ID: ${oldMessage.id}`);
	logChan.send({ embed: msgupdateEmbed });
}