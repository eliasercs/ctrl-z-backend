import { PingUseCase } from "../application/use-cases/ping.js";
import { DiscordBotAdapter } from "../infrastructure/adapters/discord/bot.js";
import { DiscordMessageAdapter } from "../infrastructure/adapters/discord/message.js";
import DiscordGuildRepositoryAdapter from "../infrastructure/adapters/discord/guild_repository.js"
import createServer from "../infrastructure/adapters/http/server.js"

export function bootstrap(config) {
    const pingUseCase = new PingUseCase()
    const messageAdapter = new DiscordMessageAdapter(pingUseCase)
    const discordBot = new DiscordBotAdapter(config.discordToken, messageAdapter)

    const guildRepository = new DiscordGuildRepositoryAdapter(discordBot.client)
    const httpServer = createServer(guildRepository)    

    return {discordBot, httpServer}
}