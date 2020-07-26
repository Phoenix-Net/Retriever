// This is the shittiest thing I have ever written in my whole entire life.

const discord = require("discord.js");

class commands {
    constructor() {}

    async about(message) {
        const aboutembed = new discord.MessageEmbed()
         .setColor('#0099ff')
         .setTitle('About Retriever:')
         .addFields(
            { name: 'What is Retriever?', value: 'Retriever is a Discord bot written purely for entertainment value, based on dog jokes. The bot was originally written by Phoenix#2432 as a highschool AP Project, but with the help of Magik Manz#9999 I decided to rewrite the whole thing from scratch.'},
            { name: 'What can it do?', value: 'Well, that depends on how you interpret how Retriever makes jokes! If you enjoy dog jokes as much as we do, we guarentee you will enjoy him as much as we do!'},
         )
         .setImage('') // Get that winking G-Shep picure, it'd be funny haha.
         .setFooter('The Retriever Development Squad, Phoenix#2432 and Magik Manz#9999', '') // Upload picture for footer ASAP. =)
         message.reply(aboutembed)
    }

    async zoomies(message) {
       const zoomiesembed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Gotta go fast! 🐕💨')
        .setImage('https://cdn.hornyfur.com/6vDf.gif')
        // For some reason or another, this image keeps unloading in the middle of the GIF outside of the network that the CDN is hosted on. Not sure why.
        message.reply(zoomiesembed)
    }

    async ball(message) {
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
    }
}

module.exports = commands;