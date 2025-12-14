import { MessageContents } from "../../domain/value-objects/MessageContents.js"

export class PingUseCase {
    execute() {
        return new MessageContents('Pong!');
    }
}