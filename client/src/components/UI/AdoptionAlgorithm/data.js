import { LuArrowRight as ArrowIcon } from "react-icons/lu";

export const algorithm = [
    {
        id: 1,
        title: 'Выбор',
        descr: 'У нас много подопечных, кто-то из них наверняка может стать вашим настоящим другом!',
        link: '/animals',
        icon: <div className="AdoptionAlgorithm__arrow-icon-wrapper"><ArrowIcon className="arrow-icon" /></div>
    },
        {
        id: 2,
        title: 'Анкета',
        descr: 'Расскажите о себе. Ответьте на несколько вопросов виртуального ассистента Vetland.',
        link: '/questionnaire',
        icon: <div className="AdoptionAlgorithm__arrow-icon-wrapper" style={{width: '40px', height: '40px'}}><ArrowIcon className="arrow-icon" /></div>
    },
        {
        id: 3,
        title: 'Собеседование',
        descr: 'Мы вам перезвоним и на основании ваших ответов проведем подробное интервью.',
        icon: <></>
    },
        {
        id: 4,
        title: 'Знакомство',
        descr: 'Если интервью пройдет успешно, мы пригласим вас познакомиться с нашими подопечными.',
        icon: <></>
    },
        {
        id: 5,
        title: 'Решение',
        descr: 'Если знакомство пройдет успешно, мы дадим вам время на подготовку к переезду животного.',
        icon: <></>
    },
        {
        id: 6,
        title: 'Поездка домой и сопровождение',
        descr: 'Мы подпишем договор об ответственном содержании животного и создадим чат, в котором будем отвечать на все ваши вопросы о питомце.',
        icon: <></>
    },
]