const { Router } = require('express');
const router = new Router;
const DoctorController = require('../controllers/doctorController');

// 1. Список всех животных в приюте, где работает врач
router.get('./list-animals-shelter-where-doctor-works/:id', DoctorController.listAnimalsShelterWhereDoctorWorks);

// 2. Медицинские записи врача
router.get('./medical-records-doctor/:id', DoctorController.medicalRecordsDoctor);

// 3. Изменение статуса животного
router.patch('./change-animal-status/:id', DoctorController.changeAnimalStatus);

module.exports = router;