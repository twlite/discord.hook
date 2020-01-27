const Webhook = require("../lib/index");
const client = new Webhook.Client("671266166299426816", "93O0GmqOWLbaE_YFrrGlZC2bF1fwBgXN3uJccmOd4YAUR43DX3yWLYSWCnL-abvBZRY2");

client.on("CONNECTED", (c) => {
    console.log(`Connected!\nUsername: ${c.user.tag}`);
});

client.on("MESSAGE", (m) => {
    console.log("Message sent!\n"+JSON.stringify(m));
});

const embed = new Webhook.DiscordEmbed()
    .setTitle("This is your title, it can hold 256 characters")
    .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png", "https://discordapp.com")
    .setColor("BLURPLE")
    .setDescription("This is the main body of text, it can hold 2048 characters.")
    .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
    .setImage("http://i.imgur.com/yVpymuV.png")
    .setThumbnail("http://i.imgur.com/p2qNFag.png")
    .setTimestamp()
    .setURL("https://discord.gg")
    .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")
    .addField("Inline Field", "They can also be inline.", true)
    .addField("Inline Field 2", "You can have a maximum of 25 fields.", true)
    .addBlankField()
    .addField("Field", "~~Hot~~ **Cool** __Right?__");

client.send({ embeds: embed.embeds, content: 'Hello World!', avatar_url: "https://cdn.discordapp.com/avatars/480933736276426763/a_73d44cd1aea26f51ca96febf07fb0019.png?size=1024", username: "INEX07" });
