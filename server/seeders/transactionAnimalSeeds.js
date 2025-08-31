const TransactionsAnimal = require('../models/transactions-animal-model');
const User = require('../models/user-model');
const Animal = require('../models/animals-model');

const seedTransactionAnimal = async () => {
    const count = await TransactionsAnimal.count();
    if (count > 50) {
        console.log('Animal transactions already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'user' } }); // только обычные пользователи
    const animals = await Animal.findAll();

    const animalTransactions = [];

    // Создаем по 2-3 транзакции на каждое животное
    for (const animal of animals) {
        const transactionsCount = Math.floor(Math.random() * 2) + 2; // 2-3 транзакции
        
        for (let i = 0; i < transactionsCount; i++) {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            const amount = Math.floor(Math.random() * 5000) + 100; // от 100 до 5000 руб
            
            // Дата в пределах последних 6 месяцев
            const transactionDate = new Date();
            transactionDate.setMonth(transactionDate.getMonth() - Math.floor(Math.random() * 6));
            transactionDate.setDate(transactionDate.getDate() - Math.floor(Math.random() * 30));
            
            animalTransactions.push({
                user_id: randomUser.id,
                animal_id: animal.id,
                transactionAmount: amount,
                transactionDate: transactionDate
            });
        }
    }

    await TransactionsAnimal.bulkCreate(animalTransactions, { ignoreDuplicates: true });
    console.log(`Animal transactions seeded! Total: ${animalTransactions.length} transactions`);
};

module.exports = seedTransactionAnimal;