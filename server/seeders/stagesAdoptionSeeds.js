const StagesAnimalAdoption = require('../models/stages-animal-adoption-model');
const User = require('../models/user-model');
const AdoptionForm = require('../models/adoption-forms-model');

const seedStagesAdoption = async () => {
    const count = await StagesAnimalAdoption.count();
    if (count > 20) {
        console.log('Adoption stages already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'user' } });
    const adoptionForms = await AdoptionForm.findAll();

    const stages = [];

    // Создаем этапы для adoption forms
    for (let i = 0; i < Math.min(20, adoptionForms.length); i++) {
        const form = adoptionForms[i];
        const user = users.find(u => u.id === form.user_id) || users[i % users.length];

        const progress = Math.floor(Math.random() * 7); // случайный прогресс 0-6
        
        const stageTypes = ['choosing', 'questionnaire', 'interview', 'acquaintance', 'decision', 'completed'];
        const currentStage = progress < 6 ? stageTypes[progress] : 'completed';
        
        const startDate = new Date(Date.now() - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000));
        const completionDate = progress === 6 ? new Date(startDate.getTime() + Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)) : null;

        stages.push({
            user_id: user.id,
            adoptionForm_id: form.id,
            choosingAnimal: progress >= 1,
            fillingOutQuestionnaire: progress >= 2,
            interview: progress >= 3,
            acquaintance: progress >= 4,
            decision: progress >= 5,
            tripHome: progress >= 6,
            currentStage: currentStage,
            isCompleted: progress === 6,
            completionDate: completionDate,
            stageNotes: progress > 3 ? `Прогресс по этапам усыновления: ${currentStage}` : null,
            createdAt: startDate
        });
    }

    await StagesAnimalAdoption.bulkCreate(stages, { ignoreDuplicates: true });
    console.log(`Adoption stages seeded! Total: ${stages.length} stages`);
};

module.exports = seedStagesAdoption;