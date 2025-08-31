const TransactionsShelter = require('../models/transactions-shelter-model');
const User = require('../models/user-model');
const Shelter = require('../models/shelters-model');

const seedTransactionShelter = async () => {
    const count = await TransactionsShelter.count();
    if (count > 50) {
        console.log('Shelter transactions already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'user' } }); // только обычные пользователи
    const shelters = await Shelter.findAll();

    const shelterTransactions = [];

    // Создаем по 5-10 транзакций на каждый приют
    for (const shelter of shelters) {
        const transactionsCount = Math.floor(Math.random() * 6) + 5; // 5-10 транзакций
        
        for (let i = 0; i < transactionsCount; i++) {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            const amount = Math.floor(Math.random() * 10000) + 500; // от 500 до 10000 руб
            
            // Дата в пределах последнего года
            const transactionDate = new Date();
            transactionDate.setMonth(transactionDate.getMonth() - Math.floor(Math.random() * 12));
            transactionDate.setDate(transactionDate.getDate() - Math.floor(Math.random() * 30));
            
            shelterTransactions.push({
                user_id: randomUser.id,
                shelter_id: shelter.id,
                transactionAmount: amount,
                transactionDate: transactionDate
            });
        }
    }

    await TransactionsShelter.bulkCreate(shelterTransactions, { ignoreDuplicates: true });
    console.log(`Shelter transactions seeded! Total: ${shelterTransactions.length} transactions`);
};

module.exports = seedTransactionShelter;