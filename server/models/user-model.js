const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin', 'manager', 'doctor'),
        allowNull: false,
        defaultValue: 'user'
    },
    age: {
        type:DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    emailConfirmation: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    totalAmountDonations: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    displayRatingDonations: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    tableName: 'Users',
    timestamps: true
});

module.exports = User;