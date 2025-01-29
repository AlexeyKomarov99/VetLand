import React, {useState, useContext} from 'react';

//===== Ресурсы =====//
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa";
import './PersonalData.scss';

//===== Контекст =====//
import { AuthContext } from '../../../../contexts/AuthContext';

const PersonalData = () => {
  
  const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({

  });  


  return (
    <div className='PersonalData'>
      <h2 className="PersonalData__title">Личные данные</h2>

      {/* Группа с input */}
      <div className="PersonalData__group">

        {/* Имя */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Имя</h3>
          <input 
            type="text" 
            className="PersonalData__item-input"
          />
        </div>

        {/* Фамилия */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Фамилия</h3>
          <input 
            type="text" 
            className="PersonalData__item-input" 
          />
        </div>

        {/* Роль */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Роль</h3>
          <input 
            type="text" 
            className="PersonalData__item-input" 
          />
        </div>

        {/* Почта */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Почта</h3>
          <input 
            type="text" 
            className="PersonalData__item-input" 
          />
        </div>

        {/* Телефон */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Телефон</h3>
          <input 
            type="text" 
            className="PersonalData__item-input" 
          />
        </div>

        {/* Дата рождения */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Дата рождения</h3>
          <div className="PersonalData__item-group">
            <input 
              type="text" 
              className="PersonalData__item-input" 
            />
            <input 
              type="text" 
              className="PersonalData__item-input" 
            />
            <input 
              type="text" 
              className="PersonalData__item-input" 
            />            
          </div>
        </div>

        {/* Регион проживания */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Телефон</h3>
          <select name="" id="" className="PersonalData__item-select">

          </select>
        </div>

        {/* Пол */}
        <div className="PersonalData__item">
          <h3 className="PersonalData__item-title">Телефон</h3>
          <div className="PersonalData__item-group">
            <input 
              type="text" 
              className="PersonalData__item-input" 
            />
          </div>
        </div>

      </div>

      {/* Подтверждение почты */}
      <div className="PersonalData__emailConfirmation-group">
        <h3 className="PersonalData__item-title">Подтверждение почты</h3>
        {user?.emailConfirmation ? (
          <div className="PersonalData__email-confirm-group">
            <span className="PersonalData__emailConfirmation-descr">Почта подтверждена!</span>
            <CheckCircleIcon className='icon' />
          </div>
        ) : (
          // Кнопка для отправки письма на подтверждение аккаунта
          <button className="PersonalData__email-confirm-btn">Подтвердить почту</button>
        )}
      </div>

      {/* Обновить пароль */}
      <div className="PersonalData__updatePassword-group">
        
      </div>

    </div>
  )
}

export default PersonalData;
