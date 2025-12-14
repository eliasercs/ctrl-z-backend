import process from "node:process"
import { bootstrap } from "./bootstrap/bootstrap.js"

const bot = bootstrap({
    DISCORD_TOKEN: process.env.DISCORD_TOKEN
})

bot.start()