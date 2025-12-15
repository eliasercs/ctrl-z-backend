import { AttachmentBuilder } from "discord.js"
import WelcomeMessagePort from "../../../application/ports/welcome_message.js"

export default class DiscordWelcomeMessageAdapter extends WelcomeMessagePort {
    constructor(client, channelName) {
        super()
        this.client = client
        this.channelName = channelName
    }

    async send(member, imageBuffer) {

        const messages = [
            `¡Bienvenido/a al servidor, <@${member.id}>! 🎉`,
            `¡Hola <@${member.id}>! Nos alegra tenerte aquí. 😊`,
            `¡Saludos <@${member.id}>! Prepárate para una gran experiencia. 🚀`,
            `¡Qué gusto verte, <@${member.id}>! Bienvenido/a a nuestra comunidad. 🤗`,
            `¡Hey <@${member.id}>! Gracias por unirte a nosotros. 🎊`
        ]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        const guild = this.client.guilds.cache.first()
        const channel = guild.channels.cache.find(ch => ch.name === this.channelName)

        if (!channel) return

        const attachment = new AttachmentBuilder(imageBuffer, { name: 'welcome-image.png' })

        await channel.send({
            content : randomMessage,
            files: [attachment]
        })
    }
}