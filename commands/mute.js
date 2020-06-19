exports.run = (client, message, [mention, ...reason]) => {
  
    // This is the role the bot is assigning so server mute
    let mutedRole = message.guild.roles.cache.find(role => role.name == "insert muted role name here");
    // Who is being muted
    let member = message.mentions.members.first();
  
    // Mutes the user and removes their member role
    member.roles.add(mutedRole, `Muted by ${message.author.tag} Reason: ${reason}`);
	  member.roles.remove('insert member role ID here');

    // gives muted role access to muted chat and stops the overwrite affecting this channel
    message.guild.channels.cache.forEach(async (channel, id) => {
        if(channel.id === 'insert muted channel ID here'){
			return false;
    }

		// Updates the overwrites for the server to maintain muted role with access to nowhere 
		channel.updateOverwrite(mutedRole.id, {
			SEND_MESSAGES: false,
			VIEW_CHANNEL: false,
			SEND_TTS_MESSAGES: false,
			ADD_REACTIONS: false,
			SPEAK: false,
			USE_VAD: false
    })
    
    // Confirms mute then deletes confirmation
    message.channel.send("Command successful").then((msg) => {
      msg.delete({timeout: 5000 });
  }) 
      });
  };