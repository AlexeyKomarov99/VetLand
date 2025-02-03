import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';

//===== Ресурсы =====//
import './Profile.scss';

//===== Компоненты =====//
import PersonalAccountNavigation from '../../../components/Profile/Common/PersonalAccountNavigation/PersonalAccountNavigation';

const Profile = () => {

  return (
    <div className='Profile'>
      <div className="Profile__wrapper">
        <div className="Profile__container">
          
          <div className="Profile__content">

            {/* Содержимое контента */}
            <Outlet className='Profile__content-info' />

            {/* Тестовая панель навигации */}
            <PersonalAccountNavigation className='Profile__navbar' />

          </div>


        </div>
      </div>
    </div>
  )
}

export default Profile