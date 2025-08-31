const StagesAnimalAdoption = require('../models/stages-animal-adoption-model');
const User = require('../models/user-model');

const seedStagesAdoption = async () => {
    const count = await StagesAnimalAdoption.count();
    if (count > 20) {
        console.log('Adoption stages already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'user' } });

    const stages = [];

    // Создаем этапы для 20 пользователей
    for (let i = 0; i < 20; i++) {
        const user = users[i];
        if (!user) continue;

        const progress = Math.floor(Math.random() * 7); // случайный прогресс 0-6
        
        stages.push({
            user_id: user.id,
            choosingAnimal: progress >= 1,
            fillingOutQuestionnaire: progress >= 2,
            interview: progress >= 3,
            acquaintance: progress >= 4,
            decision: progress >= 5,
            tripHome: progress >= 6,
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000)) // последние 90 дней
        });
    }

    await StagesAnimalAdoption.bulkCreate(stages, { ignoreDuplicates: true });
    console.log(`Adoption stages seeded! Total: ${stages.length} stages`);
};

module.exports = seedStagesAdoption;