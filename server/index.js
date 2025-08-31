require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const runAllSeeds = require('./seeders');

const sequelize = require('./db');
const router = require('./router/index');
const models = require('./models/index');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true // Передача куки
}));
app.use(express.json()); // Парсинг тела запросов req.body в формате json
app.use(cookieParser()); // Получаем доступ к cookies через объект req.cookies в обработчиках маршрутов

app.use('/api', router); // Маршруты к end points


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        await runAllSeeds();

        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
