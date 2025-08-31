const userSeeds = require('./userSeeds');
const animalStatusSeeds = require('./animalStatusSeeds');
const animalTypeSeeds = require('./animalTypeSeeds');
const shelterSeeds = require('./shelterSeeds');
const animalSeeds = require('./animalSeeds');
const medicalRecordSeeds = require('./medicalRecordSeeds');
const transactionsShelterSeeds = require('./transactionsShelterSeeds');
const transactionAnimalSeeds = require('./transactionAnimalSeeds');
const adoptionFormSeeds = require('./adoptionFormSeeds');
const stagesAdoptionSeeds = require('./stagesAdoptionSeeds');
const adoptedAnimalSeeds = require('./adoptedAnimalSeeds');
const volunteerApplicationSeeds = require('./volunteerSeeds');
const staffAssignmentSeeds = require('./staffAssignmentSeeds');

const runAllSeeds = async () => {
    try {
        // 1. Справочники
        await animalStatusSeeds();
        await animalTypeSeeds();

        // 2. Основные данные
        await userSeeds();
        await shelterSeeds();
        await staffAssignmentSeeds();

        // 3. Данные с связями
        await animalSeeds();
        await medicalRecordSeeds();

        // 4. Транзакции (после пользователей и животных)
        await transactionsShelterSeeds();
        await transactionAnimalSeeds();

        // 5. Остальное
        await stagesAdoptionSeeds(); // ← ДО adoption forms!
        await adoptionFormSeeds(); // ← Теперь будет stagesAnimalAdoption_id
        await adoptedAnimalSeeds();
        await volunteerApplicationSeeds();

        console.log('All seeds completed successfully!');
    } catch (error) {
        console.log('Seeding error:', error);
    }
};

module.exports = runAllSeeds;