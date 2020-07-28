// Command-central, please follow the syntax if adding commands, as others might not know how to use what you've put! (If you don't, at least put some comments in there so that we can figure it out =)

const discord = require("discord.js");
const Client = new discord.Client();


class commands {
    constructor() {}

    async about(message) {
        const channel = await message.channel;
        const aboutembed = new discord.MessageEmbed()
         .setColor('#0099ff')
         .setTitle('About Retriever')
         .setURL('https://retriever.gsheps.net/')
         .addFields(
            { name: 'What is Retriever?', value: 'Retriever is a Discord bot written purely for entertainment value, based on dog jokes.'},
            { name: 'What can it do?', value: 'Well, that depends on how you interpret how Retriever makes jokes!\nIf you enjoy dog jokes as much as we do, then we guarentee you\u0027ll enjoy him as much as we do!\n\nFor further information regarding commands, please see ``?help.``'},
            { name: 'Developers:', value: 'Phoenix#2432\nMagik Manz#9999\nNexure#0001', inline: true},
            { name: 'Role:', value: 'Development Lead, Author\nDeveloper, Co-Author\nContributor, Tester', inline: true},
         )
         .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409767571456012/lineboi.png') // Change of plans, square looks ugly. OLD (https://cdn.hornyfur.com/rmCo.png)
         .setFooter('The Retriever Developer Team, PhoenixNet 2020 🐕', 'https://cdn.discordapp.com/attachments/737409592233033768/737409763096395786/fetcherlogo.png') // Upload picture for footer ASAP. =) OLD (https://cdn.hornyfur.com/gjeQ.png)
        channel.send(aboutembed)
    }

    async help(message) {
        const channel = await message.channel;
        const helpembed = new discord.MessageEmbed()
            .setColor('0099ff')
            .setTitle('Information')
            .addFields(
                {name:'Commands:', value:'?about\n?help\n?ball\n?arrest\n?happybirthday\n?nudge\n?zoomies\n?bananaphone\n?brokendog\n?sowwy\n?what\n?pupachino\n?denied\n?oof\n?toofers\n?holyheck\n?boorf\n?plsno\n?heck\n?deletdis\n?headspin\n?stretch\n?present\n?ballz', inline: true},
                {name:'About Command:', value:'Displays information regarding Retriever.\nYou just ran that one silly!\nGo fetch!\nOh no, it\u0027s the pawlice!\nWish someone a happy birthday! 🎈\nNudge someone like it\u0027s 2005 again. 👉\nGotta go fast!\nBanana Phone!\nWe swear, you didn\u0027t break him.\nYou\u0027ve really upset him this time...\nWhat did you just say?\nMmm...\nFor those "nope!" moments.\nOuch... That\u0027s gotta hurt...\nBrush them toofers!\nDid you just see that?\nDon\u0027t mess with fire hydrants.\nNo means no!\nGet hecked.\nDelet Dis, Now.\nOh heck 😵\nStretchies!\nHow dogs worship. 😤\nTennisballs... 🎾', inline: true},
            )
            .setFooter('Have any suggestions? Contact us via email! admin@gsheps.net', 'https://cdn.discordapp.com/attachments/737409592233033768/737409763096395786/fetcherlogo.png')
        channel.send(helpembed)
    }

    async zoomies(message) {
        const channel = await message.channel;
       const zoomiesembed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Gotta go fast! 🐕💨')
        .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409797573443715/zoomies.gif') // OLD (https://cdn.hornyfur.com/6vDf.gif)
        // For some reason or another, this image keeps unloading in the middle of the GIF outside of the network that the CDN is hosted on. Not sure why.
        // UPDATE: Figured it out, Discord's CDN > All other CDN's due to security / user-trust. Have to upload every image you use to the bot's DM's to avoid image-removal / errors.
        channel.send(zoomiesembed)
    }

    async bananaphone(message) {
        const channel = await message.channel;
        const bananaphoneembed = new discord.MessageEmbed()
            .setColor('#ffe135')
            .setTitle('_Bring ring ring ring ring!_  **Banana Phone!** 🍌')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409762748137572/BananaPhone.gif') // Stupid discord limitations, can't put videos :(
        channel.send(bananaphoneembed)
    }

    async brokendog(message) {
        const channel = await message.channel;
        const brokendogembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Bro, did you see the dragons in the kitchen? 🐱‍🐉')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409764216275056/brokendog.gif')
        channel.send(brokendogembed)
    }

    async sowwy(message) {
        const channel = await message.channel;
        const sowwyembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('I-I\u0027m sowwy, I didn\u0027t mean to... 😖')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409780779450398/sowwy.gif')
        channel.send(sowwyembed)
    }

