import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

//===== Контекст =====//

const userNavigation = [
    {user: ['Личные данные', 'Усыновление', 'Пожертвование', 'Волонтерство', 'Ваши усыновленные животные']},
    {doctor: ['Личные данные', 'Медицинские записи']},
    {manager: ['Личные данные', 'Профили пользователей', 'Заявки', 'Животные', 'Пожертвования', 'Статистика']},
    {admin: ['Личные данные', 'Профили пользователей', 'Заявки', 'Животные', 'Пожертвования', 'Статистика', 'Управление приютами']},
]

const PersonalAccountNavigation = ({toggleActivePage}) => {



  return (
    <nav className='PersonalAccountNavigation'>
      
    </nav>
  )
}

export default PersonalAccountNavigation;