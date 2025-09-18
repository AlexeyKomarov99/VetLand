const AnimalModel = require('../models/animals-model');
const AdoptedAnimalModel = require('../models/adopted-animals-model');
const AdoptionFormModel = require('../models/adoption-forms-model')
const StagesAnimalAdoptionModel = require('../models/stages-animal-adoption-model');
const UserModel = require('../models/user-model');
const AnimalStatusModel = require('../models/animal-status-model');
const AnimalTypesModel = require('../models/list-animal-types-model');
const ShelterModel = require('../models/shelters-model')
const sequelize = require('../db');

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

    // 2. Список всех животных
    async getListAllAnimals() {
        try {
            const animals = await AnimalModel.findAll({
                include: [
                    {
                        model: AnimalTypesModel,
                        as: 'AnimalType',
                        attributes: ['id', 'type']
                    },
                    {
                        model: AnimalStatusModel,
                        as: 'AnimalStatus',
                        attributes: ['id', 'status']
                    },
                    {
                        model: ShelterModel,
                        as: 'Shelter',
                        attributes: ['id', 'shelterName', 'city', 'region']
                    }
                ],
                order: [['createdAt', 'DESC']]
            });

            const animalsFormatted = animals.map((animal) => {
                const animalData = animal.toJSON ? animal.toJSON() : animal.dataValues;
                
                return {
                    // Данные о животном
                    id: animalData.id,
                    animalName: animalData.animalName,
                    age: animalData.age,
                    amountTreatment: animalData.amountTreatment,
                    gender: animalData.gender,
                    animalPhotosData: animalData.animalPhotosData,
                    
                    // Читаемые значения вместо UUID
                    animalType: animalData.AnimalType ? animalData.AnimalType.type : 'Не указан',
                    animalStatus: animalData.AnimalStatus ? animalData.AnimalStatus.status : 'Не указан',
                    shelter: animalData.Shelter ? animalData.Shelter.shelterName : 'Не указан',
                    
                    // Дополнительная информация о приюте
                    shelterInfo: animalData.Shelter ? {
                        city: animalData.Shelter.city,
                        region: animalData.Shelter.region
                    } : null,
                    
                    // Оригинальные UUID (если нужны на клиенте)
                    animalTypeId: animalData.animalType_id,
                    animalStatusId: animalData.animalStatus_id,
                    shelterId: animalData.shelter_id,
                    
                    // Даты
                    createdAt: animalData.createdAt,
                    updatedAt: animalData.updatedAt
                };
            });

            return animalsFormatted;

        } catch (error) {
            console.error('Ошибка в сервисе getListAllAnimals: ', error);
            throw error;
        }
    }

    // 3. Список всех усыновленных животных
    async getListAllAdoptedAnimals() {
        try {
            const adoptedAnimals = await AdoptedAnimalModel.findAll({
                include: [
                    {
                        model: AnimalModel,
                        as: 'Pet', // Используем правильный алиас из ассоциации
                        include: [
                            {
                                model: AnimalTypesModel,
                                as: 'AnimalType',
                                attributes: ['id', 'type']
                            },
                            {
                                model: AnimalStatusModel,
                                as: 'AnimalStatus',
                                attributes: ['id', 'status']
                            },
                            {
                                model: ShelterModel,
                                as: 'Shelter',
                                attributes: ['id', 'shelterName', 'city', 'region']
                            }
                        ]
                    },
                    {
                        model: UserModel,
                        as: 'Owner', // Используем правильный алиас из ассоциации
                        attributes: ['id', 'name', 'surname', 'email', 'phone']
                    }
                ],
                order: [['createdAt', 'DESC']]
            });

            const adoptedAnimalsFormatted = adoptedAnimals.map((adoptedAnimal) => {
                const adoptedData = adoptedAnimal.toJSON ? adoptedAnimal.toJSON() : adoptedAnimal.dataValues;
                const animalData = adoptedData.Pet; // Используем 'Pet' вместо 'Animal'
                
                return {
                    // Данные об усыновлении
                    adoptionId: adoptedData.id,
                    adoptionDate: adoptedData.createdAt,
                    adoptedAnimalPhotosData: adoptedData.adoptedAnimalPhotosData,
                    
                    // Данные о животном
                    // animalId: animalData.id,
                    id: animalData.id,
                    animalName: animalData.animalName,
                    age: animalData.age,
                    amountTreatment: animalData.amountTreatment,
                    gender: animalData.gender,
                    animalPhotosData: animalData.animalPhotosData,
                    
                    // Читаемые значения вместо UUID
                    animalType: animalData.AnimalType ? animalData.AnimalType.type : 'Не указан',
                    animalStatus: animalData.AnimalStatus ? animalData.AnimalStatus.status : 'Не указан',
                    shelter: animalData.Shelter ? animalData.Shelter.shelterName : 'Не указан',
                    
                    // Дополнительная информация о приюте
                    shelterInfo: animalData.Shelter ? {
                        city: animalData.Shelter.city,
                        region: animalData.Shelter.region
                    } : null,
                    
                    // Оригинальные UUID (если нужны на клиенте)
                    animalTypeId: animalData.animalType_id,
                    animalStatusId: animalData.animalStatus_id,
                    shelterId: animalData.shelter_id,
                    
                    // Данные о пользователе, который усыновил
                    adoptedBy: adoptedData.Owner ? { // Используем 'Owner' вместо 'User'
                        userId: adoptedData.Owner.id,
                        firstName: adoptedData.Owner.name,
                        lastName: adoptedData.Owner.surname,
                        email: adoptedData.Owner.email,
                        phone: adoptedData.Owner.phone
                    } : null,
                    
                    // Даты
                    createdAt: adoptedData.createdAt,
                    updatedAt: adoptedData.updatedAt
                };
            });

            return adoptedAnimalsFormatted;

        } catch (error) {
            console.error('Ошибка в сервисе getListAllAdoptedAnimals: ', error);
            throw error;
        }
    }

    // 4. Составление анкеты об усыновлении животного
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

    // 5. Подать заявку на волонтерство
    async applyVolunteer() {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = new PublicService;