const gatewayURL = `https://canary.discordapp.com/api/webhooks`;
const fetch = require("node-fetch");

class Client {

    /**
     * @constructor
     * @param {string} id Webhook client ID
     * @param {string} token Webhook client token
     */

    constructor(id, token) {
        if (!id) throw new Error("Invalid Webhook Details");
        if (typeof id != "string") throw new Error("Invalid Webhook Details");
        if (!token) throw new Error("Invalid Webhook Details");
        if (typeof token != "string") throw new Error("Invalid Webhook Details");

        fetch(`${gatewayURL}/${id}/${token}`)
            .then(res => res.json())
            .then(body => {
                if (!body.id) throw new Error("Invalid Webhook Details");
            })

        this.webhookURL = `${gatewayURL}/${id}/${token}`;
        this.type = 1;
        this.discriminator = '0000';
        this.bot = true;
        this.token = token || null;
        this.id = id || null;
        this.defaultAvatarURL = `https://cdn.discordapp.com/embed/avatars/0.png`;

    }

    /**
     * Sends Message Embed
     */

    sendEmbed(embed) {
        this.send({ embeds: embed.embeds });
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    sendMessage(content) {
        this.send(content);
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    createMessage(content) {
        this.send(content);
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    say(content) {
        this.send(content);
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    send(content) {
        if (!content) throw new Error("Can't send empty message!");
        return fetch(this.webhookURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        });
    }

    info() {
        fetch(`${this.webhookURL}`)
            .then(res => res.json())
            .then(body => {

                const ClientInformation = {
                    avatar: body.avatar,
                    defaultAvatarURL: `https://cdn.discordapp.com/embed/avatars/0.png`,
                    displayAvatarURL: body.avatar ? `https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}.png?size=2048` : this.defaultAvatarURL,
                    channelID: body.channel_id,
                    guildID: body.guild_id,
                    id: body.id,
                    type: body.type,
                    username: body.name,
                    discriminator: "0000",
                    tag: body.name + '#0000',
                    token: body.token,
                    url: this.webhookURL,
                    mention: `<@!${body.id}>`,
                    channelMention: `<#${body.channel_id}>`
                }

                return ClientInformation
            })
    }
}

module.exports = Client;
