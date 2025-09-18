const User = require('../models/user-model');
const Token = require('../models/token-model');
const TransactionsShelter = require('../models/transactions-shelter-model');
const TransactionsAnimal = require('../models/transactions-animal-model');
const MedicalRecord = require('../models/medical-records-model');
const StagesAnimalAdoption = require('../models/stages-animal-adoption-model');
const Shelter = require('../models/shelters-model');
const Animal = require('../models/animals-model');
const AdoptedAnimal = require('../models/adopted-animals-model');
const ListAnimalType = require('../models/list-animal-types-model');
const AnimalStatus = require('../models/animal-status-model');
const AdoptionForm = require('../models/adoption-forms-model');
const VolunteerApplication = require('../models/volunteer-applications');
const StaffAssignment = require('../models/staff-assignment-model');

//========== Установка ассоциаций между таблицами ==========//

//===== ОСНОВНЫЕ СВЯЗИ ДЛЯ ЖИВОТНЫХ (ваш главный запрос) =====//

Animal.belongsTo(ListAnimalType, { 
    foreignKey: 'animalType_id', 
    as: 'AnimalType' 
});
ListAnimalType.hasMany(Animal, { 
    foreignKey: 'animalType_id', 
    as: 'Animals' 
});

Animal.belongsTo(AnimalStatus, { 
    foreignKey: 'animalStatus_id', 
    as: 'AnimalStatus' 
});
AnimalStatus.hasMany(Animal, { 
    foreignKey: 'animalStatus_id', 
    as: 'Animals' 
});

Animal.belongsTo(Shelter, { 
    foreignKey: 'shelter_id', 
    as: 'Shelter' 
});
Shelter.hasMany(Animal, { 
    foreignKey: 'shelter_id', 
    as: 'Animals' 
});

//===== ПОЛЬЗОВАТЕЛИ И ТОКЕНЫ =====//

User.hasOne(Token, { 
    foreignKey: 'user_id', 
    as: 'Token' 
});
Token.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'User' 
});

//===== ТРАНЗАКЦИИ =====//

User.hasMany(TransactionsShelter, { 
    foreignKey: 'user_id', 
    as: 'ShelterTransactions' 
});
TransactionsShelter.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'Donor' 
});

Shelter.hasMany(TransactionsShelter, { 
    foreignKey: 'shelter_id', 
    as: 'ReceivedTransactions' 
});
TransactionsShelter.belongsTo(Shelter, { 
    foreignKey: 'shelter_id', 
    as: 'BeneficiaryShelter' 
});

User.hasMany(TransactionsAnimal, { 
    foreignKey: 'user_id', 
    as: 'AnimalTransactions' 
});
TransactionsAnimal.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'AnimalDonor' 
});

Animal.hasMany(TransactionsAnimal, { 
    foreignKey: 'animal_id', 
    as: 'ReceivedDonations' 
});
TransactionsAnimal.belongsTo(Animal, { 
    foreignKey: 'animal_id', 
    as: 'BeneficiaryAnimal' 
});

//===== МЕДИЦИНСКИЕ ЗАПИСИ =====//

// УБИРАЕМ animalStatus_id из MedicalRecord - это ошибка!
// Статус должен быть только у Animal

User.hasMany(MedicalRecord, { 
    foreignKey: 'user_id', 
    as: 'CreatedMedicalRecords' 
});
MedicalRecord.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'Doctor' 
});

Animal.hasMany(MedicalRecord, { 
    foreignKey: 'animal_id', 
    as: 'MedicalHistory' 
});
MedicalRecord.belongsTo(Animal, { 
    foreignKey: 'animal_id', 
    as: 'Patient' 
});

//===== УСЫНОВЛЕНИЕ И АНКЕТЫ =====//

// ИСПРАВЛЯЕМ: AdoptionForm -> StagesAnimalAdoption (а не наоборот)
AdoptionForm.hasMany(StagesAnimalAdoption, { 
    foreignKey: 'adoptionForm_id', 
    as: 'AdoptionStages' 
});
StagesAnimalAdoption.belongsTo(AdoptionForm, { 
    foreignKey: 'adoptionForm_id', 
    as: 'Form' 
});

// ИСПРАВЛЯЕМ: User -> StagesAnimalAdoption
User.hasMany(StagesAnimalAdoption, { 
    foreignKey: 'user_id', 
    as: 'UserAdoptionStages' 
});
StagesAnimalAdoption.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'Applicant' 
});

// ИСПРАВЛЯЕМ: Animal -> AdoptionForm (а не наоборот)
Animal.hasOne(AdoptionForm, { 
    foreignKey: 'animal_id', 
    as: 'AdoptionForm' 
});
AdoptionForm.belongsTo(Animal, { 
    foreignKey: 'animal_id', 
    as: 'Animal' 
});

// User -> AdoptionForm
User.hasMany(AdoptionForm, { 
    foreignKey: 'user_id', 
    as: 'SubmittedForms' 
});
AdoptionForm.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'Applicant' 
});

//===== УСЫНОВЛЕННЫЕ ЖИВОТНЫЕ =====//

User.hasMany(AdoptedAnimal, { 
    foreignKey: 'user_id', 
    as: 'AdoptedPets' 
});
AdoptedAnimal.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'Owner' 
});

Animal.hasOne(AdoptedAnimal, { 
    foreignKey: 'animal_id', 
    as: 'AdoptionRecord' 
});
AdoptedAnimal.belongsTo(Animal, { 
    foreignKey: 'animal_id', 
    as: 'Pet' 
});

//===== ВОЛОНТЕРЫ И ПЕРСОНАЛ =====//

User.hasOne(VolunteerApplication, { 
    foreignKey: 'user_id', 
    as: 'VolunteerApplication' 
});
VolunteerApplication.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'Applicant' 
});

// Связь многие-ко-многим через StaffAssignment
User.belongsToMany(Shelter, {
    through: StaffAssignment,
    foreignKey: 'user_id',
    as: 'Workplaces'
});

Shelter.belongsToMany(User, {
    through: StaffAssignment,
    foreignKey: 'shelter_id', 
    as: 'StaffMembers'
});

// Прямые связи для удобства
StaffAssignment.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'StaffUser' 
});
StaffAssignment.belongsTo(Shelter, { 
    foreignKey: 'shelter_id', 
    as: 'Workplace' 
});
User.hasMany(StaffAssignment, { 
    foreignKey: 'user_id', 
    as: 'JobAssignments' 
});
Shelter.hasMany(StaffAssignment, { 
    foreignKey: 'shelter_id', 
    as: 'StaffAssignments' 
});

//===== ПРИЮТЫ =====//

User.hasMany(Shelter, { 
    foreignKey: 'user_id', 
    as: 'ManagedShelters' 
});
Shelter.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'Manager' 
});

module.exports = {
    User,
    Token,
    TransactionsShelter,
    TransactionsAnimal,
    MedicalRecord,
    StagesAnimalAdoption,
    Shelter,
    Animal,
    AdoptedAnimal,
    ListAnimalType,
    AnimalStatus,
    AdoptionForm,
    VolunteerApplication,
    StaffAssignment
};