# discord.hook

A module for Discord Webhooks written in JavaScript.

> [![NPM](https://nodei.co/npm/discord.hook.png)](https://nodei.co/npm/discord.hook/)

## What's New?
- Supports Discord.js colors [ RANDOM, INVISIBLE, DARK..., #RRGGBB, [255, 0, 255], 123456, 0xFFFFFF ] etc.
- Bugs fixed
- Added DiscordEmbed
- Embed type: 'rich'

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

# Client Options

```js
client.send({ content, embeds, avatar_url, username });

```


## Links

**[Discord](https://discord.gg/mhcNBNq) | [GitHub](https://github.com/inex07)**
