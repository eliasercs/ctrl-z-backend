export class MessageContents {
    constructor(value) {
        if (!value || value.length === 0) {
            throw new Error('El contenido del mensaje no puede estar vacío.')
        }

        this.value = value
        Object.freeze(this)
    }
}
