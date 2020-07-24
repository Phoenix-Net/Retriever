const fs = require("fs");
const discord = require("discord.js");

const Client = new discord.Client();

// command related
const regex = /[^\s]+/g;