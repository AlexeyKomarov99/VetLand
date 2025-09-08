module.exports = function(roles) {
    return function(req, res, next) {
        if (!req.user) {
            return res.status(401).json({message: 'Не авторизован'});
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({message: 'Доступ запрещен'});
        }

        next();
    };
};