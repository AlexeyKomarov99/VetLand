const MedicalRecord = require('../models/medical-records-model');
const User = require('../models/user-model');
const Animal = require('../models/animals-model');
const AnimalStatus = require('../models/animal-status-model');

const seedMedicalRecords = async () => {
    const count = await MedicalRecord.count();
    if (count > 50) {
        console.log('Medical records already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'doctor' } });
    const animals = await Animal.findAll();
    const animalStatuses = await AnimalStatus.findAll();

    const medicalReports = [
        'Плановый осмотр - здоров',
        'Диагноз: гастрит. Назначена диета и лекарства',
        'Вакцинация проведена',
        'Обработка от паразитов',
        'Плановый осмотр зубов',
        'Кастрация/стерилизация проведена',
        'Курс антибиотиков назначен',
        'Аллергическая реакция, назначены антигистаминные',
        'Травма лапы, наложена повязка',
        'Плановый осмотр после лечения'
    ];

    const medicalRecords = [];

    // Для каждого животного создаем 1-2 медицинские записи
    for (const animal of animals) {
        const recordsCount = Math.floor(Math.random() * 2) + 1; // 1 или 2 записи
        
        for (let i = 0; i < recordsCount; i++) {
            const randomDoctor = users[Math.floor(Math.random() * users.length)];
            const randomStatus = animalStatuses[Math.floor(Math.random() * animalStatuses.length)];
            const randomReport = medicalReports[Math.floor(Math.random() * medicalReports.length)];
            
            medicalRecords.push({
                user_id: randomDoctor.id,
                animal_id: animal.id,
                animalStatus_id: randomStatus.id,
                medicalReport: randomReport,
                createdAt: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)) // случайная дата за последний год
            });
        }
    }

    await MedicalRecord.bulkCreate(medicalRecords, { ignoreDuplicates: true });
    console.log(`Medical records seeded! Total: ${medicalRecords.length} records`);
};

module.exports = seedMedicalRecords;