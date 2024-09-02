import { expect } from "chai";
import sinon from "sinon";
import { before } from "mocha";
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

    let userRepository;

    before(function () {
        userRepository = new UserRepository();
    })

    afterEach(function () {
        // Restaura os stubs para evitar interferências entre testes
        sinon.restore();
    });

    describe("create", function () {
        it("Should add a new user to the db", async function () {
            const stub = sinon.stub(UserModel, "create").returns(stubValue);
            const user = await userRepository.createUser({
                data: {
                    name: stubValue.name,
                    email: stubValue.email,
                },
            });

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
            const user = await userRepository.getUser(stubValue.id);

            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });

    describe("update", function () {
        it("Should update a user with specific id", async function () {
            const stub = sinon.stub(UserModel, "update").returns([1, [stubValue]]); // Simula retorno [affectedRows, [updatedUser]]
            const updatedUser = await userRepository.update({
                id: stubValue.id,
                data: {
                    name: stubValue.name,
                    email: stubValue.email,
                },
            });

            expect(stub.calledOnce).to.be.true;
            expect(updatedUser.id).to.equal(stubValue.id);
            expect(updatedUser.name).to.equal(stubValue.name);
            expect(updatedUser.email).to.equal(stubValue.email);
        });
    });

    describe("delete", function () {
        it("Should delete a user with specific id", async function () {
            const stub = sinon.stub(UserModel, "destroy").returns(1);
            const result = await userRepository.deleteUser(stubValue.id);

            expect(stub.calledOnce).to.be.true;
            expect(result).to.equal(1); // indica que um registro foi deletado
        });
    });
});
