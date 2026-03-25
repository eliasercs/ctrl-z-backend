import { PingUseCase } from "../application/use-cases/ping.js";
import { DiscordBotAdapter } from "../infrastructure/adapters/discord/bot.js";
import { DiscordMessageAdapter } from "../infrastructure/adapters/discord/message.js";
import DiscordRoleRepository from "../infrastructure/adapters/discord/role_repository.js"
import DiscordGuildRepositoryAdapter from "../infrastructure/adapters/discord/guild_repository.js"
import DiscordChannelRepositoryPort from "../infrastructure/adapters/discord/channel_repository.js"
import Server from "../infrastructure/adapters/http/server.js"
import guildRouter from "../infrastructure/adapters/http/routes/guild_routes.js"

export function bootstrap(config) {
    const pingUseCase = new PingUseCase()
    const messageAdapter = new DiscordMessageAdapter(pingUseCase)
    const discordBot = new DiscordBotAdapter(config.discordToken, messageAdapter)

    const guildRepository = new DiscordGuildRepositoryAdapter(discordBot.client)
    const channelRepository = new DiscordChannelRepositoryPort(discordBot.client)
    const httpServer = new Server({port: config.PORT, guildRouter: guildRouter(guildRepository, channelRepository)}) 

    return {discordBot, httpServer}
}