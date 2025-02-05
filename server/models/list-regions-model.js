const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const ListRegion = sequelize.define('ListRegion', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    regionName: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'ListRegions',
    timestamps: true
});

module.exports = ListRegion;