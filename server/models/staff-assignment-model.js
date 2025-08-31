const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const StaffAssignment = sequelize.define('StaffAssignment', {
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
    shelter_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Shelters',
            key: 'id',
        },
    },
    role: {
        type: DataTypes.ENUM('admin', 'doctor', 'manager', 'volunteer'),
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    tableName: 'StaffAssignments',
    timestamps: true,
});

module.exports = StaffAssignment;