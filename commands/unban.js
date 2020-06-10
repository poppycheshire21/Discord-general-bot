exports.run = (client, message, args) => {
  const member = args[0];
    try {
      message.guild.fetchBans().then(bans => {
        const unbanUser = bans.get(member);
        if(unbanUser){
          message.guild.members.unban(unbanUser.user.id);
          message.channel.send(`${unbanUser.user.tag} is unbanned`);
        } else {
          message.channel.send(`That user is not banned.`);
        }
      });
    } catch(err) {
       console.error(err);
    }
    }