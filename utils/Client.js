const fetch = require("node-fetch");

class Client {
    /**
     * @constructor
     * @param {string} webhookURL The webhook URL
     */
    constructor(webhookURL) {
        if (!webhookURL) throw new TypeError("[webhook] Incorrect Login details provied!");
        fetch(webhookURL)
        .then(res => res.json())
        .then(body => {
            if (!body.id) throw new TypeError("[webhook] Incorrect Login details provided!");
            if (!body.token) throw new TypeError("[webhook] Incorrect Login details provided!");
        });
        this.webhookClientURL = webhookURL;

    }

    /**
     * Send Message Through Webhook Client
     * @param {string} message Message
     * @param {string} username Webhook username
     * @param {string} avatarURL Avatar url of the webhook
     * @returns {Promise<Object>}
     */

    sendMessageEmbed(message, embed = [], username = null, avatarURL = null) {
        
        if (!message && embed.length === 0) throw new TypeError("[webhook] Cannot send an empty message!");

        return new Promise(async (resolve, reject) => {
            if (!username && !avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "content": `${message}`,
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                return
            }
            if (username && !avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": `${username}`,
                        "content": `${message}`,
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                return
            }
            if (!username && avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "avatar_url": `${avatarURL}`,
                        "content": `${message}`,
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                return
            }
            else {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": `${username}`,
                        "avatar_url": `${avatarURL}`,
                        "content": `${message}`,
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                    return
            }

        });
    }

    /**
     * Send Message Through Webhook Client
     * @param {string} message Message
     * @param {string} username Webhook username
     * @param {string} avatarURL Avatar url of the webhook
     * @returns {Promise<Object>}
     */

    sendMessage(message, username = null, avatarURL = null) {

        if (!message) throw new TypeError("[webhook] Cannot send an empty message!");

        return new Promise(async (resolve, reject) => {
            if (!username && !avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "content": `${message}`
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                    return
            }
            if (username && !avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": `${username}`,
                        "content": `${message}`
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                    return
            }
            if (!username && avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "avatar_url": `${avatarURL}`,
                        "content": `${message}`
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                    return
            }
            else {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": `${username}`,
                        "avatar_url": `${avatarURL}`,
                        "content": `${message}`
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                    return
            }

        });
    }

    /**
     * Send Embed Through Webhook Client
     * @param {Array} embed Embed object
     * @param {string} username Webhook username
     * @param {string} avatarURL Avatar url of the webhook
     * @returns {Promise<Object>}
     */

    sendEmbed(embed = [], username = null, avatarURL = null) {

        if (embed.length === 0) throw new TypeError("[webhook] Embed cannot be empty!");

        return new Promise(async (resolve, reject) => {
            if (!username && !avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                return
            }
            if (username && !avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": `${username}`,
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                return
            }
            if (!username && avatarURL) {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "avatar_url": `${avatarURL}`,
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                return
            }
            else {
                fetch(this.webhookClientURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": `${username}`,
                        "avatar_url": `${avatarURL}`,
                        "embeds": embed
                    })
                })
                    .catch((err) => {
                        console.log(err)
                    })
                return
            }

        });
    }
};

module.exports = Client;
