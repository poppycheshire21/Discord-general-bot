const Discord = require('discord.js');
const fs = require('fs');
const warns = JSON.parse(fs.readFileSync('./assets/json/warnings.json', 'utf8'));

exports.run = (client, message, args) => {
	let modTeamRole = message.guild.roles.cache.find(role => role.name === "Mod Team");
	let headModRole = message.guild.roles.cache.find(role => role.name === "Head Mod");
	let saMemberRole = message.guild.roles.cache.find(role => role.name === "SA Member");

	const wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
	const reason = args.slice(1, args.length).join(" ");

	if(!wUser){
		return message.channel.send(`Sorry, you either didn't input a user or they don't exist!`);
	}

	if(wUser.id === 'Enter botID') return message.channel.send(`Excuse me, what you doin?`);
	if(reason.length < 1) return message.reply('You must have a reason for the warning.');

	if(!warns[wUser.id]){
		warns[wUser.id] = {
			username: wUser.user.username,
			guildName: message.guild.name,
			warns: 0
		};
	}
	
	warns[wUser.id].warns += 1;

	const warnEmbed = new Discord.MessageEmbed()
		.setTitle(`User has been given a warning`)
		.setDescription(`This is an automatically generated message`)
		.setThumbnail(wUser.user.displayAvatarURL())
		.setColor('#FF0000')
		.setTimestamp()
		.setFooter('A copy of the reason has been sent to the user')
		.addField('User:', `${wUser.user.tag}`, true)
		.addField('Moderator:', `${message.author.tag}`, true)
		.addField('Reason:', `${reason}`)
		.addField('Warning number', `${warns[wUser.id].warns}`, true);
		
	const warnChannel = message.guild.channels.cache.find(c => c.name === 'audit-log');
	if(!warnChannel) return message.channel.send(`I can't find this channel`);

	warnChannel.send({ embed: warnEmbed });

	const userWarnEmbed = new Discord.MessageEmbed()
		.setTitle(`Careful! You've been warned in ${message.guild.name}`)
		.setDescription(`This is an automatically generated message`)
		.setThumbnail(message.guild.iconURL)
		.setColor('#FF0000')
		.setTimestamp()
		.setFooter(`This is your copy of the warning you have been issued.`)
		.addField(`Moderator:`, `${message.author.tag}`, true)
		.addField(`Reason:`, `${reason}`);
	wUser.send({ embed: userWarnEmbed });
	
	fs.writeFile('./assets/json/warnings.json', JSON.stringify(warns, null, 4), err => {
		if(err) console.log(err);
	});
}