    async what(message) {
        const channel = await message.channel;
        const dowhatembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Do what now? 🤔')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409783514136716/what.gif')
        channel.send(dowhatembed)
    }

    async pupachino(message) {
        const channel = await message.channel;
        const pupachinoembed = new discord.MessageEmbed()
            .setColor('#036635')
            .setTitle('``*slurping noises*``')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737409776056795256/pupachino.gif')
        channel.send(pupachinoembed)
    }

    async denied(message) {
        const channel = await message.channel;
        const deniedembed = new discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('*Ouch... that had to hurt...* 😕')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737413244746203247/ouch.gif')
        channel.send(deniedembed)
    }

    async oof(message) {
        const channel = await message.channel;
        const oofembed = new discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('Yikes, he definatly missed that frisbee. 😲')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737487837192257656/oof.gif')
        channel.send(oofembed)
    }

    async toofers(message) {
        const channel = await message.channel;
        const toofersembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Brushie Brushie Brush!')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737489157743706122/toofers.gif')
        channel.send(toofersembed)
    }

    async holyheck(message) {
        const channel = await message.channel;
        const holyheckembed = new discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('**HOLY CRAP, DID YOU JUST SEE THAT?**')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737490284551602177/HOLYCRAP.gif')
        channel.send(holyheckembed)
    }

    async boorf(message) {
        const channel = await message.channel;
        const boorfembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Boooooorf 🌊')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737492133015060590/boorf.gif')
        channel.send(boorfembed)
    }

    async plsno(message) {
        const channel = await message.channel;
        const plsnoembed = new discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('NO NO NO NO NO NO NO.')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737492935247134720/NONONONONO.gif')
        channel.send(plsnoembed)
    }

    async heck(message) {
        const channel = await message.channel;
        const heckoffembed = new discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('Heck off! *Grrrrrr* 💢')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737463195341684776/ANGRYBOI.png')
        channel.send(heckoffembed)
    }

    async deletdis(message) {
        const channel = await message.channel;
        const deletdisembed = new discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('_Delet Dis_')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737468864194936912/gunshep.jpg')
        channel.send(deletdisembed)
    }

    async headspin(message) {
        const channel = await message.channel;
        const headspinembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Oh god oh heck _oh no._  🥴')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737470429836345434/headspin.jpg')
        channel.send(headspinembed)
    }

    async stretch(message) {
        const channel = await message.channel;
        const stretchembed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('He stretch out reeeeeal far.')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737471981229703225/yogadog.jpg')
        channel.send(stretchembed)
    }

    async present(message) {
        const channel = await message.channel;
        const doggodembed = new discord.MessageEmbed()
            .setColor('#DAA520')
            .setTitle('Present thou butt in thy general direction 🙏')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737478920471052388/rearup.jpg')
        channel.send(doggodembed)
    }

    async ballz(message) {
        const channel = await message.channel;
        const ballzembed = new discord.MessageEmbed()
            .setColor('#c9f364')
            .setTitle('Mmm Tennisballs... 🎾')
            .setImage('https://cdn.discordapp.com/attachments/737409592233033768/737483821532053554/tennisballs.jpg')
        channel.send(ballzembed)
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

    async arrest(message, args) {
        const channel = await message.channel;

        if(args.length < 1 || typeof args[0] !== 'object' || !args[0]) {
            const arrestmessage = await channel.send(`Invalid command usage! Please mention the user who you wish to arrest!`);
        } else {
            const user = args[0];
            const arrestmessage = await channel.send(`You\u0027re under arrest <@${user.id}>! Put your paws in the air!`, {files: ["https://cdn.discordapp.com/attachments/737409592233033768/737414396095102989/shepranger_2.jpg"]});
            arrestmessage.react("👮‍♂️");
            arrestmessage.react("🚓");
        }
    }

    async happybirthday(message, args) {
        const channel = await message.channel;

        if(args.length < 1 || typeof args[0] !== 'object' || !args[0]) {
            const birthdaymessage = await channel.send(`Invalid command usage! Please mention the user who you'd like to wish a happy birthday!`);
        } else {
            const user = args[0];
            const birthdaymessage = await channel.send(`Everyone, please wish <@${user.id}> a happy birthday!`, {files: ["https://cdn.discordapp.com/attachments/737409592233033768/737480281040224356/birthdayboi.jpg"]});
            birthdaymessage.react("🎉");
            birthdaymessage.react("🥳");
        }
    }

    async nudge(message, args) {
        const channel = await message.channel;

        if(args.length < 1 || typeof args[0] !== 'object' || !args[0]) {
            channel.send(`Invalid command usage! Please mention the user who you'd like to nudge!`)
        } else {
            const user = args[0];
            const author = message.author;
            channel.send(`Hey, <@${user.id}>! <@${author.id}> Nudged you!`, {files: ["https://cdn.discordapp.com/attachments/737409592233033768/737494317743997008/hey.gif"]})
        }
    }
}

module.exports = commands;