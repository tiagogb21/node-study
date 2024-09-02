import UserModel from "../models/User.model.js";

export class UserRepository {
    constructor() {
        this.user = UserModel;
        this.user.sync({ force: true });
    }

    async create(name, email) {
        return this.user.create({
            name,
            email,
        });
    }

    async getUser(id) {
        return this.user.findOne({ id });
    }
}
