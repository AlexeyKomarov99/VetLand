const AnimalModel = require('../models/animals-model');
const sequelize = require('../db'); 

class PublicService {
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
}

module.exports = new PublicService;