export class InvalidCredentialsError extends Error {
    constructor() {
        super('Wrong email or password!');
    }
}