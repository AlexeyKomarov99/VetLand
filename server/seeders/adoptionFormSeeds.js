const AdoptionForm = require('../models/adoption-forms-model');
const User = require('../models/user-model');
const Animal = require('../models/animals-model');

const seedAdoptionForms = async () => {
    const count = await AdoptionForm.count();
    if (count > 15) {
        console.log('Adoption forms already exist, skipping seeding');
        return;
    }
    
    const users = await User.findAll({ where: { role: 'user' } });
    const animals = await Animal.findAll();

    const answers = {
        doYouHavePet: ['Нет', 'Да, кот', 'Да, собака', 'Да, несколько животных'],
        yourAttitude: ['Положительное', 'Отрицательное', 'Нейтральное', 'Не задумывался'],
        whoWillLive: ['Один', 'Семья из 2 человек', 'Семья из 3 человек', 'Семья из 4+ человек'],
        whoWillStay: ['Друзья', 'Родители', 'Соседи', 'Передержка'],
        petCareDuringBusinessTrips: ['Родственники', 'Друзья', 'Профессиональная передержка', 'Соседи', 'Возьму с собой'],
        reasons: ['Аллергия', 'Переезд', 'Финансовые трудности', 'Изменение жизненных обстоятельств'],
        howHear: ['Из интернета', 'От друзей', 'Соцсети', 'Реклама', 'Случайно узнал']
    };

    const names = ['Иван', 'Мария', 'Алексей', 'Екатерина', 'Дмитрий', 'Ольга', 'Сергей', 'Анна'];
    const surnames = ['Иванов', 'Петрова', 'Сидоров', 'Смирнова', 'Кузнецов', 'Попова', 'Васильев', 'Новикова'];
    const regions = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород'];

    const statuses = ['pending', 'approved', 'rejected', 'in_review'];

    const adoptionForms = [];

    // Создаем 15 анкет усыновления
    for (let i = 0; i < 15; i++) {
        const user = users[i % users.length];
        const animal = animals[Math.floor(Math.random() * animals.length)];

        const name = names[i % names.length];
        const surname = surnames[i % surnames.length];
        const region = regions[i % regions.length];

        adoptionForms.push({
            // Поля пользователя (теперь хранятся в самой анкете)
            name: name,
            surname: surname,
            phone: `+7${9000000000 + i}`,
            email: `${name.toLowerCase()}.${surname.toLowerCase()}${i}@example.com`,
            age: 25 + (i % 20),
            region: region,
            
            // Обязательная ссылка на животное
            animal_id: animal.id,
            
            // Опциональная ссылка на пользователя
            user_id: Math.random() > 0.3 ? user.id : null, // 70% с пользователем, 30% без
            
            // Данные анкеты
            fullAddress: `г. ${region}, ул. Примерная, д. ${i + 1}, кв. ${i + 10}`,
            profileSocialNetwork: `${['vk.com', 'instagram.com', 'facebook.com'][i % 3]}/user${i}`,
            typeAndNameAnimalYouLiked: `${animal.animalName} (${animal.gender === 'Мужской' ? 'мальчик' : 'девочка'})`,
            doYouHavePet: answers.doYouHavePet[Math.floor(Math.random() * answers.doYouHavePet.length)],
            yourAttitudeTowardsCastrationSterilization: answers.yourAttitude[Math.floor(Math.random() * answers.yourAttitude.length)],
            whoWillLiveWithYou: answers.whoWillLive[Math.floor(Math.random() * answers.whoWillLive.length)],
            whoWillStayWithPetInCaseSeparation: answers.whoWillStay[Math.floor(Math.random() * answers.whoWillStay.length)],
            petCareDuringBusinessTrips: answers.petCareDuringBusinessTrips[Math.floor(Math.random() * answers.petCareDuringBusinessTrips.length)],
            reasonForRefusingLiveTogetherWithAnimal: answers.reasons[Math.floor(Math.random() * answers.reasons.length)],
            consentForFeedbackFromShelter: 'Да',
            howDidYouHearAboutOurFoundation: answers.howHear[Math.floor(Math.random() * answers.howHear.length)],
            
            // Новые поля
            status: statuses[Math.floor(Math.random() * statuses.length)],
            reviewNotes: Math.random() > 0.7 ? `Заметки по анкете ${i + 1}: требуется дополнительная проверка` : null
        });
    }

    await AdoptionForm.bulkCreate(adoptionForms, { ignoreDuplicates: true });
    console.log(`Adoption forms seeded! Total: ${adoptionForms.length} forms`);
};

module.exports = seedAdoptionForms;