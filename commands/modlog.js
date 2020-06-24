const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const fs = require('fs');
const warns = JSON.parse(fs.readFileSync('./assets/json/warnings.json', 'utf8'));

exports.run = async (client, message, args) => {
    let modTeamRole = message.guild.roles.cache.find(role => role.name === "Mod Team");
	let headModRole = message.guild.roles.cache.find(role => role.name === "Head Mod");
    let saMemberRole = message.guild.roles.cache.find(role => role.name === "SA Member");

    const user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
	const member = message.guild.member(user);
    
    if (!warns[member.id]) warns[member.id] = {
		warns: 0
    };
    
    const warnLevel = warns[member.id].warns;

    const embed = new MessageEmbed()
		.setColor("#FF0000")
		.setThumbnail(member.user.displayAvatarURL())
		.addField(`${member.user.tag}`, `${user}`, true)
		.addField("ID:", `${member.user.id}`, true)
        .addField("Warning(s)", `${warnLevel}`);

    message.channel.send({embed});
}