// models/Location.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Client from './Client';

class Location extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public clientId!: number;
    public latitude!: number;
    public longitude!: number;
}

Location.init({
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
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id',
        },
        allowNull: false,
    },
    longitude: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Location',
});

Location.belongsTo(Client, { foreignKey: 'clientId' });

export default Location;
