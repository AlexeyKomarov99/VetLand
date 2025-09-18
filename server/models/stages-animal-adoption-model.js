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
    adoptionForm_id: {
        type: DataTypes.UUID,
        allowNull: false, // Теперь обязательное поле
        references: {
            model: 'AdoptionForms',
            key: 'id',
        },
    },
    
    // Этапы усыновления
    choosingAnimal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    fillingOutQuestionnaire: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    interview: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    acquaintance: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    decision: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    tripHome: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    
    // Дополнительные поля для отслеживания прогресса
    currentStage: {
        type: DataTypes.ENUM(
            'choosing',
            'questionnaire',
            'interview',
            'acquaintance',
            'decision',
            'completed'
        ),
        defaultValue: 'choosing'
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    completionDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    
    // Примечания по этапам
    stageNotes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'StagesAnimalAdoptions',
    timestamps: true,
});

module.exports = StagesAnimalAdoption;