const Webhook = require("../lib/index");
const client = new Webhook.Client("ID", "TOKEN");

const embed = new Webhook.DiscordEmbed()
    .setTitle("This is your title, it can hold 256 characters")
    .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png", "https://discordapp.com")
    .setColor("#FF0000")
    .setDescription("This is the main body of text, it can hold 2048 characters.")
    .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
    .setImage("http://i.imgur.com/yVpymuV.png")
    .setThumbnail("http://i.imgur.com/p2qNFag.png")
    .setTimestamp()
    .setURL("https://discord.gg")
    .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")
    .addField("Inline Field", "They can also be inline.", true)
    .addBlankField()
    .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

client.send({ embeds: embed.embeds, content: 'Hello World!', avatar_url: "https://cdn.discordapp.com/avatars/480933736276426763/0a5dc684e7af1931381a6a1e79b3d4ea?size=1024", username: "INEX07" });
