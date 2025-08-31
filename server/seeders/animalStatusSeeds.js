const AnimalStatus = require('../models/animal-status-model');

const seedAnimalStatuses = async () => {
    const statuses = [
        { status: 'Здоров' },
        { status: 'Болен' },
        { status: 'На лечении' },
        { status: 'Требуется операция' },
        { status: 'Реабилитация' }
    ];

    await AnimalStatus.bulkCreate(statuses, { ignoreDuplicates: true });
    console.log('Animal statuses seeded!');
};

module.exports = seedAnimalStatuses;