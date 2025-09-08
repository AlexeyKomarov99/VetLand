const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Bearer ACCESS_TOKEN
        
        if (!token) {
            return res.status(401).json({message: 'Нет access токена'});
        }

        // Проверяем ACCESS токен (не лезем в БД)
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decoded; // Добавляем данные пользователя в запрос
        next(); // Передаем дальше

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({message: 'Access токен истек'});
        }
        return res.status(401).json({message: 'Невалидный access токен'});
    }
};