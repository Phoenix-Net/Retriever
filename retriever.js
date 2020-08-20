const fs = require("fs");
const discord = require("discord.js");
const config = require("./config.json");

const Client = new discord.Client();
const CmdParser = require('./commandParser').init(Client);

// command related
const regex = /[^\s]+/g;

var commands = require("./commands.js");
let currentActivity, discordServers;
commands = new commands();

var DogPhrases = [["server", "WATCHING"],["To Woofs!", "LISTENING"], ["With Balls ⚾", "PLAYING"], ["The Window", "WATCHING"]];
function getRandom(num) {
  return Math.floor(Math.random() * Math.floor(num));
}

Client.on('ready', () => {
  console.log(`Logged in as ${Client.user.tag}!`);

  currentActivity = DogPhrases[getRandom(DogPhrases.length)];
  discordServers = Object.keys(Client.guilds).length;

  DogPhrases[0][0] = `${discordServers} servers.`;
  Client.user.setActivity(currentActivity[0], { type: currentActivity[1] });
});

// on discord join'
Client.on("guildCreate", () => {
  discordServers = Object.keys(Client.guilds).length;
  DogPhrases[0][0] = `${discordServers} servers.`;
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

// Every 1 hour change the activity :
setInterval(() => {
  currentActivity = DogPhrases[getRandom(DogPhrases.length)];

  Client.user.setActivity(currentActivity[0], { type: currentActivity[1] });
}, 3.6e+6)

// 3.6e+6 Hour

Client.login(config.token);