/* Packages */
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');

/* Variables */
client.commands = new Enmap();

/* Handlers */
fs.readdir("./events", (err, files) => {
    if(err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        
        const event = require(`./events/${file}`);
        
        let eventName = file.split(".")[0];
        
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

// Enter your bot token inside the ' ' below
client.login('');