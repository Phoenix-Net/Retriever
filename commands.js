// This is the shittiest thing I have ever written in my whole entire life.

const discord = require("discord.js");

class commands {
    constructor() {}

    async about(message) {
        const aboutembed = new discord.MessageEmbed()
         .setColor('#0099ff')
         .setTitle('About Retriever')
         .addFields(
            { name: 'What is Retriever?', value: 'Retriever is a Discord bot written purely for entertainment value, based on dog jokes.'},
            { name: 'What can it do?', value: 'Well, that depends on how you interpret how Retriever makes jokes!\nIf you enjoy dog jokes as much as we do, then we guarentee you\u0027ll enjoy him as much as we do!\n\nFor further information regarding commands, please see ``?help.``'},
         )
         .setImage('https://cdn.hornyfur.com/rmCo.png') // Change of plans, square looks ugly.
         .setFooter('The Retriever developer team, Phoenix#2432 and Magik Manz#9999', 'https://cdn.hornyfur.com/gjeQ.png') // Upload picture for footer ASAP. =)
         message.reply(aboutembed)
    }

    async help(message) {
        const helpembed = new discord.MessageEmbed()
            .setColor('0099ff')
            .setTitle('Information')
            .addFields(
                {name:'Commands:', value:'?about\n?help\n?ball\n?zoomies\n?bananaphone\n?brokendog\n?sowwy\n?what\n?pupachino', inline: true},
                {name:'About Command:', value:'Displays information regarding Retriever.\nYou just ran that one silly!\nGo fetch!\nGotta go fast!\nBanana Phone!\nWe swear, you didn\u0027t break him.\nYou\u0027ve really upset him this time...\nWhat did you just say?\nMmm...', inline: true},
            )
            .setFooter('Have any suggestions? Contact us via email! admin@gsheps.net', 'https://cdn.hornyfur.com/gjeQ.png')
            message.reply(helpembed)
    }

    async zoomies(message) {
       const zoomiesembed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Gotta go fast! 🐕💨')
        .setImage('https://cdn.hornyfur.com/6vDf.gif')
        // For some reason or another, this image keeps unloading in the middle of the GIF outside of the network that the CDN is hosted on. Not sure why.
        message.reply(zoomiesembed)
    }

    async bananaphone(message) {
        const bananaphoneembed = new discord.MessageEmbed()
            .setColor('#ffe135')
            .setTitle('_Bring ring ring ring ring!_  **Banana Phone!**')
            .setImage('https://cdn.hornyfur.com/iEBD.gif') // Stupid discord limitations, can't put videos :(
            message.reply(bananaphoneembed)
    }

    async brokendog(message) {
        const brokendogembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Bro, did you see the dragons in the kitchen?')
            .setImage('https://cdn.hornyfur.com/WtJQ.gif')
            message.reply(brokendogembed)
    }

    async sowwy(message) {
        const sowwyembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('I-I\u0027m sowwy, I didn\u0027t mean to...')
            .setImage('https://cdn.hornyfur.com/GxBj.gif')
            message.reply(sowwyembed)
    }

    async what(message) {
        const dowhatembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Do what now?')
            .setImage('https://cdn.hornyfur.com/5wtn.gif')
            message.reply(dowhatembed)
    }

    async pupachino(message) {
        const pupachinoembed = new discord.MessageEmbed()
            .setColor('#036635')
            .setTitle('``*slurping noises*``')
            .setImage('https://cdn.hornyfur.com/zuDb.gif')
            message.reply(pupachinoembed)
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