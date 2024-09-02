import { Sequelize, DataTypes, Model } from "sequelize";
const sequelize = new Sequelize('sqlite::memory:');

class UserModel extends Model {}

UserModel.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize, // connection instance
        modelName: "User",
    }
);

export default UserModel;
