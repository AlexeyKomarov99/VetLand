const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const TransactionsShelter = sequelize.define('TransactionsShelter', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    shelter_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Shelters',
            key: 'id',
        },
    },
    transactionAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'TransactionsShelters',
    timestamps: true,
});

module.exports = TransactionsShelter;