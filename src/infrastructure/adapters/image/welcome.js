import Canvas from 'canvas'
import path from 'path'
import { fileURLToPath } from "url"
import WelcomeImagePort from "../../../application/ports/welcome_image.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Canvas.registerFont(
    path.join(__dirname, "../../../../src/assets/fonts/poppins/Poppins-Regular.ttf"),
    { family: "Poppins", weight: "400" }
)

Canvas.registerFont(
    path.join(__dirname, "../../../../src/assets/fonts/poppins/Poppins-Medium.ttf"),
    { family: "Poppins", weight: "500" }
)

Canvas.registerFont(
    path.join(__dirname, "../../../../src/assets/fonts/poppins/Poppins-Bold.ttf"),
    { family: "Poppins", weight: "600" }
)

export default class CanvasWelcomeImageAdapter extends WelcomeImagePort {
    async generate(member) {
        const canvas = Canvas.createCanvas(1024, 450)

        const avatarSize = 200;
        const avatarX = (canvas.width - avatarSize) / 2;
        const avatarY = (canvas.height - avatarSize) / 2;
        const avatarRadius = avatarSize / 2;

        const ctx = canvas.getContext('2d')

        const bg = await Canvas.loadImage(path.join(__dirname, '../../../../src/assets/background.png'))

        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

        const titleSize = Math.floor(canvas.height * 0.10)
        const userSize = Math.floor(canvas.height * 0.05)

        ctx.fillStyle = '#ffffff'

        ctx.font = `600 ${titleSize}px "Poppins"`;
        ctx.textAlign = 'center'
        ctx.fillText(
            "Bienvenido al servidor,",
            canvas.width / 2,
            75
        );

        ctx.font = `400 ${userSize}px "Poppins"`;
        ctx.textAlign = 'center'
        ctx.fillText(
            `@${member.username}`,
            canvas.width / 2,
            105
        );

        ctx.font = `400 ${titleSize}px "Poppins"`;
        ctx.textAlign = 'center'
        ctx.fillText(
            `Eres el miembro`,
            canvas.width / 2,
            370
        );

        ctx.font = `600 ${titleSize}px "Poppins"`;
        ctx.textAlign = 'center'
        ctx.fillText(
            `#${member.memberCount}`,
            canvas.width / 2,
            410
        );
        
        const avatar = await Canvas.loadImage(member.avatarUrl)

        ctx.save()
        ctx.beginPath()
        ctx.arc(
            avatarX + avatarRadius,
            avatarY + avatarRadius,
            avatarRadius,
            0,
            Math.PI * 2
        )
        ctx.closePath()
        ctx.clip()
        ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize)
        ctx.restore()

        return canvas.toBuffer()
    }
}