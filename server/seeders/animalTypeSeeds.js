const ListAnimalType = require('../models/list-animal-types-model');

const seedAnimalTypes = async () => {
    const types = [
        {type: 'Собаки'},
        {type: 'Кошки'},
        {type: 'Птицы'},
        {type: 'Грызуны'},
        {type: 'Кролики'}
    ];

    await ListAnimalType.bulkCreate(types, { ignoreDuplicates: true });
    console.log('Animal types seeded!');
};

module.exports = seedAnimalTypes;