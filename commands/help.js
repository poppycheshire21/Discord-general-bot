const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('A list of my commands!')
            .setDescription('This is a list of all my commands to help you, remember my prefix is `>`. Most of my commands are only for staff!')
            .setAuthor("Command list", message.guild.iconURL)
            .setThumbnail(message.guild.iconURL())
            .addField("help", "Gives the help message!", true)
            .addField("say", "Repeats what you say!", true)
            .addField("ping", "Gets the bot ping!", true)
            .addField("serverinfo", "Gets information about the server!", true)
            .addField("whois", "Gets information about a user!", true)
            .addField("purge", "Purges messages!", true)
            .addField("mute", "Mutes a member!", true)
            .addField("unmute", "Unmutes a member!", true)
            .addField("kick", "Kicks a member!", true)
            .addField("ban", "Bans a member!", true)
            .addField("unban", "Unbans a member!", true)
            .addField("avatar", "Gets a users avatar!", true)
            .addField("music", "Lists all music commands!", true)
            .setTimestamp()
        message.channel.send({embed});
}