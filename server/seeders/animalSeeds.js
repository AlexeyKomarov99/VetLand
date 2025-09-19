const Animal = require('../models/animals-model');
const ListAnimalType = require('../models/list-animal-types-model');
const AnimalStatus = require('../models/animal-status-model');
const Shelter = require('../models/shelters-model');

// Функция для генерации описания животного
const generateAnimalDescription = (animalName, animalType, gender) => {
    const genderPronouns = {
        'Мужской': {
            subject: 'он',
            object: 'его',
            possessive: 'его',
            adjective: 'красивый'
        },
        'Женский': {
            subject: 'она',
            object: 'её',
            possessive: 'её',
            adjective: 'красивая'
        }
    };
    
    const pronouns = genderPronouns[gender] || genderPronouns['Мужской'];
    const animalTypeText = animalType === 'Собака' ? 'собаке' : animalType === 'Кот' ? 'кошке' : 'питомце';

    const descriptions = [
        `С такой выразительной внешностью ${animalName} впору сниматься в чёрно-белом кино. Большие глаза, контрастный окрас и всегда немного удивлённый взгляд — ${pronouns.subject} запоминается с первого взгляда.`,
        
        `${animalName} обладает невероятной харизмой и умным взглядом. ${pronouns.subject} очень общительный и всегда рад новым знакомствам.`,
        
        `Этот ${animalType.toLowerCase()} покорит ваше сердце своей нежностью и преданностью. ${animalName} ищет семью, которая подарит ${pronouns.object} любовь и заботу.`,
        
        `${animalName} — настоящий друг с большим сердцем. ${pronouns.subject} прошел непростой путь и теперь готов к новой жизни в любящей семье.`,
        
        `Умный взгляд и доброе сердце — вот что отличает ${animalName}. ${pronouns.subject} очень ласковый и прекрасно ладит с людьми.`
    ];

    const stories = [
        `${animalName} попал к нам ещё малышом и прошел долгий путь реабилитации. Теперь ${pronouns.subject} полностью готов к переезду в новый дом.`,
        
        `История ${animalName} началась на улице, но теперь ${pronouns.subject} знает, что такое тепло и забота. ${pronouns.subject} очень благодарен людям за помощь.`,
        
        `${animalName} был передан в приют предыдущими хозяевами, но это не сломило ${pronouns.object} дух. ${pronouns.subject} сохранил доверие к людям и ждет свою семью.`,
        
        `Мы нашли ${animalName} на улице в тяжелом состоянии, но благодаря лечению и заботе ${pronouns.subject} полностью восстановился. Теперь ${pronouns.subject} полон энергии и любви.`
    ];

    const currentState = [
        `Теперь ${animalName} ласковый, активный, обожает играть и быть в центре внимания. Заметив посетителя, ${pronouns.subject} идёт навстречу в надежде найти друга.`,
        
        `${pronouns.subject} хорошо социализирован, приучен к лотку/выгулу и отлично ладит с другими животными.`,
        
        `${animalName} обладает спокойным характером, любит неспешные прогулки и домашний уют.`,
        
        `Это очень игривый и энергичный ${animalType.toLowerCase()}, который обожает активные игры и прогулки на свежем воздухе.`
    ];

    const mainDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    const story = stories[Math.floor(Math.random() * stories.length)];
    const state = currentState[Math.floor(Math.random() * currentState.length)];

    return `${mainDescription}\n\n${story}\n\n${state}`;
};

const getAnimalPhotos = (animalType, animalName, index) => {
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

    const dogNames = [
        'Бадди', 'Макс', 'Чарли', 'Белла', 'Луна', 'Купер', 'Бэйли', 'Сэди', 'Тоби', 'Рокки',
        'Джейк', 'Молли', 'Дейзи', 'Меджик', 'Сэм', 'Зои', 'Тедди', 'Гром', 'Лаки', 'Герда'
    ];
    
    const catNames = [
        'Мурзик', 'Вася', 'Барсик', 'Мурка', 'Симба', 'Лео', 'Оскар', 'Гарфилд', 'Том', 'Феликс',
        'Пушистик', 'Рыжик', 'Снежок', 'Зефир', 'Маркиз', 'Багира', 'Изида', 'Клеопатра', 'Персик', 'Амур'
    ];
    
    const otherNames = [
        'Кеша', 'Гоша', 'Рио', 'Хома', 'Пушистик', 'Боня', 'Цыпа', 'Крош', 'Немо', 'Дори',
        'Пик', 'Чик', 'Твити', 'Зиппи', 'Флэш', 'Спиди', 'Бамби', 'Тото', 'Симба', 'Зузу'
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

        // Генерация описания
        const animalDescr = generateAnimalDescription(animalName, animalType.type, gender);
        
        // Генерация финансовых показателей
        const needsTreatment = status.status !== 'Здоров';
        
        // Ежемесячный уход (для всех животных)
        const monthlyCare = Math.floor(Math.random() * 3000) + 2000; // 2000-5000 рублей
        
        // Полная сумма лечения (только для нуждающихся в лечении)
        const fullTreatment = needsTreatment ? Math.floor(Math.random() * 7000) + 5000 : 0; // 5000-12000 рублей
        
        // Сумма пожертвований (может быть как для лечения, так и для содержания)
        const donations = needsTreatment ? 
            Math.floor(Math.random() * fullTreatment) : // Для больных - до полной суммы лечения
            Math.floor(Math.random() * monthlyCare * 3); // Для здоровых - до 3 месяцев содержания

        animals.push({
            shelter_id: shelter.id,
            animalType_id: animalType.id,
            animalStatus_id: status.id,
            animalName,
            animalDescr,
            age,
            gender,
            monthlyCareAmount: monthlyCare,
            fullTreatmentAmount: fullTreatment,
            donationsAmount: donations,
            animalPhotosData: getAnimalPhotos(animalType.type, animalName, i)
        });
    }

    await Animal.bulkCreate(animals, { ignoreDuplicates: true });
    console.log(`100 animals with descriptions and financial parameters seeded!`);
};

module.exports = seedAnimals;