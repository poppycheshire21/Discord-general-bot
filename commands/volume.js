exports.run = (client, message, args) => {
    var voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.say('Join a channel and try again');
    
    if(typeof message.guild.musicData.songDispatcher == 'undefined' || message.guild.musicData.songDispatcher == null){
        return message.reply('There is no song playing right now!');
    }
    const wantedVolume = args[0];
    const volume = wantedVolume / 100;
    message.guild.musicData.songDispatcher.setVolume(volume);
    
    if(volume == "1"){
        message.channel.send(`Full volume!`);
    } else {
        message.channel.send(`You have selected ${volume}% as the volume for the Bot. Have fun!`);
    }
}