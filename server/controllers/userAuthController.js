const UserAuthService = require('../service/userAuthService');


class UserAuthController {
    
    // 1. Регистрация
    async registration(req, res) {
        try {
            const {name, surname, email, phone, password} = req.body;

            if (!name || !surname || !email || !phone || !password) {
                return res.status(400).json({
                    message: 'Все поля обязательны для заполнения'
                });
            }

            const newUser = await UserAuthService.registration(name, surname, email, phone, password);

            res.cookie('refreshToken', newUser.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true});

            return res.status(201).json(newUser);

        } catch (error) {
            console.error("Ошибка регистрации", error);
            return res.status(500).json({message: 'Ошибка регистрации'});
        }
    }

    // 2. Вход
    async login(req, res) {
        try {
            const {email, password} = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: 'Email и пароль обязательны'
                });
            }

            const userData = await UserAuthService.login(email, password);
            
            // Создание и установка куки в ответе
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true});

            // Отправка данных клиенту
            return res.json(userData);

        } catch (error) {
            console.log("Ошибка при входе:", error)
            return res.status(500).json({message: "Ошибка входа"});
        }
    }

    // 3. Выход
    async logout(req, res) {
        try {
            // Получение refreshToken из куки
            const {refreshToken} = req.cookies;
            const token = await UserAuthService.logout(refreshToken);

            // Ответ на удаление cookie в браузере пользователя
            res.clearCookie('refreshToken'); // удаление куки на клиенте
            return res.status(200).json(token);

        } catch (error) {
            console.log("Ошибка выхода из приложения:", error);
            return res.status(500).json({message: "Ошибка выхода"});
        }
    }

    // 4. Запрос на восстановление пароля
    async passwordRecoveryRequest(req, res) {
        try {
            const { email } = req.body;
            
            if (!email) {
                return res.status(400).json({ message: 'Email обязателен' });
            }

            const result = await UserAuthService.passwordRecoveryRequest(email);
            return res.status(200).json(result);

        } catch (error) {
            console.error('Ошибка восстановления пароля:', error);
            
            if (error.message.includes('не найден')) {
                return res.status(404).json({ message: error.message });
            }
            
            return res.status(500).json({ message: 'Ошибка восстановления пароля' });
        }
    }

    // 5. Обновить пароль
    async passwordUpdate(req, res) {
        try {
            const userId = req.user.id; // Берем из токена!
            const { currentPassword, newPassword } = req.body;

            const result = await UserAuthService.passwordUpdate(
                userId, 
                currentPassword, 
                newPassword
            );

            return res.status(200).json(result);

        } catch (error) {
            console.log("Ошибка обновления пароля:", error);
            if (error.message.includes('Неверный текущий пароль')) {
                return res.status(400).json({message: error.message});
            }
            return res.status(500).json({message: 'Ошибка обновления пароля'});
        }
    }

    // 6. Подтверждение электронной почты
    async emailConfirmation(req, res) {
        try {
            
        } catch (error) {
            return res.status(500).json({message: 'Ошибка подтверждения почты'});
        }
    }
}

module.exports = new UserAuthController;