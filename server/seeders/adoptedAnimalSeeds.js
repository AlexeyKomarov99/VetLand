const AdoptedAnimal = require('../models/adopted-animals-model');
const User = require('../models/user-model');
const Animal = require('../models/animals-model');

const seedAdoptedAnimals = async () => {
    const count = await AdoptedAnimal.count();
    if (count > 10) {
        console.log('Adopted animals already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'user' } });
    const animals = await Animal.findAll();

    const adoptedAnimals = [];

    // 10 успешных усыновлений
    for (let i = 0; i < 10; i++) {
        const user = users[i];
        const animal = animals[i];

        if (!user || !animal) continue;

        adoptedAnimals.push({
            user_id: user.id,
            animal_id: animal.id,
            adoptedAnimalPhotosData: {
                photos: [
                    `https://images.unsplash.com/photo-1576201836696-38cb8e0a9c12?auto=format&fit=crop&w=600&h=400&random=${i}1`,
                    `https://images.unsplash.com/photo-1576201836696-38cb8e0a9c12?auto=format&fit=crop&w=600&h=400&random=${i}2`
                ]
            }
        });
    }

    await AdoptedAnimal.bulkCreate(adoptedAnimals, { ignoreDuplicates: true });
    console.log(`Adopted animals seeded! Total: ${adoptedAnimals.length} adoptions`);
};

module.exports = seedAdoptedAnimals;