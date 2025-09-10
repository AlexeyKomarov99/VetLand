import { BsArrowRightCircle as ArrowRightCircleIcon } from "react-icons/bs";

export const cardsContent = [
  {
    id: 1, 
    number: 1, 
    title: 'Выбор', 
    descr: 'У нас много подопечных, кто-то из них наверняка может стать вашим настоящим другом!', 
    icon: <ArrowRightCircleIcon className='icon' />, 
    link: '/animals'
  },
  {
    id: 2, 
    number: 2, 
    title: 'Анкета', 
    descr: 'Расскажите о себе. Ответьте на несколько вопросов виртуального ассистента Vetland.', 
    icon: <ArrowRightCircleIcon className='icon' />, 
    link: '/questionnaire'
  },
  {
    id: 3, 
    number: 3, 
    title: 'Собеседование', 
    descr: 'Мы вам перезвоним и на основании ваших ответов проведем подробное интервью.', 
    icon: <></>
  },
  {
    id: 4, 
    number: 4, 
    title: 'Знакомство', 
    descr: 'Если интервью пройдет успешно, мы пригласим вас познакомиться с нашими подопечными.', 
    icon: <></>
  },
  {
    id: 5, 
    number: 5, 
    title: 'Решение', 
    descr: 'Если знакомство пройдет успешно, мы дадим вам время на подготовку к переезду животного.', 
    icon: <ArrowRightCircleIcon className='icon' />, 
    link: '/questionnaire'
  },
  {
    id: 6, 
    number: 6, 
    title: 'Поездка домой и сопровождение', 
    descr: 'Мы подпишем договор об ответственном содержании животного и создадим чат, в котором будем отвечать на все ваши вопросы о питомце.', 
    icon: <></>
  },
]