export default class GetGuildMembers {
    constructor(guildRepository) {
        this.guildRepository = guildRepository
    }

    async execute(guildId) {
        return await this.guildRepository.getMembers(guildId)
    }
}