const MedicalRecord = require('../models/medical-records-model');
const User = require('../models/user-model');
const Animal = require('../models/animals-model');

const seedMedicalRecords = async () => {
    const count = await MedicalRecord.count();
    if (count > 50) {
        console.log('Medical records already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'doctor' } });
    const animals = await Animal.findAll();

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

    const diagnoses = [
        'Здоров',
        'Гастрит',
        'Аллергия',
        'Травма',
        'Инфекция',
        'Паразиты',
        'Послеоперационный период'
    ];

    const treatments = [
        'Диета и покой',
        'Курс антибиотиков 7 дней',
        'Обработка раны',
        'Вакцинация',
        'Стерилизация',
        'Антигистаминные препараты'
    ];

    const medicalRecords = [];

    // Для каждого животного создаем 1-3 медицинские записи
    for (const animal of animals) {
        const recordsCount = Math.floor(Math.random() * 3) + 1; // 1-3 записи
        
        for (let i = 0; i < recordsCount; i++) {
            const randomDoctor = users[Math.floor(Math.random() * users.length)];
            const randomReport = medicalReports[Math.floor(Math.random() * medicalReports.length)];
            const randomDiagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];
            const randomTreatment = treatments[Math.floor(Math.random() * treatments.length)];
            
            const recordDate = new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000));
            const nextVisit = new Date(recordDate);
            nextVisit.setDate(nextVisit.getDate() + Math.floor(Math.random() * 30) + 7);

            medicalRecords.push({
                user_id: randomDoctor.id,
                animal_id: animal.id,
                medicalReport: randomReport,
                diagnosis: randomDiagnosis !== 'Здоров' ? randomDiagnosis : null,
                treatment: randomTreatment,
                prescription: `Назначение: ${randomTreatment}. Дозировка согласно инструкции.`,
                nextVisitDate: Math.random() > 0.5 ? nextVisit : null,
                createdAt: recordDate
            });
        }
    }

    await MedicalRecord.bulkCreate(medicalRecords, { ignoreDuplicates: true });
    console.log(`Medical records seeded! Total: ${medicalRecords.length} records`);
};

module.exports = seedMedicalRecords;