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

//===== Пользователь =====//

//=== Связь между "Пользователями" и "Токенами" ===///
User.hasOne(Token, {foreignKey: 'user_id', sourceKey: 'id', as: 'Tokens'});
Token.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//=== Связь между "Пользователями" и "Приютами" (админ) ===//
User.hasMany(Shelter, {foreignKey: 'user_id', sourceKey: 'id', as: 'Shelters'});
Shelter.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//=== Связь между "Пользователями" и "Транзакциями приюту" ===//
User.hasMany(TransactionsShelter, {foreignKey: 'user_id', sourceKey: 'id', as: 'TransactionsShelters'});
TransactionsShelter.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//=== Связь между "Пользователями" и "Транзакциями животных" ===//
User.hasMany(TransactionsAnimal, {foreignKey: 'user_id', sourceKey: 'id', as: 'TransactionsAnimals'});
TransactionsAnimal.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//=== Связь между "Пользователями" и "Медицинскими записями" (доктор) ===//
User.hasMany(MedicalRecord, {foreignKey: 'user_id', sourceKey: 'id', as: 'MedicalRecords'})
MedicalRecord.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//=== Связь между "Пользователями" и "Формами усыновления" ===//
User.hasMany(AdoptionForm, {foreignKey: 'user_id', sourceKey: 'id', as: 'AdoptionForms'});
AdoptionForm.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//=== Связь между "Пользователями" и "Этапы усыновления животных" ===//
User.hasMany(StagesAnimalAdoption, {foreignKey: 'user_id', sourceKey: 'id', as: 'StagesAnimalAdoptions'});
StagesAnimalAdoption.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//=== Связи между "Пользователями" и "Усыновленными животными" ===//
User.hasMany(AdoptedAnimal, {foreignKey: 'user_id', sourceKey: 'id', as: 'AdoptedAnimals'});
AdoptedAnimal.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});

//===== Заявления на волонтерство =====//

//=== Связи между "Заявлениями на волонтерство" и "Пользователями" ===//
VolunteerApplication.hasOne(User, {foreignKey: 'user_id', sourceKey: 'id', as: 'Users'});
User.belongsTo(VolunteerApplication, {foreignKey: 'user_id', sourceKey: 'id', as: 'VolunteerApplications'});

//===== Приют =====//

//=== Связь между "Приютом" и "Транзакциями денег приюту" ===//
Shelter.hasMany(TransactionsShelter, {foreignKey: 'shelter_id', sourceKey: 'id', as: 'TransactionsShelters'});
TransactionsShelter.belongsTo(Shelter, {foreignKey: 'shelter_id', targetKey: 'id', as: 'Shelters'});

//=== Связь между "Приютом" и "Животными" ===//
Shelter.hasMany(Animal, {foreignKey: 'shelter_id', sourceKey: 'id', as: 'Animals'});
Animal.belongsTo(Shelter, {foreignKey: 'shelter_id', targetKey: 'id', as: 'Shelter'});

//===== Животные =====//

//=== Связь между "Животными" и "Транзакциями денег животным" ===//
Animal.hasMany(TransactionsAnimal, { foreignKey: 'animal_id', sourceKey: 'id', as: 'TransactionsAnimals'});
TransactionsAnimal.belongsTo(Animal, {foreignKey: 'animal_id', targetKey: 'id', as: 'Animals'});

//=== Связь между "Животными" и "Медицинскими записями" ===//
Animal.hasMany(MedicalRecord, {foreignKey: 'animal_id', sourceKey: 'id', as: 'MedicalRecords'});
MedicalRecord.belongsTo(Animal, {foreignKey: 'animal_id', targetKey: 'id', as: 'Animals'});

//=== Связь между "Животными" и "Списком типов животных" ===//
Animal.hasOne(ListAnimalType, {foreignKey: 'animal_id', sourceKey: 'id', as: 'ListAnimalTypes'});
ListAnimalType.belongsTo(Animal, {foreignKey: 'animal_id', targetKey: 'id', as: 'Animals'});

//=== Связь между "Животными" и "Списком статусов животных" ===//
Animal.hasOne(AnimalStatus, {foreignKey: 'animal_id', sourceKey: 'id', as: 'AnimalStatuses'});
AnimalStatus.belongsTo(Animal, {foreignKey: 'animal_id', targetKey: 'id', as: 'Animals'});

//===== Анкета об усыновлении =====//

//=== Связь между "Анкетой об усыновлении" и "Этапами усыновления животного" ===//
// AdoptionForm.hasOne(StagesAnimalAdoption, {foreignKey: 'adoptionForms_id', sourceKey: 'id', as: 'StagesAnimalAdoptions'});
StagesAnimalAdoption.belongsTo(AdoptionForm, {foreignKey: 'adoptionForms_id', targetKey: 'id', as: 'AdoptionForms'});

//=== Связь между "Анкетой об усыновлении" и "Животными" ===//
AdoptionForm.hasOne(Animal, {foreignKey: 'adoptionForms_id', sourceKey: 'id', as: 'Animals'});
Animal.belongsTo(AdoptionForm, {foreignKey: 'adoptionForms_id', targetKey: 'id', as: 'AdoptionForms'});

//===== Этапы прохождения усыновления животного =====//

//=== Связь между "Этапами усыновления животного" и "Пользователи" ===//
StagesAnimalAdoption.hasMany(User, {foreignKey: 'stagesAnimalAdoption_id', sourceKey: 'id', as: 'Users'});
User.belongsTo(StagesAnimalAdoption, {foreignKey: 'stagesAnimalAdoption_id', sourceKey: 'id', as: 'Users'});

//===== Усыновленные животные =====//

//=== Связь между "Усыновленными животными" и "Пользователями" ===//
AdoptedAnimal.hasMany(User, {foreignKey: 'adoptedAnimal_id', sourceKey: 'id', as: 'Users'});
User.belongsTo(AdoptedAnimal, {foreignKey: 'adoptedAnimal_id', sourceKey: 'id', as: 'User'})

//=== Связь между "Усыновленными животными" и "Животными" ===//
AdoptedAnimal.hasOne(Animal, {foreignKey: 'adoptedAnimal_id', sourceKey: 'id', as: 'Animals'});
Animal.belongsTo(AdoptedAnimal, {foreignKey: 'adoptedAnimal_id', sourceKey: 'id', as: 'AdoptedAnimals'});

// Связь пользователей с приютами через StaffAssignment
User.belongsToMany(Shelter, {
    through: StaffAssignment,
    foreignKey: 'user_id',
    as: 'WorkShelters'
});

Shelter.belongsToMany(User, {
    through: StaffAssignment,
    foreignKey: 'shelter_id', 
    as: 'StaffUsers'
});

// Прямые связи для удобства
StaffAssignment.belongsTo(User, { foreignKey: 'user_id', as: 'User' });
StaffAssignment.belongsTo(Shelter, { foreignKey: 'shelter_id', as: 'Shelter' });
User.hasMany(StaffAssignment, { foreignKey: 'user_id', as: 'StaffAssignments' });
Shelter.hasMany(StaffAssignment, { foreignKey: 'shelter_id', as: 'StaffAssignments' });

module.exports = [
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
];