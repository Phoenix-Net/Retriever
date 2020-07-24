const fs = require("fs");
const discord = require("discord.js");

const Client = new discord.Client();
const Settings = require("./config.json");

// command related
const regex = /[^\s]+/g;