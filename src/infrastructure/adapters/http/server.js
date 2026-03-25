import express from "express"

export default class Server {
    constructor({ port, guildRouter }) {
        this.app = express()
        this.port = port || 3000
        this.guildRouter = guildRouter
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use("/api/guilds", this.guildRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}