import process from "node:process"
import { bootstrap } from "./bootstrap/bootstrap.js"

const {discordBot, httpServer} = bootstrap({
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    PORT: process.env.PORT
})

discordBot.start()
httpServer.listen()