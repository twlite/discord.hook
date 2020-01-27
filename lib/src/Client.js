const gatewayURL = `https://canary.discordapp.com/api/webhooks`;
const fetch = require("node-fetch");
const { EventEmitter } = require("events");

class Client extends EventEmitter {

    /**
     * @constructor
     * @param {string} id Webhook client ID
     * @param {string} token Webhook client token
     */

    constructor(id, token) {
        super();
        if (!id) throw new Error("Invalid Webhook Details");
        if (typeof id != "string") throw new Error("Invalid Webhook Details");
        if (!token) throw new Error("Invalid Webhook Details");
        if (typeof token != "string") throw new Error("Invalid Webhook Details");

        fetch(`${gatewayURL}/${id}/${token}`)
            .then(res => res.json())
            .then(body => {
                if (!body.id) throw new Error("Invalid Webhook Details");
                body.user = {
                    bot: true,
                    discriminator: '0000',
                    defaultAvatarURL: "https://cdn.discordapp.com/embed/avatars/0.png",
                    avatarURL: body.avatar ? `https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}` : null,
                    displayAvatarURL: body.avatar ? `https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}` : `https://cdn.discordapp.com/embed/avatars/0.png`,
                    username: body.name,
                    tag: `${body.name}#0000`
                };
                body.webhookURL = `${gatewayURL}/${body.id}/${body.token}`;
                body.mention = `<@${body.id}>`;
                this.emit("CONNECTED", body);
            });
        this.webhookURL = `${gatewayURL}/${id}/${token}`;
    }

    /**
    * Sends Message Embed
    */

    async sendEmbed(embed) {
        await this.send({ embeds: embed.embeds });
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    async sendMessage(content) {
        await this.send(content);
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    async createMessage(content) {
        await this.send(content);
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    async say(content) {
        await this.send(content);
    }

    /**
     * Sends Message
     * @param {string} content Content to send
     */

    async send(content) {
        if (!content) throw new Error("Can't send empty message!");
        this.emit("MESSAGE", content);
        return await fetch(this.webhookURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        });
    }

    /**
     * Info
     */

    async info() {
        let inf = await fetch(this.webhookURL);
        return inf.json()
    }
}

module.exports = Client;
