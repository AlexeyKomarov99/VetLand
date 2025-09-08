const StaffAssignmentModel = require('../models/staff-assignment-model');
const UserModel = require('../models/user-model');
const AnimalModel = require('../models/animals-model');
const MedicalRecordsModel = require('../models/medical-records-model');
const AnimalStatusModel = require('../models/animal-status-model');

class DoctorService {

    // 1. Медицинские записи врача
    async medicalRecordsDoctor(doctorId) {
        try {
            // Проверка существования врача
            const doctor = await UserModel.findByPk(doctorId);
            if(!doctor) {
                throw new Error('Доктор не найден');
            }

            // Вывод всех записей
            const medicalRecords = await MedicalRecordsModel.findAll({
                where: {user_id: doctorId}
            })

            return medicalRecords;


        } catch (error) {
            console.error('Ошибка в сервисе medicalRecordsDoctor:', error);
            throw error;
        }
    }

    // 2. Сделать медицинскую запись о состоянии животного (от имени текущего врача)
    async createMedicalRecord(medicalData) {
        try {
            // 1. Проверяем существование животного
            const animal = await AnimalModel.findByPk(medicalData.animal_id);
            if (!animal) {
                throw new Error('Животное не найдено');
            }

            // 2. Проверяем существование статуса животного
            const animalStatus = await AnimalStatusModel.findByPk(medicalData.animalStatus_id);
            if (!animalStatus) {
                throw new Error('Статус животного не найден');
            }

            // 3. Создаем медицинскую запись
            const medicalRecord = await MedicalRecordsModel.create({
                user_id: medicalData.user_id,
                animal_id: medicalData.animal_id,
                animalStatus_id: medicalData.animalStatus_id,
                medicalReport: medicalData.medicalReport
            });

            // 4. Обновляем статус животного (опционально, но очень хорошая идея!)
            await animal.update({ animalStatus_id: medicalData.animalStatus_id });

            return medicalRecord;

        } catch (error) {
            console.error('Ошибка в сервисе createMedicalRecord:', error);
            throw error;
        }
    }


    
}

module.exports = new DoctorService;