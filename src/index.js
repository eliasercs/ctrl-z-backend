import process from "node:process"
import { bootstrap } from "./bootstrap/bootstrap.js"

const {discordBot, httpServer} = bootstrap({
    DISCORD_TOKEN: process.env.DISCORD_TOKEN
})

discordBot.start()
httpServer.listen(3000, () => {
    console.log("HTTP server listening on port 3000")
})