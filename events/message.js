/* Variables */
const prefix = '>';

/* Message Event */
module.exports = (client, message) => {
	// Check if another bot sent the message.
	if(message.author.bot) return;

	// Ignore all messages that do not start with our prefix.
	if(message.content.indexOf(prefix) !== 0) return;

	// Variables for arguments and commands.
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// Grab the command date from the Enmap started in the index.js file
	const cmd = client.commands.get(command);

	// Check if the command the user entered, exists.
	if(!cmd) return;

	// Run the command if it exists.
	cmd.run(client, message, args);
}