const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const AnimalStatus = sequelize.define('AnimalStatus', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'AnimalStatuses',
    timestamps: true,
});

module.exports = AnimalStatus;