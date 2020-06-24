const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const fs = require('fs');
const warns = JSON.parse(fs.readFileSync('./assets/json/warnings.json', 'utf8'));

exports.run = async (client, message, args) => {
	const user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

	const member = message.guild.member(user);
	
	if (!warns[member.id]) warns[member.id] = {
		warns: 0
	};
	
	const warnLevel = warns[member.id].warns;

	const embed = new MessageEmbed()
		.setColor("#F8F8FF")
		.setThumbnail(member.user.displayAvatarURL())
		.addField(`${member.user.tag}`, `${member}`, true)
		.addField("ID:", `${member.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Status:", `${member.presence.status}`, true)
		.addField("In Server", message.guild.name, true)
		.addField("Game:", `${member.presence.game ? member.presence.game.name : 'None'}`, true)
		.addField("Bot:", `${member.user.bot}`, true)
		.addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
		.addField("Account Created On:", `${moment.utc(member.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
		.addField("Warning(s)", `${warnLevel}`)
		.addField("Roles:", member.roles.cache.map(roles => `${roles}`).join(', '), true)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
	message.channel.send({embed});
}