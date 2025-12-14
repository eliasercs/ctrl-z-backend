export class DiscordMessageAdapter {
    constructor(pingUseCase) {
        this.pingUseCase = pingUseCase
    }

    handle(message) {
        if (message.author.bot) return

        if (message.content === '!ping') {
            const response = this.pingUseCase.execute()
            message.reply(response.value)
        }
    }
}