exports.run = (client, message, args) => {

  let modTeamRole = message.guild.roles.cache.find(role => role.name === "Mod Team");
  let headModRole = message.guild.roles.cache.find(role => role.name === "Head Mod");
  let saMemberRole = message.guild.roles.cache.find(role => role.name === "SA Member");


  const member = args[0];
    try {
      message.guild.fetchBans().then(bans => {
        const unbanUser = bans.get(member);
        if(unbanUser){
          message.guild.members.unban(unbanUser.user.id);
        } else {
          message.channel.send(`That user is not banned.`);
        }
      });
    } catch(err) {
       console.error(err);
    }
    }