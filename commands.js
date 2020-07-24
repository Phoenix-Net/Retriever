// This is the shittiest thing I have ever written in my whole entire life.

class commands {
    constructor() {}

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