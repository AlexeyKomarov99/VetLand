const Animal = require('../models/animals-model');
const ListAnimalType = require('../models/list-animal-types-model');
const AnimalStatus = require('../models/animal-status-model');
const Shelter = require('../models/shelters-model');

const getAnimalPhotos = (animalType, animalName, index) => {
    // Фиксированные ID изображений с Unsplash Source для каждого типа
    const photoCollections = {
        'Собака': {
            ids: ['eBmyH7oO5wY', 'Qy4kL6BU2Wg', 'hXUZwp6q_2s', 'dYEuFB8KQJk'],
            base: 'https://images.unsplash.com/photo-'
        },
        'Кот': {
            ids: ['wJ1lOWqqK7o', 'J2oNHYSwVtM', 'YCPkW_r_6uA', 'so5nsYDOdxw'],
            base: 'https://images.unsplash.com/photo-'
        },
        'Попугай': {
            ids: ['rRiNtQvqBr4', 'rRiNtQvqBr4', '6R2uhb7zZgA', '6R2uhb7zZgA'],
            base: 'https://images.unsplash.com/photo-'
        },
        'Кролик': {
            ids: ['K9olx8OF36A', 'K9olx8OF36A', 'ndC6oLyV6C8', 'ndC6oLyV6C8'],
            base: 'https://images.unsplash.com/photo-'
        }
    };

    const collection = photoCollections[animalType] || photoCollections['Собака'];
    
    return {
        photos: collection.ids.map((id, i) => ({
            url: `${collection.base}${id}?auto=format&fit=crop&w=600&h=400`,
            description: `${animalType} ${animalName} - фото ${i + 1}`,
            isMain: i === 0,
            uploadDate: new Date()
        }))
    };
};

const seedAnimals = async () => {
    const count = await Animal.count();
    if (count > 50) {
        console.log('Animals already exist, skipping seeding');
        return;
    }

    const animalTypes = await ListAnimalType.findAll();
    const animalStatuses = await AnimalStatus.findAll(); 
    const shelters = await Shelter.findAll();

    // Расширенные массивы имен
    const dogNames = [
        'Бадди', 'Макс', 'Чарли', 'Белла', 'Луна', 'Купер', 'Бэйли', 'Сэди', 'Тоби', 'Рокки',
        'Джейк', 'Молли', 'Дейзи', 'Меджик', 'Сэм', 'Зои', 'Тедди', 'Гром', 'Лаки', 'Герда',
        'Рекс', 'Цезарь', 'Арес', 'Грей', 'Спарки', 'Блэки', 'Вайт', 'Браун', 'Спот', 'Фокси'
    ];
    
    const catNames = [
        'Мурзик', 'Вася', 'Барсик', 'Мурка', 'Симба', 'Лео', 'Оскар', 'Гарфилд', 'Том', 'Феликс',
        'Пушистик', 'Рыжик', 'Снежок', 'Зефир', 'Маркиз', 'Багира', 'Изида', 'Клеопатра', 'Персик', 'Амур',
        'Гав', 'Мяу', 'Пушок', 'Компот', 'Василёк', 'Филя', 'Кузя', 'Боня', 'Цунами', 'Вулкан'
    ];
    
    const otherNames = [
        'Кеша', 'Гоша', 'Рио', 'Хома', 'Пушистик', 'Боня', 'Цыпа', 'Крош', 'Немо', 'Дори',
        'Пик', 'Чик', 'Твити', 'Зиппи', 'Флэш', 'Спиди', 'Бамби', 'Тото', 'Симба', 'Зузу',
        'Квики', 'Баззи', 'Физзи', 'Диззи', 'Виззи', 'Флаффи', 'Софти', 'Шелби', 'Рубби', 'Голди'
    ];

    const animals = [];

    for (let i = 0; i < 100; i++) {
        const shelter = shelters[Math.floor(Math.random() * shelters.length)];
        const animalType = animalTypes[Math.floor(Math.random() * animalTypes.length)];
        const status = animalStatuses[Math.floor(Math.random() * animalStatuses.length)];

        let animalName;
        let age;
        let gender;

        if (animalType.type === 'Собака') {
            animalName = dogNames[Math.floor(Math.random() * dogNames.length)];
            age = Math.floor(Math.random() * 15) + 1;
            gender = Math.random() > 0.5 ? 'Мужской' : 'Женский';
        } 
        else if (animalType.type === 'Кот') {
            animalName = catNames[Math.floor(Math.random() * catNames.length)];
            age = Math.floor(Math.random() * 12) + 1;
            gender = Math.random() > 0.5 ? 'Мужской' : 'Женский';
        }
        else {
            animalName = otherNames[Math.floor(Math.random() * otherNames.length)];
            age = Math.floor(Math.random() * 8) + 1;
            gender = Math.random() > 0.5 ? 'Мужской' : 'Женский';
        }

        animals.push({
            shelter_id: shelter.id,
            animalType_id: animalType.id,
            animalStatus_id: status.id,
            animalName,
            age,
            gender,
            amountTreatment: status.status !== 'Здоров' ? Math.floor(Math.random() * 20000) + 1000 : 0,
            animalPhotosData: getAnimalPhotos(animalType.type, animalName, i)
        });
    }

    await Animal.bulkCreate(animals, { ignoreDuplicates: true });
    console.log(`100 animals with consistent photos seeded!`);
};

module.exports = seedAnimals;