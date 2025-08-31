const StaffAssignment = require('../models/staff-assignment-model');
const User = require('../models/user-model');
const Shelter = require('../models/shelters-model');

const seedStaffAssignments = async () => {
    const count = await StaffAssignment.count();
    if (count > 0) {
        console.log('Staff assignments already exist, skipping seeding');
        return;
    }

    const doctors = await User.findAll({ where: { role: 'doctor' } });
    const managers = await User.findAll({ where: { role: 'manager' } });
    const volunteers = await User.findAll({ where: { role: 'volunteer' } });
    const admins = await User.findAll({ where: { role: 'admin' } });
    const shelters = await Shelter.findAll();

    const assignments = [];

    // АДМИНЫ - доступ ко всем приютам
    admins.forEach(admin => {
        shelters.forEach(shelter => {
            assignments.push({
                user_id: admin.id,
                shelter_id: shelter.id,
                role: 'admin'
            });
        });
    });

    // Доктора по 2 на каждый приют
    shelters.forEach(shelter => {
        doctors.slice(0, 2).forEach(doctor => {
            assignments.push({
                user_id: doctor.id,
                shelter_id: shelter.id,
                role: 'doctor'
            });
        });
    });

    // Менеджеры по 1 на каждый приют
    shelters.forEach((shelter, index) => {
        if (managers[index]) {
            assignments.push({
                user_id: managers[index].id,
                shelter_id: shelter.id,
                role: 'manager'
            });
        }
    });

    // Волонтеры (по 3-5 на приют)
    shelters.forEach(shelter => {
        const shelterVolunteers = volunteers.slice(0, Math.floor(Math.random() * 3) + 3);
        shelterVolunteers.forEach(volunteer => {
            assignments.push({
                user_id: volunteer.id,
                shelter_id: shelter.id,
                role: 'volunteer'
            });
        });
    });

    await StaffAssignment.bulkCreate(assignments, { ignoreDuplicates: true });
    console.log(`Staff assignments seeded! Total: ${assignments.length} assignments`);
};

module.exports = seedStaffAssignments;