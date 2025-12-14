import { Client, GatewayIntentBits } from "discord.js";

export class DiscordBotAdapter {
    constructor(token, messageAdapter) {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ]
        })

        this.token = token
        this.messageAdapter = messageAdapter
    }

    async start() {
        this.client.once("clientReady", () => {
            console.log(`Bot conectado como ${this.client.user.tag}`)
        })

        this.client.on("messageCreate", async (message) => {
            this.messageAdapter.handle(message)
        })

        await this.client.login(this.token)
    }
}