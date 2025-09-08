const TransactionService = require('../service/transactionService');

class TransactionController {
    // 1. Пожертвовать денег в фонд
    async donateMoneyShelter(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка отправки средств приюту'});
        }
    }

    // 2. Пожертвовать денег животному по id
    async donateMoneyAnimal(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка отправки средств животному'});
        }
    }
}

module.exports = new TransactionController;