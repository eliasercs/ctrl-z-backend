import GetGuildMembers from "../../../../application/use-cases/get_guild_members.js"
import GetGuildChannels from "../../../../application/use-cases/get_guild_channels.js"
import { Router } from "express"


export default function guildRouter(guildRepository, channelRepository) {
    const router = Router()

    router.get("/:guildId/members", async (req, res) => {
        try {
            const getGuildMembers = new GetGuildMembers(guildRepository)
            const members = await getGuildMembers.execute(req.params.guildId)
            res.json(members)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    })

    router.get("/:guildId/channels", async (req, res) => {
        try {
            const getGuildChannels = new GetGuildChannels(channelRepository)
            const channels = await getGuildChannels.execute(req.params.guildId)
            res.json(channels)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    })

    return router
}