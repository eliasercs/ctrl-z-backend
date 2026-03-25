import ChannelRepositoryPort from "../../../application/ports/channel_repository.js"

export default class DiscordChannelRepositoryPort extends ChannelRepositoryPort {
    constructor(client) {
        super()
        this.client = client
    }

    async getChannels(guildId) {
        const guild = await this.client.guilds.fetch(guildId)
        const channels = await guild.channels.fetch()

        return channels.map(channel => channel.type === 0 ? channel : null).filter(channel => channel !== null)
    }
}