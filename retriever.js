const fs = require("fs");
const discord = require("discord.js");
const config = require("./config.json");

const Client = new discord.Client();
const Settings = require("./config.json");

// command related
const regex = /[^\s]+/g;

client.login(config.token);