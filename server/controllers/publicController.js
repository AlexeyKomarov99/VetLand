
const PublicService = require('../service/publicService');

class PublicController {
    async getRandomAnimals(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const animals = await PublicService.getRandomAnimals(limit);
            console.log(animals);
            return res.status(200).json({ data: animals });
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения рандомных животных'});
        }
    }
}

module.exports = new PublicController;