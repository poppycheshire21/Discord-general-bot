exports.run = (client, message, args) => {
	const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.reply('Join a channel and try again');
    
    if(typeof message.guild.musicData.songDispatcher == 'undefined' || message.guild.musicData.songDispatcher == null){
        return message.reply('There is no song playing right now!');
    }
    
    message.guild.musicData.songDispatcher.end();
    
    if (message.guild.musicData.queue < 1){
        message.channel.send('There are no more songs in my queue!');
        message.guild.musicData.songDispatcher.end();
    } else {
        // Do something if the queue has more than one song in it.
    }
}