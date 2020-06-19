exports.run = (client, message, args) => {
    
    const songNumber = args[0];
    if(songNumber < 1 && songNumber >= message.guild.musicData.queue.length){
        return message.reply('Please enter a valid song number');
    }
    
    var voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.reply('Join a channel and try again');
    
    if(typeof message.guild.musicData.songDispatcher == 'undefined' || message.guild.musicData.songDispatcher == null){
        return message.reply('There is no song playing right now!');
    }

    if (message.guild.musicData.queue < 1){
        message.channel.send('There are no songs in my queue!');
    }

    message.guild.musicData.queue.splice(0, songNumber - 1);
    message.guild.musicData.songDispatcher.end();
    return;
}