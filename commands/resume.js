exports.run = (client, message, args) => {
    var voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.reply('Join a channel and try again');
    
    if(typeof message.guild.musicData.songDispatcher == 'undefined' || message.guild.musicData.songDispatcher == null){
        return message.reply('There is no song playing right now!');
    }
    
    message.reply(`Song resumed :play_pause:`);
    message.guild.musicData.songDispatcher.resume();
}