const WrapPromise = promise => (
    new Promise(res => {
      promise.then(res).catch(e => res(null));
    })
);

module.exports = {
    init: function(Client) {
        return [
            // this is the regex for users
            {
              regex: /\<\@(?:\!)?(\d+)\>/,
              callback: async (message, match) => {
                const userId = match[1];
                if(message.guild) {
                  let user = await WrapPromise(message.guild.members.fetch(userId));
                  if(user !== null) return user;
                }
          
                return await WrapPromise(Client.users.fetch(userId));
              }
            },
            // this is the regex for channel mentions
            {
              regex: /\<\#(\d+)\>/,
              guildOnly: true,
              callback: async (message, match) => {
                const channelId = match[1];
                return await WrapPromise(Client.channels.fetch(channelId));
              }
            },
            // this is the regex for role mentions!
            { 
              regex: /\<\@\&(\d+)\>/,
              guildOnly: true,
              callback: async (message, match) => {
                return await WrapPromise(message.guild.roles.fetch(match[1]));
              },
            }
        ]
    }
}