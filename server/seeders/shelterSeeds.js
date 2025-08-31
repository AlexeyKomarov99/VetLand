const Shelter = require('../models/shelters-model');

const seedShelters = async () => {
    const count = await Shelter.count();
    if (count > 0) {
        console.log('Shelters already exist, skipping seeding');
        return;
    }

    const shelters = [
        {
            shelterName: 'Приют "Добрые руки"',
            region: 'Московская область',
            city: 'Москва',
            street: 'Ленина',
            houseNumber: 15,
            postalCode: 123456,
            contactPhone: '+79990000001',
            email: 'shelter1@mail.ru',
            shelterAmount: 50000.00,
            amountDonationsAnimals: 25,
            numberAnimals: 30
        },
        {
            shelterName: 'Приют "Лапка помощи"', 
            region: 'Ленинградская область',
            city: 'Санкт-Петербург',
            street: 'Пушкина',
            houseNumber: 42,
            postalCode: 654321,
            contactPhone: '+79990000002',
            email: 'shelter2@mail.ru',
            shelterAmount: 35000.50,
            amountDonationsAnimals: 18,
            numberAnimals: 22
        },
        {
            shelterName: 'Приют "Хвостики"',
            region: 'Новосибирская область', 
            city: 'Новосибирск',
            street: 'Гоголя',
            houseNumber: 7,
            postalCode: 630000,
            contactPhone: '+79990000003',
            email: 'shelter3@mail.ru',
            shelterAmount: 28000.75,
            amountDonationsAnimals: 15,
            numberAnimals: 18
        },
        {
            shelterName: 'Приют "Пушистые друзья"',
            region: 'Свердловская область',
            city: 'Екатеринбург',
            street: 'Мира',
            houseNumber: 33,
            postalCode: 620000,
            contactPhone: '+79990000004',
            email: 'shelter4@mail.ru',
            shelterAmount: 42000.25,
            amountDonationsAnimals: 22,
            numberAnimals: 28
        }
    ];

    await Shelter.bulkCreate(shelters, { ignoreDuplicates: true });
    console.log('4 shelters seeded!');
};

module.exports = seedShelters;