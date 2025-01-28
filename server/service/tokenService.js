const TokenModel = require('../models/token-model');
const jwt = require('jsonwebtoken');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }
    
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (error) {
            console.error("Недействительный токен:", error);
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (error) {
            console.error("Недействительный токен:", error);
            return null;
        }
    }

    async saveTokens(user_id, refreshToken) {
        const tokenData = await TokenModel.findOne({where: {user_id}})
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save() // Сохраняет изменения в базе данных. Этот метод также возвращает обновленный объект токена.
        }

        // Если токен не найден в БД по user_id, то создаем новый
        const token = await TokenModel.create({
            user_id,
            refreshToken
        })
        return token;
    }

    async deleteToken(refreshToken) {
        const tokenData = await TokenModel.destroy({where: {refreshToken}});
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await TokenModel.findOne({where: {refreshToken}});
        return tokenData;
    }
}

module.exports = new TokenService();