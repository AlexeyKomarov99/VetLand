const AnimalModel = require('../models/animals-model');
const AdoptionFormModel = require('../models/adoption-forms-model')
const StagesAnimalAdoptionModel = require('../models/stages-animal-adoption-model');
const UserModel = require('../models/user-model');
const sequelize = require('../db'); 

const path = require('path');
const fs = require('fs').promises;

class PublicService {

    // 1. Рандомный список животных для Титульной страницы
    async getRandomAnimals(limit) {
        try {
            const animals = await AnimalModel.findAll({
                order: sequelize.random(),
                limit: limit,
                attributes: [
                    'id',
                    'animalName', 
                    'age',
                    'gender',
                    'animalPhotosData',
                ]
            })

            if (!animals || animals.length === 0) {
                return [];
            }

            return animals;

        } catch (error) {
            console.error('Ошибка в сервисе getRandomAnimals:', error);
            throw error;
        }
    }

    // 2. Составление анкеты об усыновлении животного
    async fillOutApplicationAdoptAnimal(formData) {
        try {
            const {
                name, surname, phone, email, age, region,
                fullAddress, profileSocialNetwork, typeAndNameAnimalYouLiked,
                doYouHavePet, yourAttitudeTowardsCastrationSterilization,
                whoWillLiveWithYou, whoWillStayWithPetInCaseSeparation,
                petCareDuringBusinessTrips, reasonForRefusingLiveTogetherWithAnimal,
                consentForFeedbackFromShelter, howDidYouHearAboutOurFoundation,
                userId, // опционально - для зарегистрированных пользователей
                animalId // опционально - если выбрано конкретное животное
            } = formData;

            let user_id = userId || null;
            let animal_id = animalId || null;

            // Для зарегистрированных пользователей проверяем существование пользователя
            if (userId) {
                const user = await UserModel.findByPk(userId);
                if (!user) {
                    throw new Error('Пользователь не найден');
                }
            }

            // Если указано животное, проверяем его существование
            if (animalId) {
                const animal = await AnimalModel.findByPk(animalId);
                if (!animal) {
                    throw new Error('Животное не найдено');
                }
            }

            // Создаем анкету усыновления
            const adoptionForm = await AdoptionFormModel.create({
                user_id,
                animal_id,
                name,
                surname,
                phone,
                email,
                age,
                region,
                fullAddress,
                profileSocialNetwork,
                typeAndNameAnimalYouLiked,
                doYouHavePet,
                yourAttitudeTowardsCastrationSterilization,
                whoWillLiveWithYou,
                whoWillStayWithPetInCaseSeparation,
                petCareDuringBusinessTrips,
                reasonForRefusingLiveTogetherWithAnimal,
                consentForFeedbackFromShelter,
                howDidYouHearAboutOurFoundation
            });

            // Для зарегистрированных пользователей обновляем этап усыновления
            if (userId) {
                let stage = await StagesAnimalAdoptionModel.findOne({
                    where: { user_id: userId }
                });

                if (stage) {
                    // Обновляем существующий этап
                    await stage.update({
                        adoptionForms_id: adoptionForm.id,
                        fillingOutQuestionnaire: true
                    });
                } else {
                    // Создаем новый этап
                    stage = await StagesAnimalAdoptionModel.create({
                        user_id: userId,
                        adoptionForms_id: adoptionForm.id,
                        fillingOutQuestionnaire: true
                    });
                }
            }

            return adoptionForm;

        } catch (error) {
            console.error('Ошибка в сервисе fillOutApplicationAdoptAnimal:', error);
            throw error;
        }
    }

    // 3. Подать заявку на волонтерство
    async applyVolunteer() {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = new PublicService;