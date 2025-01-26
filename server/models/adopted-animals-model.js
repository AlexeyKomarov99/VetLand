const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const AdoptedAnimal = sequelize.define('AdoptedAnimal', {
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
    adoptedAnimalPhotosData: {
        type: DataTypes.JSONB,
        allowNull: true,
    }
}, {
    tableName: 'AdoptedAnimals',
    timestamps: true,
});

module.exports = AdoptedAnimal;