// models/Client.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Client extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Client',
});

export default Client;
