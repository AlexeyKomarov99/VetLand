const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const VolunteerApplication = sequelize.define('VolunteerApplication', {
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
    descriptionApplication: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    sendingRequest: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    tableName: 'VolunteerApplications',
    timestamps: true,
});

module.exports = VolunteerApplication;