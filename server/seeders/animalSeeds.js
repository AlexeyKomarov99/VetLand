const Animal = require('../models/animals-model');
const ListAnimalType = require('../models/list-animal-types-model');
const AnimalStatus = require('../models/animal-status-model');
const Shelter = require('../models/shelters-model');

const getAnimalPhotos = (animalType, animalName, index) => {
    // Генерация уникальных фото на основе индекса животного
    const getUniquePhoto = (seed, width = 600, height = 400) => {
        return `https://picsum.photos/seed/${seed}/${width}/${height}`;
    };

    return {
        photos: Array(4).fill(0).map((_, i) => {
            const uniqueSeed = `${animalType}-${animalName}-${index}-${i}`;
            return {
                url: getUniquePhoto(uniqueSeed),
                description: `${animalType} ${animalName} - фото ${i + 1}`,
                isMain: i === 0,
                uploadDate: new Date()
            };
        })
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