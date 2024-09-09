// models/Tank.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Device from './Device';

class Tank extends Model {
    public deviceId!: number;
    public capacity!: number;
}

Tank.init({
    deviceId: {
        type: DataTypes.INTEGER,
        references: {
            model: Device,
            key: 'id',
        },
        primaryKey: true,
    },
    capacity: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Tank',
});

Tank.belongsTo(Device, { foreignKey: 'deviceId' });

export default Tank;
