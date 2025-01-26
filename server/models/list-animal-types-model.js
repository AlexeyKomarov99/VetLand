const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const ListAnimalType = sequelize.define('ListAnimalType', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'ListAnimalTypes',
    timestamps: true,
});

module.exports = ListAnimalType;