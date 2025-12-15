export default class WelcomeNewMember {
    constructor({ welcomeImagePort, welcomeMessagePort }) {
        this.welcomeImagePort = welcomeImagePort
        this.welcomeMessagePort = welcomeMessagePort
    }

    async execute(member) {
        const image = await this.welcomeImagePort.generate(member)
        await this.welcomeMessagePort.send(member, image)
    }
}