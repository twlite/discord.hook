# discord.hook

A module for Discord Webhooks written in JavaScript.

[![NPM](https://nodei.co/npm/discord.hook.png)](https://nodei.co/npm/discord.hook/)

## What's New?
- Supports Discord.js colors [ RANDOM, INVISIBLE, DARK..., #RRGGBB, [255, 0, 255], 123456, 0xFFFFFF ] etc.
- Bugs fixed
- Added DiscordEmbed
- Added events

## Installing

```
npm i --save discord.hook
```

## Webhook

```js

const Hook = require('discord.hook');
const client = new Hook.Client('webhook-id', 'webhook-token');

```


## Sending Message

```js

const Hook = require('discord.hook');
const client = new Hook.Client('webhook-id', 'webhook-token');

let message = "Hello, I'm a webhook."

client.send({ content: message });

```

## Sending Embed

```js

const Hook = require('discord.hook');
const client = new Hook.Client('webhook-id', 'webhook-token');

const Embed = new Hook.DiscordEmbed()
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

client.send(Embed);

```

## Sending Embed And Message

```js

const Hook = require('discord.hook');
const client = new Hook.Client('webhook-id', 'webhook-token');

const message = "Hello, this is a webhook";

const Embed = new Hook.DiscordEmbed()
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

client.send({ content: message, embeds: Embed.embeds }); // here we send embed with message

```

# Example

```js
const Webhook = require("discord.hook");
const client = new Webhook.Client("671266166299426816", "93O0GmqOWLbaE_YFrrGlZC2bF1fwBgXN3uJccmOd4YAUR43DX3yWLYSWCnL-abvBZRY2");

client.on("CONNECTED", (c) => {
    console.log(`Connected!\nUsername: ${c.user.tag}`);
});

client.on("MESSAGE_SEND", (m) => {
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
```
![img](https://github.com/INEX07/discord.hook/blob/master/image.png?raw=true)

# Client Options

```js
client.send({ content, embeds, avatar_url, username });

```

# Events
- "CONNECTED" : Whenever the webhook is connected!
- "MESSAGE" : Whenever send() function is used!

## Links

**[Discord](https://discord.gg/mhcNBNq) | [GitHub](https://github.com/inex07)**
