const { Router } = require('express');
const router = new Router;
const authMiddleware = require('../middleware/auth');
const UserAuthController = require('../controllers/userAuthController');

// 1. Регистрация
router.post('/registration', UserAuthController.registration);

// 2. Вход
router.post('/login', UserAuthController.login);

// 3. Выход
router.post('/logout', 
    authMiddleware, 
    UserAuthController.logout
);

// 4. Запрос на восстановление пароля
router.post('/password-recovery-request', UserAuthController.passwordRecoveryRequest);

// 5. Обновить пароль
router.patch('/password-update', 
    authMiddleware, 
    UserAuthController.passwordUpdate
);

// 6. Подтверждение электронной почты
router.get('/email-confirmation/:token', UserAuthController.emailConfirmation);

module.exports = router;