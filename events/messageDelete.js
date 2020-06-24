/* Variables */
const { MessageEmbed } = require('discord.js');

/* Message Event */
module.exports = (client, message) => {
    if(message.author.bot) return;
    const logChan = client.channels.cache.find(chan => chan.name === 'audit-log');
    
    if(logChan){
        const msgDelEmbed = new MessageEmbed()
            .setAuthor(message.author.username, `${message.author.displayAvatarURL()}`)
            .setColor("#F8F8FF")
            .setDescription(`Message sent by ${message.author} deleted in ${message.channel}\n\n${message}`)
            .setTimestamp()
            .setFooter(`Author: ${message.author.id} | Message ID: ${message.id}`);
		logChan.send({ embed: msgDelEmbed });
	} else {
		console.log(`The audit log channel does not exist.`);
	}
}