exports.run = (client, message, args) => {
	message.delete();
	const msgToSay = args.join(" ");
	message.channel.send(msgToSay);
};