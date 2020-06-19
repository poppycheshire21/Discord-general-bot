/* Packages */
const { Structures, Client } = require('discord.js');
Structures.extend('Guild', Guild => {
	class MusicGuild extends Guild {
		constructor(client, data){
			super(client, data);
			
			this.musicData = {
				queue: [],
				isPlaying: false,
				nowPlaying: null,
				songDispatcher: null
			};
		}
	}
	return MusicGuild;
});
const client = new Client();
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

client.login('insert bot ID here');