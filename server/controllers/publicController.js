const PublicService = require('../service/publicService');

class PublicController {

    // 1. Рандомный список животных для Титульной страницы
    async getRandomAnimals(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const animals = await PublicService.getRandomAnimals(limit);
            return res.status(200).json({ data: animals });
        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка получения рандомных животных',
                error: error.message
            });
        }
    }
    
    // 2. Список всех животных
    async getListAllAnimals(req, res) {
        try {
            const animals = await PublicService.getListAllAnimals();
            return res.status(200).json(animals);
        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка получения списка всех животных',
                error: error.message
            });
        }
    }

    // 3. Составление анкеты об усыновлении животного
    async fillOutApplicationAdoptAnimal(req, res) {
        try {
            const formData = req.body;

            // Валидация обязательных полей
            const requiredFields = [
                'name', 'surname', 'phone', 'email', 'age', 'region',
                'fullAddress', 'profileSocialNetwork', 'typeAndNameAnimalYouLiked',
                'doYouHavePet', 'yourAttitudeTowardsCastrationSterilization',
                'whoWillLiveWithYou', 'whoWillStayWithPetInCaseSeparation',
                'petCareDuringBusinessTrips', 'consentForFeedbackFromShelter'
            ];

            const missingFields = requiredFields.filter(field => !formData[field]);
            
            if (missingFields.length > 0) {
                return res.status(400).json({
                    message: 'Отсутствуют обязательные поля',
                    missingFields: missingFields
                });
            }

            // Добавляем userId из авторизации (если есть)
            if (req.user && req.user.id) {
                formData.userId = req.user.id;
            }

            const adoptionForm = await PublicService.fillOutApplicationAdoptAnimal(formData);
            
            return res.status(201).json({
                message: 'Анкета успешно отправлена',
                data: {
                    formId: adoptionForm.id,
                    status: 'Новая заявка'
                }
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка отправки анкеты об усыновлении животного',
                error: error.message
            });
        }
    }

    // 4. Подать заявку на волонтерство
    async applyVolunteer(req, res) {
        try {
            
        } catch (error) {
            return res.status(500).json({message: 'Ошибка при отправке заявки на волонтерство'});
        }
    }

}

module.exports = new PublicController;