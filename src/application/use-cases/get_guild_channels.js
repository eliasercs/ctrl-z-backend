export default class GetGuildChannels {
    constructor(channelRepository) {
        this.channelRepository = channelRepository
    }

    async execute(guildId) {
        return await this.channelRepository.getChannels(guildId)
    }
}