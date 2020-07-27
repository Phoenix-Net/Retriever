// This is the shittiest thing I have ever written in my whole entire life.

const discord = require("discord.js");
const Client = new discord.Client();

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
         .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409767571456012/lineboi.png') // Change of plans, square looks ugly. OLD (https://cdn.hornyfur.com/rmCo.png)
         .setFooter('The Retriever developer team, Phoenix#2432 and Magik Manz#9999', 'https://cdn.discordapp.com/attachments/737409592233033768/737409763096395786/fetcherlogo.png') // Upload picture for footer ASAP. =) OLD (https://cdn.hornyfur.com/gjeQ.png)
         message.reply(aboutembed)
    }

    async help(message) {
        const helpembed = new discord.MessageEmbed()
            .setColor('0099ff')
            .setTitle('Information')
            .addFields(
                {name:'Commands:', value:'?about\n?help\n?ball\n?arrest\n?zoomies\n?bananaphone\n?brokendog\n?sowwy\n?what\n?pupachino\n?denied', inline: true},
                {name:'About Command:', value:'Displays information regarding Retriever.\nYou just ran that one silly!\nGo fetch!\nOh no, it\u0027s the pawlice!\nGotta go fast!\nBanana Phone!\nWe swear, you didn\u0027t break him.\nYou\u0027ve really upset him this time...\nWhat did you just say?\nMmm...\nFor those "nope!" moments.', inline: true},
            )
            .setFooter('Have any suggestions? Contact us via email! admin@gsheps.net', 'https://cdn.discordapp.com/attachments/737409592233033768/737409763096395786/fetcherlogo.png')
            message.reply(helpembed)
    }

    async zoomies(message) {
       const zoomiesembed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Gotta go fast! 🐕💨')
        .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409797573443715/zoomies.gif') // OLD (https://cdn.hornyfur.com/6vDf.gif)
        // For some reason or another, this image keeps unloading in the middle of the GIF outside of the network that the CDN is hosted on. Not sure why.
        // UPDATE: Figured it out, Discord's CDN > All other CDN's due to security / user-trust. Have to upload every image you use to the bot's DM's to avoid image-removal / errors.
        message.reply(zoomiesembed)
    }

    async bananaphone(message) {
        const bananaphoneembed = new discord.MessageEmbed()
            .setColor('#ffe135')
            .setTitle('_Bring ring ring ring ring!_  **Banana Phone!**')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409762748137572/BananaPhone.gif') // Stupid discord limitations, can't put videos :(
            message.reply(bananaphoneembed)
    }

    async brokendog(message) {
        const brokendogembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Bro, did you see the dragons in the kitchen?')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409764216275056/brokendog.gif')
            message.reply(brokendogembed)
    }

    async sowwy(message) {
        const sowwyembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('I-I\u0027m sowwy, I didn\u0027t mean to...')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409780779450398/sowwy.gif')
            message.reply(sowwyembed)
    }

    async what(message) {
        const dowhatembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Do what now?')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409783514136716/what.gif')
            message.reply(dowhatembed)
    }

    async pupachino(message) {
        const pupachinoembed = new discord.MessageEmbed()
            .setColor('#036635')
            .setTitle('``*slurping noises*``')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409776056795256/pupachino.gif')
            message.reply(pupachinoembed)
    }

    async denied(message) {
        const deniedembed = new discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('*Ouch... that had to hurt...*')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737413244746203247/ouch.gif')
            message.reply(deniedembed)
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

    async arrest(message) {
        const user = await message.mentions.users.first();
        const channel = await message.channel;
        const arrestmessage = await channel.send(`You\u0027re under arrest <@${user.id}>! Put your paws in the air!`, {files: ["https://cdn.discordapp.com/attachments/737409592233033768/737414396095102989/shepranger_2.jpg"]});
        arrestmessage.react("👮‍♂️");
        arrestmessage.react("🚓");
    }
}

module.exports = commands;