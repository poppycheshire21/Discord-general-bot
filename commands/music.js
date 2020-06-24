const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        const musicEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('A list of my music commands!')
            .setDescription('This is a list of all my music commands for everyone to use! Remember my prefix is `>`. To use these commands you **must** be in the music VC.')
            .setAuthor("Command list", message.guild.iconURL)
            .setThumbnail(message.guild.iconURL())
            .addField("play {song name}", "Play will start playing the requested song! After you've wrote this, a list will come up with choices. Please choose a number and just write `1` not `>1`", true)
            .addField("playing", "Shows now playing song, time left of it, a picture and more!", true)
            .addField("volume", "Changes the bots volume between 0-100!", true)
            .addField("skip", "Skips to next song!", true)
            .addField("skipto", "Skips to a certain song!", true)
            .addField("queue", "Checks current song queue!", true)
            .addField("pause", "Pauses music!", true)
            .addField("resume", "Resumes music!", true)
            .setTimestamp()
            message.author.send({ embed: musicEmbed });

        message.reply(`The music list has been sent to your dm's! :incoming_envelope:`);
}