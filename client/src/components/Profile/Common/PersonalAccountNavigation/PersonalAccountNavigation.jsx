import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';

//===== Контекст =====//
import {AuthContext} from '../../../../contexts/AuthContext';

const userNavigation = [
    {
      role: "user",
      listPages: ['Личные данные', 'Усыновление', 'Пожертвование', 'Волонтерство', 'Ваши усыновленные животные']
    },
    {
      role: "doctor",
      listPages: ['Личные данные', 'Медицинские записи']
    },
    {
      role: "manager",
      listPages: ['Личные данные', 'Профили пользователей', 'Заявки', 'Животные', 'Пожертвования', 'Статистика']
    },
    {
      role: "admin",
      listPages: ['Личные данные', 'Профили пользователей', 'Заявки', 'Животные', 'Пожертвования', 'Статистика', 'Управление приютами']
    },
]

const PersonalAccountNavigation = ({toggleActivePage}) => {

  const {user} = useContext(AuthContext);

  const navigationsItems = user ? userNavigation.find(nav => nav.role === user?.role) : null;

  return (
    <nav className='PersonalAccountNavigation'>
      {
        navigationsItems ? (
          <ul className="PersonalAccountNavigation__ul-group">
            {navigationsItems.listPages.map((page, index) => (
              <li
                key={index}
                className="PersonalAccountNavigation__li-item"
                onClick={() => toggleActivePage(`${page}`)}
              >
                {page}
              </li>
            ))}
          </ul>
        ) : (
          <p>Роль пользователя не определена или страница не найдена.</p>
        )
      }
    </nav>
  )
}

export default PersonalAccountNavigation;