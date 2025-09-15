const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const StagesAnimalAdoption = sequelize.define('StagesAnimalAdoption', {
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
    adoptionForms_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'AdoptionForms',
            key: 'id',
        },
    },
    choosingAnimal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // Заполнение анкеты
    fillingOutQuestionnaire: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // Интервью
    interview: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // Знакомство
    acquaintance: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // Решение
    decision: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // Путешествие домой
    tripHome: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'StagesAnimalAdoptions',
    timestamps: true,
});

module.exports = StagesAnimalAdoption;