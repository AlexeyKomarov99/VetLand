import React, {useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom';

//===== Контекст =====//
import {AuthContext} from '../../../../contexts/AuthContext';

const userNavigation = [
    {
      role: "user",
      listPages: ['Личные данные', 'Волонтерство', 'Пожертвование', 'Ваши усыновленные животные'],
      listLinks: ['/profile/personal-data', '/profile/volunteering', '/profile/donations', '/profile/user-adopted-animal'],
    },
    {
      role: "doctor",
      listPages: ['Личные данные', 'Медицинские записи'],
      listLinks: ['/profile/personal-data', '/profile/medical-records'],
    },
    {
      role: "manager",
      listPages: ['Личные данные', 'Заявки', 'Профили пользователей', 'Животные приюта', 'Усыновленные животные', 'Статистика', 'Пожертвования'],
      listLinks: ['/profile/personal-data', '/profile/applications', '/profile/user-profiles', '/profile/animal-info-shelter', '/profile/animal-adopted-info', '/profile/statistics', '/profile/donations']
    },
    {
      role: "admin",
      listPages: ['Личные данные', 'Заявки', 'Профили пользователей', 'Животные приюта', 'Усыновленные животные', 'Статистика', 'Пожертвования', 'Управление приютами'],
      listLinks: ['/profile/personal-data', '/profile/applications', '/profile/user-profiles', '/profile/animal-info-shelter', '/profile/animal-adopted-info', '/profile/statistics', '/profile/donations', '/profile/shelter-management'],
    },
]

const PersonalAccountNavigation = () => {

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
              >
                <NavLink
                  to={navigationsItems.listLinks[index]}
                  className="PersonalAccountNavigation__NavLink-item"
                >
                  {page}
                </NavLink>  
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