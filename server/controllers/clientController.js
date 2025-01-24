class ClientController {

    // 1. Пожертвовать денег приюту
    async donateMoneyShelter(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка отправки средств приюту'});
        }
    }

    // 2. Пожертвовать денег животному
    async donateMoneyAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка отправки средств животному'});
        }
    }

    // 3. Составление анкеты об усыновлении животного
    async fillOutApplicationAdoptAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка подачи заявки на волонтерство'});
        }
    }

    // 4. Подать заявку на волонтерство
    async applyVolunteer(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка подачи заявки на волонтерство'});
        }
    }
}

module.exports = new ClientController;