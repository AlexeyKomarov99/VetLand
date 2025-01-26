const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const TransactionsAnimal = sequelize.define('TransactionsAnimal', {
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
    animal_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Animals',
            key: 'id',
        },
    },
    transactionAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'TransactionsAnimals',
    timestamps: true,
});

module.exports = TransactionsAnimal;