class ClientController {

    // 1. Составление анкеты об усыновлении животного
    async fillOutApplicationAdoptAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка подачи заявки на волонтерство'});
        }
    }

    // 2. Подать заявку на волонтерство
    async applyVolunteer(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка подачи заявки на волонтерство'});
        }
    }
}

module.exports = new ClientController;