const VolunteerApplication = require('../models/volunteer-applications');
const User = require('../models/user-model');

const seedVolunteerApplications = async () => {
    const count = await VolunteerApplication.count();
    if (count > 15) {
        console.log('Volunteer applications already exist, skipping seeding');
        return;
    }

    const users = await User.findAll({ where: { role: 'user' } });

    const volunteerTypes = [
        'Хочу помогать с выгулом животных',
        'Готов помогать с уборкой вольеров',
        'Могу помогать с транспортировкой животных',
        'Хочу помогать на мероприятиях приюта',
        'Готов заниматься фандрайзингом',
        'Могу оказывать юридическую помощь',
        'Хочу помогать с соцсетями и рекламой',
        'Готов проводить фотосессии животных'
    ];

    const applications = [];

    // 15 заявок на волонтерство
    for (let i = 0; i < 15; i++) {
        const user = users[i];
        if (!user) continue;

        applications.push({
            user_id: user.id,
            descriptionApplication: volunteerTypes[Math.floor(Math.random() * volunteerTypes.length)] + '. ' +
                                  'Опыт работы с животными: ' + (Math.random() > 0.5 ? 'есть' : 'нет') + '. ' +
                                  'Готов уделять времени: ' + (Math.floor(Math.random() * 20) + 5) + ' часов в неделю.',
            sendingRequest: Math.random() > 0.3 // 70% отправленных заявок
        });
    }

    await VolunteerApplication.bulkCreate(applications, { ignoreDuplicates: true });
    console.log(`Volunteer applications seeded! Total: ${applications.length} applications`);
};

module.exports = seedVolunteerApplications;