const UserAuthService = require('../service/userAuthService');


class UserAuthController {
    
    // 1. Регистрация
    async registration(req, res) {
        try {

            // Инициализация полей данных пользователя с тела запроса req.body 
            const {name, surname, email, phone, password} = req.body;
            
            // Процедура регистрации/добавления пользователя в базу данных
            const newUser = await UserAuthService.registration(name, surname, email, phone, password);

            // Создание и установка куки в ответе
            res.cookie('refreshToken', newUser.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true});

            // Отправка данных клиенту
            return res.status(200).json(newUser);

        } catch (error) {
            console.error("Ошибка регистрации", error);
            return res.status(500).json({message: 'Ошибка регистрации'});
        }
    }

    // 2. Вход
    async login(req, res) {
        try {

            // Инициализация полей данных пользователя с тела запроса req.body 
            const {email, password} = req.body;

            // Процедура входа пользователя в информационную систему
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

    // 4. Восстановление пароля
    async passwordRecovery(req, res) {
        try {
            

        } catch (error) {
            return res.status(500).json({message: 'Ошибка восстановления пароля'});
        }
    }

    // 5. Обновить пароль
    async passwordUpdate(req, res) {
        try {
            
            // Инициализация полей данных пользователя с тела запроса req.body
            const {email, currentPassword, newPassword} = req.body;

            //  Обновление пароля
            const updatePassword = await UserAuthService.passwordUpdate(email, currentPassword, newPassword);

            return res.status(200).json(updatePassword);

        } catch (error) {
            console.log("Ошибка выхода из приложения:", error);
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