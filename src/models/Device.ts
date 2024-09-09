// models/Device.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Location from './location.model';
import DeviceType from './DeviceType';

class Device extends Model {
    public id!: number;
    public name!: string;
    public deviceTypeId!: number;
    public locationId!: number;
}

Device.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deviceTypeId: {
        type: DataTypes.INTEGER,
        references: {
            model: DeviceType,
            key: 'id',
        },
        allowNull: false,
    },
    locationId: {
        type: DataTypes.INTEGER,
        references: {
            model: Location,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Device',
});

Device.belongsTo(DeviceType, { foreignKey: 'deviceTypeId' });
Device.belongsTo(Location, { foreignKey: 'locationId' });

export default Device;
