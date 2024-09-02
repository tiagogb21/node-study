export class InvalidOrExpiredToken extends Error {
    constructor() {
        super('User not found');
    }
}
