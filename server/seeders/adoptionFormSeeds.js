const AdoptionForm = require('../models/adoption-forms-model');
const User = require('../models/user-model');
const Animal = require('../models/animals-model');
const StagesAnimalAdoption = require('../models/stages-animal-adoption-model');

const seedAdoptionForms = async () => {
    const count = await AdoptionForm.count();
    if (count > 15) {
        console.log('Adoption forms already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'user' } });
    const animals = await Animal.findAll();
    const stages = await StagesAnimalAdoption.findAll();

    const answers = {
        doYouHavePet: ['Нет', 'Да, кот', 'Да, собака', 'Да, несколько животных'],
        yourAttitude: ['Положительное', 'Отрицательное', 'Нейтральное', 'Не задумывался'],
        whoWillLive: ['Один', 'Семья из 2 человек', 'Семья из 3 человек', 'Семья из 4+ человек'],
        whoWillStay: ['Друзья', 'Родители', 'Соседи', 'Передержка'],
        reasons: ['Аллергия', 'Переезд', 'Финансовые трудности', 'Изменение жизненных обстоятельств'],
        howHear: ['Из интернета', 'От друзей', 'Соцсети', 'Реклама', 'Случайно узнал']
    };

    const adoptionForms = [];

    // Создаем 15 анкет усыновления
    for (let i = 0; i < 15; i++) {
        const user = users[i];
        const animal = animals[Math.floor(Math.random() * animals.length)];
        const stage = stages.find(s => s.user_id === user.id) || stages[0];

        if (!user || !animal || !stage) continue;

        adoptionForms.push({
            user_id: user.id,
            animal_id: animal.id,
            stagesAnimalAdoption_id: stage.id,
            fullAddress: `г. ${['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'][i % 4]}, ул. Примерная, д. ${i + 1}, кв. ${i + 10}`,
            profileSocialNetwork: `${['vk.com', 'instagram.com', 'facebook.com'][i % 3]}/user${i}`,
            typeAndNameAnimalYouLiked: `${animal.animalType_id === 1 ? 'Собака' : 'Кот'} ${animal.animalName}`,
            doYouHavePet: answers.doYouHavePet[Math.floor(Math.random() * answers.doYouHavePet.length)],
            yourAttitudeTowardsCastrationSterilization: answers.yourAttitude[Math.floor(Math.random() * answers.yourAttitude.length)],
            whoWillLiveWithYou: answers.whoWillLive[Math.floor(Math.random() * answers.whoWillLive.length)],
            whoWillStayWithPetInCaseSeparation: answers.whoWillStay[Math.floor(Math.random() * answers.whoWillStay.length)],
            reasonForRefusingLiveTogetherWithAnimal: answers.reasons[Math.floor(Math.random() * answers.reasons.length)],
            consentForFeedbackFromShelter: 'Да',
            howDidYouHearAboutOurFoundation: answers.howHear[Math.floor(Math.random() * answers.howHear.length)]
        });
    }

    await AdoptionForm.bulkCreate(adoptionForms, { ignoreDuplicates: true });
    console.log(`Adoption forms seeded! Total: ${adoptionForms.length} forms`);
};

module.exports = seedAdoptionForms;