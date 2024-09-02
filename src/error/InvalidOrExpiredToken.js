export class InvalidOrExpiredToken extends Error {
    constructor() {
        super('Invalid or expired token');
    }
}
