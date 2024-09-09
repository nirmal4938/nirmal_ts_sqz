// models/DeviceType.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class DeviceType extends Model {
    public id!: number;
    public typeName!: string;
}

DeviceType.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    typeName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'DeviceType',
});

export default DeviceType;
