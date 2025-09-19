const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Animal = sequelize.define('Animal', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    shelter_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Shelters',
            key: 'id',
        },
    },
    animalType_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'ListAnimalTypes',
            key: 'id',
        },
    },
    animalStatus_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'AnimalStatuses',
            key: 'id',
        },
    },
    animalName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    animalDescr: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    animalPhotosData: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    monthlyCareAmount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
    },
    fullTreatmentAmount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
    },
    donationsAmount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
    }
}, {
    tableName: 'Animals',
    timestamps: true,
});

module.exports = Animal;