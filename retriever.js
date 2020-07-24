const fs = require("fs");
const discord = require("discord.js");
const config = require("./config.json");

const Client = new discord.Client();

// command related
const regex = /[^\s]+/g;
const commands =  new (require("./commands.js")());

Client.on('ready', () => {
  console.log(`Logged in as ${Client.user.tag}!`);
  Client.user.setActivity('With balls ⚾', { type: 'PLAYING' })
});

// Testing with prefix
Client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const cmd = message.content.substring(1);
  if (cmd.length < 1) return;

  const commandAndArgs = cmd.match(regex);
  const command = commandAndArgs.shift().toLowerCase();

  if (commands[command]) {
    commands[command](message);
  }
});

Client.login(config.token);