const User = require('../models/user-model');
const bcrypt = require('bcrypt');

const seedUsers = async () => {
    const hashedPassword = await bcrypt.hash('Password123!', 10);
    
    // Массивы для генерации данных
    const maleNames = ['Alex', 'David', 'Michael', 'Andrew', 'Sergei', 'John', 'Artem', 'Alexander', 'Max', 'Egor'];
    const femaleNames = ['Kate', 'Olivia', 'Natalie', 'Anna', 'Maria', 'Helen', 'Victoria', 'Julia', 'Irina', 'Svetlana'];
    const surnames = ['Ivanov', 'Petrov', 'Sidorov', 'Smirnov', 'Kuznetsov', 'Vasiliev', 'Fedorov', 'Nikolaev', 'Alexeev', 'Dmitriev'];
    const regions = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Краснодар', 'Самара', 'Ростов-на-Дону', 'Воронеж'];
    
    const usersData = [];

    // Генерация 75 пользователей (user)
    for (let i = 0; i < 75; i++) {
        const isMale = Math.random() > 0.5;
        const name = isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)] + (isMale ? '' : 'а');
        
        usersData.push({
            name,
            surname,
            role: 'user',
            age: new Date(1970 + Math.floor(Math.random() * 30), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
            gender: isMale ? 'мужской' : 'женский',
            region: regions[Math.floor(Math.random() * regions.length)],
            email: `${name.toLowerCase()}.${surname.toLowerCase()}${i}@mail.ru`,
            emailConfirmation: Math.random() > 0.2,
            password: hashedPassword,
            phone: `+7916${Math.floor(1000000 + Math.random() * 9000000)}`,
            totalAmountDonations: Math.floor(Math.random() * 5000),
            displayRatingDonations: Math.random() > 0.3,
        });
    }

    // Генерация 7 администраторов (admin)
    for (let i = 0; i < 7; i++) {
        const isMale = Math.random() > 0.5;
        const name = isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)] + (isMale ? '' : 'а');
        
        usersData.push({
            name,
            surname,
            role: 'admin',
            age: new Date(1970 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
            gender: isMale ? 'мужской' : 'женский',
            region: 'Москва',
            email: `${name.toLowerCase()}.${surname.toLowerCase()}${i}@vetclinic.ru`,
            emailConfirmation: true,
            password: hashedPassword,
            phone: `+7916${Math.floor(1000000 + Math.random() * 9000000)}`,
            totalAmountDonations: Math.random() > 0.7 ? Math.floor(Math.random() * 2000) : 0,
            displayRatingDonations: Math.random() > 0.5,
        });
    }

    // Генерация 10 менеджеров (manager)
    for (let i = 0; i < 10; i++) {
        const isMale = Math.random() > 0.5;
        const name = isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)] + (isMale ? '' : 'а');
        
        usersData.push({
            name,
            surname,
            role: 'manager',
            age: new Date(1980 + Math.floor(Math.random() * 15), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
            gender: isMale ? 'мужской' : 'женский',
            region: 'Москва',
            email: `${name.toLowerCase()}.${surname.toLowerCase()}${i}@vetclinic.ru`,
            emailConfirmation: true,
            password: hashedPassword,
            phone: `+7916${Math.floor(1000000 + Math.random() * 9000000)}`,
            totalAmountDonations: Math.random() > 0.6 ? Math.floor(Math.random() * 1000) : 0,
            displayRatingDonations: Math.random() > 0.4,
        });
    }

    // Генерация 10 докторов (doctor)
    for (let i = 0; i < 10; i++) {
        const isMale = Math.random() > 0.5;
        const name = isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)] + (isMale ? '' : 'а');
        
        usersData.push({
            name,
            surname,
            role: 'doctor',
            age: new Date(1975 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
            gender: isMale ? 'мужской' : 'женский',
            region: regions[Math.floor(Math.random() * 3)], // Первые 3 региона
            email: `${name.toLowerCase()}.${surname.toLowerCase()}${i}@vetclinic.ru`,
            emailConfirmation: true,
            password: hashedPassword,
            phone: `+7916${Math.floor(1000000 + Math.random() * 9000000)}`,
            totalAmountDonations: Math.random() > 0.5 ? Math.floor(Math.random() * 2500) : 0,
            displayRatingDonations: Math.random() > 0.3,
        });
    }

    // Генерация 20 волонтеров (volunteer)
    for (let i = 0; i < 20; i++) {
        const isMale = Math.random() > 0.5;
        const name = isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)] + (isMale ? '' : 'а');
        
        usersData.push({
            name,
            surname,
            role: 'volunteer',
            age: new Date(1990 + Math.floor(Math.random() * 10), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
            gender: isMale ? 'мужской' : 'женский',
            region: regions[Math.floor(Math.random() * regions.length)],
            email: `${name.toLowerCase()}.${surname.toLowerCase()}${i}@vetclinic.ru`,
            emailConfirmation: true,
            password: hashedPassword,
            phone: `+7916${Math.floor(1000000 + Math.random() * 9000000)}`,
            totalAmountDonations: Math.floor(Math.random() * 800),
            displayRatingDonations: Math.random() > 0.2,
        });
    }

    await User.bulkCreate(usersData, { ignoreDuplicates: true });
    console.log(`Users seeded successfully! Total: ${usersData.length} users`);
};

module.exports = seedUsers;