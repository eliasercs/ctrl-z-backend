import { Client, GatewayIntentBits } from "discord.js"
import Member from "../../../domain/entities/member.js"
import WelcomeNewMember from "../../../application/use-cases/welcome_new_member.js"
import CanvasWelcomeImageAdapter from "../image/welcome.js"
import DiscordWelcomeMessageAdapter from "./welcome.js"

export class DiscordBotAdapter {
    constructor(token, messageAdapter) {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers
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

        this.client.on("guildMemberAdd", async (guildMember) => {
            const member = new Member({
                id: guildMember.id,
                username: guildMember.user.username,
                avatarUrl: guildMember.user.displayAvatarURL({
                    extension: "png", size: 256
                }),
                memberCount: guildMember.guild.memberCount
            })

            const useCase = new WelcomeNewMember({
                welcomeImagePort: new CanvasWelcomeImageAdapter(),
                welcomeMessagePort: new DiscordWelcomeMessageAdapter(this.client, "general")
            })

            await useCase.execute(member)

        })

        await this.client.login(this.token)
    }
}