import GuildRepositoryPort from "../../../application/ports/guild_repository.js"

export default class DiscordGuildRepositoryAdapter extends GuildRepositoryPort {
    constructor(client) {
        super()
        this.client = client
    }

    async getMembers(guildId) {
        const guild = await this.client.guilds.fetch(guildId)
        
        const members = await guild.members.fetch()

        return members.map(member => (member))
    }
}