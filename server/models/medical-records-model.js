const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const MedicalRecord = sequelize.define('MedicalRecord', {
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
            key: 'id'
        },
    },
    // УДАЛЕНО: animalStatus_id - статус должен быть только у Animal
    medicalReport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    diagnosis: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    treatment: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    prescription: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    nextVisitDate: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    tableName: 'MedicalRecords',
    timestamps: true,
});

module.exports = MedicalRecord;