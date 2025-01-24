const { Router } = require('express');
const router = new Router;
const UserAuthController = require('../controllers/userAuthController');

// 1. Регистрация
router.post('/registration', UserAuthController.registration);

// 2. Вход
router.post('/login', UserAuthController.login);

// 3. Выход
router.post('/logout', UserAuthController.logout);

// 4. Восстановление пароля
router.patch('/password-update', UserAuthController.passwordUpdate);

// 5. Обновить пароль
router.post('/password-recovery', UserAuthController.passwordRecovery);

// 6. Подтверждение электронной почты
router.get('./email-confirmation', UserAuthController.emailConfirmation);

module.exports = router;