class DoctorController {

    // 1. Список всех животных в приюте, где работает врач
    async listAnimalsShelterWhereDoctorWorks(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения списка всех животных, где работает доктор'});
        }
    }

    // 2. Медицинские записи врача
    async medicalRecordsDoctor(req, res) {
        try {
            
        } catch (error) {
            return req.status(500).json({message: 'Ошибка получения медицинских записок доктора'});
        }
    }

}

module.exports = new DoctorController;