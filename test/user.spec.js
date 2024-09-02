import { expect } from "chai";
import sinon from "sinon";
import { faker } from "@faker-js/faker";

import UserModel from "../src/database/models/User.model.js";
import { UserRepository } from "../src/user/repositories/User.repository.js";

describe("UserRepository", function () {
    const stubValue = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
    };

    describe("create", async function () {
        it("Should add a new user to the db", async function () {
            const stub = sinon.stub(UserModel, "create").returns(stubValue);
            const userRepository = new UserRepository();
            const user = await userRepository.create(
                stubValue.name,
                stubValue.email
            );
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });

    describe("getUser", function () {
        it("should retrieve a user with specific id", async function () {
            const stub = sinon.stub(UserModel, "findOne").returns(stubValue);
            const userRepository = new UserRepository();
            const user = await userRepository.getUser(stubValue.id);

            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });

    it("", function () {});
});
