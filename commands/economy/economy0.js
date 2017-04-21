const Command = require("../../core/Command");

class Embed extends Command {
    constructor(client) {
        super(client, {
            name: "Economy",
            description: "Provides economy functionality.",
            aliases: ["balance", "bal", "money", "pay", "request", "req", "requests", "reqs", "transaction", "payment"],
            disabled: true
        });
    }

    async run(message, channel, user, args) {
        let embed, before;

        try {
            embed = JSON.parse(args.join(" "));
            before = JSON.parse(args.join(" "));
        } catch(err) {
            message.reply("Unable to parse your JSON Object. Check the syntax and try again.");
            return this.log("Unable to parse JSON", "error");
        }

        if (embed.colour) embed.color = embed.colour;
        if (embed.color) embed.color = Number(embed.color);

        await channel.sendMessage(`\`\`\`json\n${JSON.stringify(before, null, 4)}\n\`\`\``, { embed });
        return this.delete(message);
    }
}

module.exports = Embed;
