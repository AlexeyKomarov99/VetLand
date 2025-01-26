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
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    stagesAnimalAdoption_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'StagesAnimalAdoptions',
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
    // Ваше отношение к кастрации и стерилизации ?
    yourAttitudeTowardsCastrationSterilization: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Кто будет жить с тобой ?
    whoWillLiveWithYou: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // кто останется с питомцем в случае разлуки ?
    whoWillStayWithPetInCaseSeparation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Причина отказа жить вместе с животным ?
    reasonForRefusingLiveTogetherWithAnimal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Cогласие на обратную связь от приюта
    consentForFeedbackFromShelter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Как вы узнали о нашем фонде ?
    howDidYouHearAboutOurFoundation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'AdoptionForms',
    timestamps: true,
});

module.exports = AdoptionForm;