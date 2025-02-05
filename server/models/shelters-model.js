const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Shelter = sequelize.define('Shelter', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    shelterName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    region: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'ListRegions',
            key: 'id',
        },
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    houseNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    contactPhone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shelterAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    amountDonationsAnimals: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numberAnimals: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'Shelters',
    timestamps: true,
});

module.exports = Shelter;