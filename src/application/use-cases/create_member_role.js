export default class CreateMemberRole {
    constructor(roleRepository) {
        this.roleRepository = roleRepository
    }

    async execute(guildId) {
        return await this.roleRepository.createMemberRole(guildId)
    }
}