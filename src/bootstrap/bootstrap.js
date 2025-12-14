import { PingUseCase } from "../application/use-cases/ping.js";
import { DiscordBotAdapter } from "../infrastructure/adapters/discord/bot.js";
import { DiscordMessageAdapter } from "../infrastructure/adapters/discord/message.js";

export function bootstrap(config) {
    const pingUseCase = new PingUseCase()
    const messageAdapter = new DiscordMessageAdapter(pingUseCase)
    const discordBot = new DiscordBotAdapter(config.discordToken, messageAdapter)

    return discordBot
}