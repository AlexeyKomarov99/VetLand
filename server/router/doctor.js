const { Router } = require('express');
const router = new Router;
const authMiddleware = require('../middleware/auth');
const roleMiddleware = require('../middleware/roleAuth');
const DoctorController = require('../controllers/doctorController');

// 1. Медицинские записи, сделанные ТЕКУЩИМ врачом
router.get('/my-medical-records',
    authMiddleware,
    roleMiddleware(['doctor']),
    DoctorController.myMedicalRecords
);

// 2. Сделать медицинскую запись о состоянии животного (от имени текущего врача)
router.post('/create-medical-record',
    authMiddleware,
    roleMiddleware(['doctor']),
    DoctorController.createMedicalRecord
);

module.exports = router;