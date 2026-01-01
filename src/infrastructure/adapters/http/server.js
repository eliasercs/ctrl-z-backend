import express from "express"
import GetGuildMembers from "../../../application/use-cases/get_guild_members.js"

export default function createServer(guildRepository) {
    const app = express()

    app.get("/guilds/:guildId/members", async (req, res) => {
        try {
            const useCase = new GetGuildMembers(guildRepository)
            const members = await useCase.execute(req.params.guildId)
            res.json(members)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    })

    return app
}