const ListAnimalType = require('../models/list-animal-types-model');

const seedAnimalTypes = async () => {
    const types = [
        {type: 'Собака'},
        {type: 'Кот'},
        {type: 'Попугай'},
        {type: 'Хомяк'},
        {type: 'Кролик'}
    ];

    await ListAnimalType.bulkCreate(types, { ignoreDuplicates: true });
    console.log('Animal types seeded!');
};

module.exports = seedAnimalTypes;