exports.run = (client, message, args) => {
	let modTeamRole = message.guild.roles.cache.find(role => role.name === "Mod Team");
	let headModRole = message.guild.roles.cache.find(role => role.name === "Head Mod");
	let saMemberRole = message.guild.roles.cache.find(role => role.name === "SA Member");
	
	message.delete();
	const msgToSay = args.join(" ");
	message.channel.send(msgToSay);
};