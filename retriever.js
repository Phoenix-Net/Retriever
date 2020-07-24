const fs = require("fs");
const discord = require("discord.js");
const config = require("./config.json");

const Client = new discord.Client();
const Settings = require("./config.json");

// command related
const regex = /[^\s]+/g;

// ex. from Discord.JS
// Create an event listener for messages
Client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
});

Client.login(config.token);