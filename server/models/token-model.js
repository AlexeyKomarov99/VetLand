const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Token = sequelize.define('Token', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'Tokens',
    timestamps: true,
});

module.exports = Token;