const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	if(message.guild.musicData.queue.length == 0){
		return message.reply('There are no songs in my queue!');
	}

	const titleArray = [];

	message.guild.musicData.queue.map(obj => {
		titleArray.push(obj.title);
	});

	var queueEmbed = new MessageEmbed()
		.setColor('#ff7373')
		.setTitle(`Music Queue :notepad_spiral:`);
		for(let i = 0; i < titleArray.length; i++){
			queueEmbed.addField(`${i + 1}:`, `${titleArray[i]}`);
		}
	return message.reply(queueEmbed);
}