import RoleRepository from "../../../application/ports/role_repository.js"

export default class DiscordRoleRepository extends RoleRepository {
    constructor(client) {
        super()
        this.client = client
    }

    async createMemberRole(guildId) {
        const guild = await this.client.guilds.fetch(guildId)

        const role = await guild.roles.create({
            name: "Bootstrap Member",
            color: "#5865F2",
            reason: "Role created for new members joining the guild"
        })

        return role
    }
}