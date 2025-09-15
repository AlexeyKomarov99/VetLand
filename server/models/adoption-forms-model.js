const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const AdoptionForm = sequelize.define('AdoptionForm', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: true, // Делаем необязательным
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    stagesAnimalAdoption_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'StagesAnimalAdoptions',
            key: 'id',
        },
    },
    animal_id: {
        type: DataTypes.UUID,
        allowNull: true, // Делаем необязательным
        references: {
            model: 'Animals',
            key: 'id',
        },
    },
    // Контактная информация для незарегистрированных пользователей
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Данные анкеты
    fullAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profileSocialNetwork: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typeAndNameAnimalYouLiked: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    doYouHavePet: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    yourAttitudeTowardsCastrationSterilization: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    whoWillLiveWithYou: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    whoWillStayWithPetInCaseSeparation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    petCareDuringBusinessTrips: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reasonForRefusingLiveTogetherWithAnimal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    consentForFeedbackFromShelter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    howDidYouHearAboutOurFoundation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'AdoptionForms',
    timestamps: true,
});

module.exports = AdoptionForm;