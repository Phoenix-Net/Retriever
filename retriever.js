const fs = require("fs");
const discord = require("discord.js");
const config = require("./config.json");

const Client = new discord.Client();

// command related
const regex = /[^\s]+/g;

Client.on('ready', () => {
  console.log(`Logged in as ${Client.user.tag}!`);
  Client.user.setActivity('With balls ⚾', { type: 'PLAYING' })
});

// ex. from Discord.JS
// Create an event listener for messages
Client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
});

// Testing with prefix
Client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const cmd = message.content.substring(1);
  if (cmd.length < 1) return;

  const commandAndArgs = cmd.match(regex);
  const command = commandAndArgs.shift().toLowerCase();
  switch (command) {
    case "ball":
      const botMessage = await message.reply("There it is! Go get it boy!");
      botMessage.react("🎾");

      const fetched = await (new Promise(function(s) {
      const filter = (reaction, user) => user.id === message.author.id && reaction.emoji.name === "🎾"
      const collector = botMessage.createReactionCollector(filter, {time:30000})

      collector.on("collect", reaction => {
          // check your reaction thing
          if (reaction.emoji.name != "🎾" || !reaction.users.cache.get(message.author.id)) return;
          s(true);
      });

      collector.on("end", () => s(false));
      }));  

      if (fetched) {
          botMessage.edit("Goodboy, you got it!");
      } else {
          botMessage.edit("Awhh man, maybe next time you'll be able to get it!");
      }
    break;
  }
  
})

Client.login(config.token);