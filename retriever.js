const fs = require("fs");
const discord = require("discord.js");
const config = require("./config.json");

const Client = new discord.Client();
const CmdParser = require('./commandParser').init(Client);

// command related
const regex = /[^\s]+/g;


var commands = require("./commands.js");
commands = new commands();

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

  let args = cmd.match(regex);
  const command = args.shift().toLowerCase();

  for(let i in args) {
    let arg = args[i];
    let parse = CmdParser.find(x => x.regex.test(arg));
    if(parse !== undefined && (parse.guildOnly !== true || (parse.guildOnly === true && message.guild))) {
      let match = arg.match(parse.regex);
      args[i] = await parse.callback(message, match);
    }
  }

  try {
    if (commands[command]) {
      commands[command](message, args);
    }
  } catch(e) {
    console.error(`command ${command} error:`, e);
  }
});

Client.login(config.token);