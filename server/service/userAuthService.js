const UserModel = require('../models/user-model');
const UserDto = require('../dtos/userDtos');

const TokenService = require('./tokenService');

const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

class UserAuthService {
    // 1. Регистрация
    async registration(name, surname, email, phone, password) {
        
        // Проверка пользователя с уже существующей почтой
        const candidate = await UserModel.findOne({where: {email}});
        if(candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
        }

        // Проерка пользователя с уже существующим телефоном
        const candidatePhone = await UserModel.findOne({where: {phone}});
        if(candidatePhone) {
            throw new Error(`Пользователь с телефоном ${phone} уже существует`);
        }

        // Получение хеш-пароля
        const hashPassword = await bcrypt.hash(password, 3);

        // Создание новой записи в таблице Users
        const user = await UserModel.create({
            name,
            surname,
            email,
            phone,
            password: hashPassword,
        });

        // Получение новго объекта пользователя, включая его id после добавления новой записи в таблицу Users
        const userDto = new UserDto(user);

        // Генерация access и refresh токенов
        const tokens = TokenService.generateTokens({ ...userDto });

        // Сохранение сгенерированных токенов в базу данных Tokens
        await TokenService.saveTokens(userDto.id, tokens.refreshToken);

        // Создание папок для пользователя
        await this.createUserFolder(userDto.id);

        // Результат регистрации нового пользователя
        return {
            message: "Пользователь зарегистрирован",
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            userDto,
        };
    }

    // Метод для создания папок пользователя
    async createUserFolder(userId) {
        const baseDir = 'uploads';
        const userDir = path.join(baseDir, userId.toString());

        try {
            // Создание основной папки
            await fs.promises.mkdir(userDir, {recursive: true});

        } catch (error) {
            throw new Error(`Ошибка при создании папок пользователя: ${error.message}`);
        }

    }

    // 2. Вход
    async login(req, res) {

    }

    // 3. Выход
    async logout(req, res) {

    }

    // 4. Восстановление пароля
    async passwordRecovery(req, res) {

    }

    // 5. Обновить пароль
    async passwordUpdate(req, res) {

    }

    // 6. Подтверждение электронной почты
    async emailConfirmation(req, res) {

    }
}

module.exports = new UserAuthService;