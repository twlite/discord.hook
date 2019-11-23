# webhook.js

A module for Discord Webhooks written in JavaScript.

> [![NPM](https://nodei.co/npm/discord.hook.png)](https://nodei.co/npm/discord.hook/)

## Installing

```
npm i --save discord.webhook

```

## Webhook Class

```js

const Hook = require('discord.webhook');
const client = new Hook.Client('webhook-url');

```


## Sending Message

```js

const Hook = require('discord.webhook');
const client = new Hook.Client('webhook-url');

let message = "Hello, I'm a webhook."

client.createMessage(message);

```

## Sending Embed

```js

const Hook = require('discord.webhook');
const client = new Hook.Client('webhook-url');

const Embed = new Hook.CreateEmbed()
    .setAuthor('Text', 'Icon URL')
    .setTitle('Text')
    .setURL('URL here')
    .setDescription('Write your description.')
    .addField('A Field', 'Not Inline')
    .addField('Another Field', 'Not Inline')
    .addBlankField(/* This is a blank field. */)
    .addField('This is another field.', 'But inline', true)
    .addField('This is another inline field', 'hmm', true)
    .addField('You can add 25 fields like this.', 'ok?', true)
    .setThumbnail('Thumbnail Image URL')
    .setImage('Image URL')
    .setFooter('This is footer text.', 'footer icon URL')
    .setTimestamp(/* This is a timestamp of this message */)
    .setColor(000000) // This is a color

client.createMessage(Embed.embed); // here we send embed

```

## Sending Embed And Message

```js

const Hook = require('discord.webhook');
const client = new Hook.Client('webhook-url');

const message = "Hello, this is a webhook";

const Embed = new Hook.CreateEmbed()
    .setAuthor('Text', 'Icon URL')
    .setTitle('Text')
    .setURL('URL here')
    .setDescription('Write your description.')
    .addField('A Field', 'Not Inline')
    .addField('Another Field', 'Not Inline')
    .addBlankField(/* This is a blank field. */)
    .addField('This is another field.', 'But inline', true)
    .addField('This is another inline field', 'hmm', true)
    .addField('You can add 25 fields like this.', 'ok?', true)
    .setThumbnail('Thumbnail Image URL')
    .setImage('Image URL')
    .setFooter('This is footer text.', 'footer icon URL')
    .setTimestamp(/* This is a timestamp of this message */)
    .setColor(000000) // This is a color

client.createMessage(message, Embed.embed); // here we send embed with message

```

# Client Options

```js

client.createMessage(message, embed.embed, 'username to display while sending message', 'avatar URL to display while sending message');

```

## Full Example
```js

const Hook = require('discord.webhook');
const client = new Hook.Client('webhook-url');

const message = "Hello, this is a webhook";

const Embed = new Hook.CreateEmbed()
    .setAuthor('Text', 'Icon URL')
    .setTitle('Text')
    .setURL('URL here')
    .setDescription('Write your description.')
    .addField('A Field', 'Not Inline')
    .addField('Another Field', 'Not Inline')
    .addBlankField(/* This is a blank field. */)
    .addField('This is another field.', 'But inline', true)
    .addField('This is another inline field', 'hmm', true)
    .addField('You can add 25 fields like this.', 'ok?', true)
    .setThumbnail('Thumbnail Image URL')
    .setImage('Image URL')
    .setFooter('This is footer text.', 'footer icon URL')
    .setTimestamp(/* This is a timestamp of this message */)
    .setColor(000000) // This is a color

client.createMessage(message, embed.embed, 'username to display while sending message', 'avatar URL to display while sending message'); // Here we send embed with message, custom username and avatar.

```


## Links

**[Discord](https://discord.gg/mhcNBNq) | [GitHub](https://github.com/inex07)**
