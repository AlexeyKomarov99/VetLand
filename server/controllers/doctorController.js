const DoctorService = require('../service/doctorService');

class DoctorController {

    // 1. Медицинские записи, сделанные ТЕКУЩИМ врачом
    async myMedicalRecords(req, res) {
        try {
            const doctorId = req.user.id;
            const medicalRecords = await DoctorService.medicalRecordsDoctor(doctorId);
            return res.status(200).json({
                message: medicalRecords.length === 0
                    ? 'У вас нет медицинских записей'
                    : 'Записи врача',
                count: medicalRecords.length,
                medicalRecords
            })
        } catch (error) {
            return res.status(500).json({message: 'Ошибка получения медицинских записок доктора'});
        }
    }

    // 2. Сделать медицинскую запись о состоянии животного (от имени текущего врача)
    async createMedicalRecord(req, res) {
        try {
            const user_id = req.user.id; 
            const { animal_id, animalStatus_id, medicalReport } = req.body;
            
            // Валидация обязательных полей
            if (!animal_id || !animalStatus_id || !medicalReport) {
                return res.status(400).json({
                    message: 'Отсутствуют обязательные поля: user_id, animal_id, animalStatus_id, medicalReport'
                });
            }

            const medicalRecord = await DoctorService.createMedicalRecord({
                user_id,
                animal_id, 
                animalStatus_id,
                medicalReport
            });

            return res.status(201).json({
                message: 'Медицинская запись успешно создана',
                medicalRecord
            });

        } catch (error) {
            console.error(error);
            
            if (error.message.includes('не найден') || error.message.includes('не является')) {
                return res.status(404).json({message: error.message});
            }
            
            return res.status(500).json({message: 'Ошибка создания медицинской записи'});
        }
    }
}

module.exports = new DoctorController;