const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	var voiceChannel = message.member.voice.channel;
	if(!voiceChannel) return message.reply('Join a channel and try again');

	if(typeof message.guild.musicData.songDispatcher == 'undefined' || message.guild.musicData.songDispatcher == null){
		return message.reply('There is no song playing right now!');
	}

	const nowPlaying = message.guild.musicData.nowPlaying;

	var nowPlayingMs = message.guild.musicData.songDispatcher.streamTime,
		hr = Math.floor(nowPlayingMs / 1000 / 60 / 60),
		mn = Math.floor(nowPlayingMs / 1000 / 60 % 60),
		ss = Math.round(nowPlayingMs / 1000 % 60 % 60);
		
	function format(number = 0) {
		return `0${number}`.slice(-2);
	}
		
	const playingEmbed = new MessageEmbed()
		.setTitle(`${nowPlaying.title}`)
		.setColor('RANDOM')
		.setURL(`${nowPlaying.url}`)
		.setAuthor(`Now Playing ♪`, `${message.guild.iconURL()}`)
		.addField('\u200B', '``' + `${format(mn)}:${format(ss)} / ${nowPlaying.duration}` + '``')
		.addField('\u200B', '``Requested By:`` ' + nowPlaying.author + '')
		.setThumbnail(`${nowPlaying.thumbnail}`)
		if(message.guild.musicData.queue[0]){
			playingEmbed.addField('\u200B', '``Up Next:`` ' + message.guild.musicData.queue[0].title + '');
		}
	message.channel.send({ embed: playingEmbed });
}