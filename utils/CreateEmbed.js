class CreateEmbed {
    /**
     * @constructor
     */
    constructor() {
        this.embed = [{
            title: null,
            url: null,
            author: null,
            color: null,
            description: null,
            thumbnail: null,
            fields: [],
            image: null,
            footer: null,
            timestamp: null
        }];
    }

    /**
     * Sets the title of the embed.
     * @param {string} title The title
     * @returns {CreateEmbed}
     */
    setTitle(title) {
        if (!title) throw new Error("[webhook] Title shouldn't be empty!");
        if (title.length > 256) throw new Error("[webhook] Title should be less than 256 characters!");
        this.embed[0].title = title;
        return this;
    }

    /**
     * Sets the URL of the embed.
     * @param {string}
     * @returns {CreateEmbed}
     */
    setURL(url) {
        if (!url) throw new Error("[webhook] URL value shouldn't be empty!");
        this.embed[0].url = url;
        return this;
    }

    /**
     * Sets the description of the embed.
     * @param {string} description The description
     * @returns {CreateEmbed}
     */
    setDescription(description) {
        if (!description) throw new Error("[webhook] Description shouldn't be empty!");
        if (description.length > 2048) throw new Error("[webhook] Description value should be less than 2048 characters!");
        this.embed[0].description = description;
        return this;
    }

    /**
     * Sets the image of the embed.
     * @param {string} imageURL The URL of the image
     * @returns {CreateEmbed}
     */
    setImage(imageURL) {
        if (!imageURL) throw new Error("[webhook] Image url shouldn't be empty!");
        this.embed[0].image = {
            url: imageURL
        };
        return this;
    }

    /**
     * Sets the thumbnail of the embed.
     * @param {string} thumbnailURL The URL of the thumbnail
     * @returns {CreateEmbed}
     */
    setThumbnail(thumbnailURL) {
        if (!thumbnailURL) throw new Error("[webhook] Thumbnail url shouldn't be empty!");
        this.embed[0].thumbnail = {
            url: thumbnailURL
        };
        return this;
    }

    /**
     * Sets the footer of the embed.
     * @param {string} text The text of the footer
     * @param {string} iconURL The icon URL of the footer
     * @returns {CreateEmbed}
     */
    setFooter(text, iconURL) {
        if (!text) throw new Error("[webhook] Footer text shouldn't be empty!");
        if (text.length > 2048) throw new Error("[webhook] Footer text should be less than 2048 characters!");
        if (!iconURL) iconURL = null;
        this.embed[0].footer = {
            text: text,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the timestamp of the embed.
     * @returns {CreateEmbed}
     */
    setTimestamp() {
        this.embed[0].timestamp = new Date();
        return this;
    }

    /**
     * Sets the author of the embed.
     * @param {string} name The name of the author
     * @param {string} iconURL The icon URL of the author
     * @returns {CreateEmbed}
     */
    setAuthor(name, iconURL) {
        if (!name) throw new Error("[webhook] Author name shouldn't be empty!");
        if (name.length > 256) throw new Error("[webhook] Author name value should be less than 256 characters!");
        if (!iconURL) iconURL = null;
        this.embed[0].author = {
            name: name,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the color of the embed.
     * @param {ColorResolvable} color The color of the embed
     * @returns {CreateEmbed}
     */
    setColor(color) {
        if (!color) throw new Error("[webhook] Embed color shouldn't be empty!");
        let convertColor = 
        this.embed[0].color = color;
        return this;
    }

    /**
     * Adds a field to the embed.
     * @param {string} name The name of the field
     * @param {string} value The value of the field
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {CreateEmbed}
     */
    addField(name, value, inline = false) {
        if (!name) throw new Error("[webhook] Embed field name shouldn't be empty!");
        if (name.length > 256) throw new Error("[webhook] Embed field value should be less than 256 characters!");
        if (!value) value = 'undefined';
        if (value.length > 1024) throw new Error("[webhook] Embed field value should be less than 1024 characters!");
        if (this.embed[0].fields.length > 25) throw new Error("[webhook] Embed fields should be less than 25!");
        this.embed[0].fields.push({
            name,
            value,
            inline: inline ? true : false
        });
        return this;
    }

    /**
    * Adds a blank field to the embed.
    * @param {boolean} [inline=false] Set the field to display inline
    * @returns {CreateEmbed}
    */
    addBlankField(inline = false) {
        if (this.embed[0].fields.length > 25) throw new Error("[webhook] Embed fields should be less than 25!");
        return this.addField('\u200B', '\u200B', inline);
    }
};

module.exports = CreateEmbed;
