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
    animalStatus_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'AnimalStatuses',
            key: 'id',
        },
    },
    medicalReport: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'MedicalRecords',
    timestamps: true,
});

module.exports = MedicalRecord;