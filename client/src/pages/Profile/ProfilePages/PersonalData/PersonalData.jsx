<<<<<<< HEAD
import React, {useState, useContext} from 'react';

//===== Ресурсы =====//
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa";
import './PersonalData.scss';

//===== Контекст =====//
import { AuthContext } from '../../../../contexts/AuthContext';

//===== Данные =====//
const days = Array.from({length: 31}, (_, i) => i + 1);
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
]
const currentYear = new Date().getFullYear();
const years = Array.from({length: currentYear - 1949}, (_, i) => currentYear - i);

const PersonalData = () => {
  
  const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user ? user.name : null,
    surname: user ? user.surname : null,
    email: user ? user.email : null,
    phone: user ? user.phone : null,
    role: user ? (user.role === 'user' ? 'Пользователь' : user.role === 'admin' ? 'Администратор' : user.role === 'doctor' ? 'Доктор' : user.role === 'manager' ? 'Менеджер' : null) : null,
    dayBirth: "",
    monthBirth: "",
    yearBirth: "",
    region: "",
    gender: "",
    password: "",
    repeatPassword: "",
  });
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const [formUpdatePassword, setFormUpdatePassword] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: ''
  });
  const handlePasswordChange = (event) => {
    const {name, value} = event.target;
    setFormUpdatePassword((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const [error, setError] = useState({});

  return (
    <div className='PersonalData'>
      <h2 className="PersonalData__title">Личные данные</h2>

      {/* Содержимое */}
      <div className="PersonalData__content">

        {/* Группа input и select */}
        <div className="PersonalData__content-group">
          
          {/* Первая строка */}
          <div className="PersonalData__content-row">
            
            {/* Имя */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Имя</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Фамилия */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Фамилия</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='surname'
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            {/* Роль */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Роль</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='role'
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            
          </div>

          {/* Вторая строка */}
          <div className="PersonalData__content-row">

            {/* Почта */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Почта</div>
              <input 
                type="email" 
                className="PersonalData__content-item-input" 
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Телефон */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Телефон</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Дата рождения */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Дата рождения</div>
              <div className="PersonalData__content-item-group">
                <select 
                  className="PersonalData__content-item-select"
                  name="dayBirth"
                  value={formData.dayBirth}
                  onChange={handleChange}
                >
                  <option value="">ДД</option>
                  {days.map((day) => (
                    <option 
                      key={day}
                      value={day}
                    >
                      {day}
                    </option>
                  ))}
                </select>

                {/* Месяц рождения */}
                <select 
                  className="PersonalData__content-item-select"
                  name="monthBirth"
                  value={formData.monthBirth}
                  onChange={handleChange}
                >
                  <option value="">ММ</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </select>
                
                {/* Год рождения */}
                <select 
                  className="PersonalData__content-item-select"
                  name="yearBirth" 
                  value={formData.yearBirth}
                  onChange={handleChange}
                >
                  <option value="">ГГ</option>
                  {years.map((year, index) => (
                    <option key={index} value={index}>{year}</option>
                  ))}
                </select>

              </div>
            </div>

          </div>

          {/* Третья строка */}
          <div className="PersonalData__content-row">

            {/* Регион проживания */}
            <div className="PersonalData__content-item PersonalData__content-item--span-2">
              <div className="PersonalData__content-item-title">Регион проживания</div>
              <select 
                className="PersonalData__content-item-select"
                name="region" 
                value={formData.region}
                onChange={handleChange}
              >
                <option value="">Выберите регион</option>
                <option value="moscow">Москва и Московская обл.</option>
                <option value="spb">Санкт-Петербург и Ленинградская обл.</option>
              </select>
            </div>

            {/* Пол */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Пол</div>
              <select 
                className="PersonalData__content-item-select"
                name="gender" 
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Выберите пол</option>
                <option value="male">Муж</option>
                <option value="female">Жен</option>
              </select>
            </div>

          </div>

          {/* Кнопка сохранения изменений в полях ввода */}
          <div className="PersonalData__content-group-wrapper">
            <button 
              className="PersonalData__content-group-btn button"
            >
              Сохранить изменения
            </button>
          </div>
          
        </div>
        

        {/* Подтверждение почты */}
        <div className="PersonalData__email-confirmation">
          <div className="PersonalData__item-title">Подтверждение почты</div>
          
          <div className="PersonalData__email-confirmation-group-wrapper">
            <div className="PersonalData__email-confirmation-group">
              {user?.emailConfirmation ? (
                <button className="PersonalData__email-confirm-group button-success">
                  <span className="PersonalData__emailConfirmation-descr">Почта подтверждена!</span>
                  <CheckCircleIcon className='icon' />
                </button>
              ) : (
                // Кнопка для отправки письма на подтверждение аккаунта
                <button className="PersonalData__email-confirm-btn button">Подтвердить почту</button>
              )}
            </div>
          </div>
        </div>

        {/* Обновить пароль */}
        <div className="PersonalData__update-password">
          <h2 className="PersonalData__update-password-title">Обновление пароля</h2>
          
          {/* Группа паролей */}
          <div className="PersonalData__update-password-group">
            
            {/* Текущий пароль */}
            <div className="PersonalData__update-password-item">
              <div className="PersonalData__update-password-item-title">Старый пароль</div>
              <input 
                className="PersonalData__update-password-item-input" 
                type="password"
                name='currentPassword'
                value={formUpdatePassword.currentPassword}
                onChange={handlePasswordChange}
                placeholder='Старый пароль'
              />
            </div>

            {/* Новый пароль */}
            <div className="PersonalData__update-password-item">
              <div className="PersonalData__update-password-item-title">Новый пароль</div>
              <input 
                className="PersonalData__update-password-item-input" 
                type="password"
                name='newPassword'
                value={formUpdatePassword.newPassword}
                onChange={handlePasswordChange}
                placeholder='Новый пароль'
              />
            </div>

            {/* Старый пароль */}
            <div className="PersonalData__update-password-item">
              <div className="PersonalData__update-password-item-title">Повторите новый пароль</div>
              <input 
                className="PersonalData__update-password-item-input" 
                type="password"
                name='repeatPassword'
                value={formUpdatePassword.repeatPassword}
                onChange={handlePasswordChange}
                placeholder='Повторите новый пароль'
              />
            </div>

          </div>

          {/* Кнопка подтверждения обновления пароля */}
          <div className="PersonalData__update-password-btn-wrapper">
            <button 
              className="PersonalData__update-password-btn button"
            >
              Обновить пароль
            </button>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default PersonalData;
=======
import React, {useState, useContext} from 'react';

//===== Ресурсы =====//
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa";
import './PersonalData.scss';

//===== Контекст =====//
import { AuthContext } from '../../../../contexts/AuthContext';

//===== Данные =====//
const days = Array.from({length: 31}, (_, i) => i + 1);
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
]
const currentYear = new Date().getFullYear();
const years = Array.from({length: currentYear - 1949}, (_, i) => currentYear - i);

const PersonalData = () => {
  
  const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user ? user.name : null,
    surname: user ? user.surname : null,
    email: user ? user.email : null,
    phone: user ? user.phone : null,
    role: user ? (user.role === 'user' ? 'Пользователь' : user.role === 'admin' ? 'Администратор' : user.role === 'doctor' ? 'Доктор' : user.role === 'manager' ? 'Менеджер' : null) : null,
    dayBirth: "",
    monthBirth: "",
    yearBirth: "",
    region: "",
    gender: "",
    password: "",
    repeatPassword: "",
  });
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const [formUpdatePassword, setFormUpdatePassword] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: ''
  });
  const handlePasswordChange = (event) => {
    const {name, value} = event.target;
    setFormUpdatePassword((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const [error, setError] = useState({});

  return (
    <div className='PersonalData'>
      <h2 className="PersonalData__title">Личные данные</h2>

      {/* Содержимое */}
      <div className="PersonalData__content">

        {/* Группа input и select */}
        <div className="PersonalData__content-group">
          
          {/* Первая строка */}
          <div className="PersonalData__content-row">
            
            {/* Имя */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Имя</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Фамилия */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Фамилия</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='surname'
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            {/* Роль */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Роль</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='role'
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            
          </div>

          {/* Вторая строка */}
          <div className="PersonalData__content-row">

            {/* Почта */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Почта</div>
              <input 
                type="email" 
                className="PersonalData__content-item-input" 
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Телефон */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Телефон</div>
              <input 
                type="text" 
                className="PersonalData__content-item-input" 
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Дата рождения */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Дата рождения</div>
              <div className="PersonalData__content-item-group">
                <select 
                  className="PersonalData__content-item-select"
                  name="dayBirth"
                  value={formData.dayBirth}
                  onChange={handleChange}
                >
                  <option value="">ДД</option>
                  {days.map((day) => (
                    <option 
                      key={day}
                      value={day}
                    >
                      {day}
                    </option>
                  ))}
                </select>

                {/* Месяц рождения */}
                <select 
                  className="PersonalData__content-item-select"
                  name="monthBirth"
                  value={formData.monthBirth}
                  onChange={handleChange}
                >
                  <option value="">ММ</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </select>
                
                {/* Год рождения */}
                <select 
                  className="PersonalData__content-item-select"
                  name="yearBirth" 
                  value={formData.yearBirth}
                  onChange={handleChange}
                >
                  <option value="">ГГ</option>
                  {years.map((year, index) => (
                    <option key={index} value={index}>{year}</option>
                  ))}
                </select>

              </div>
            </div>

          </div>

          {/* Третья строка */}
          <div className="PersonalData__content-row">

            {/* Регион проживания */}
            <div className="PersonalData__content-item PersonalData__content-item--span-2">
              <div className="PersonalData__content-item-title">Регион проживания</div>
              <select 
                className="PersonalData__content-item-select"
                name="region" 
                value={formData.region}
                onChange={handleChange}
              >
                <option value="">Выберите регион</option>
                <option value="moscow">Москва и Московская обл.</option>
                <option value="spb">Санкт-Петербург и Ленинградская обл.</option>
              </select>
            </div>

            {/* Пол */}
            <div className="PersonalData__content-item">
              <div className="PersonalData__content-item-title">Пол</div>
              <select 
                className="PersonalData__content-item-select"
                name="gender" 
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Выберите пол</option>
                <option value="male">Муж</option>
                <option value="female">Жен</option>
              </select>
            </div>

          </div>

          {/* Кнопка сохранения изменений в полях ввода */}
          <div className="PersonalData__content-group-wrapper">
            <button 
              className="PersonalData__content-group-btn button"
            >
              Сохранить изменения
            </button>
          </div>
          
        </div>
        

        {/* Подтверждение почты */}
        <div className="PersonalData__email-confirmation">
          <div className="PersonalData__item-title">Подтверждение почты</div>
          
          <div className="PersonalData__email-confirmation-group-wrapper">
            <div className="PersonalData__email-confirmation-group">
              {user?.emailConfirmation ? (
                <button className="PersonalData__email-confirm-group button-success">
                  <span className="PersonalData__emailConfirmation-descr">Почта подтверждена!</span>
                  <CheckCircleIcon className='icon' />
                </button>
              ) : (
                // Кнопка для отправки письма на подтверждение аккаунта
                <button className="PersonalData__email-confirm-btn button">Подтвердить почту</button>
              )}
            </div>
          </div>
        </div>

        {/* Обновить пароль */}
        <div className="PersonalData__update-password">
          <h2 className="PersonalData__update-password-title">Обновление пароля</h2>
          
          {/* Группа паролей */}
          <div className="PersonalData__update-password-group">
            
            {/* Текущий пароль */}
            <div className="PersonalData__update-password-item">
              <div className="PersonalData__update-password-item-title">Старый пароль</div>
              <input 
                className="PersonalData__update-password-item-input" 
                type="password"
                name='currentPassword'
                value={formUpdatePassword.currentPassword}
                onChange={handlePasswordChange}
                placeholder='Старый пароль'
              />
            </div>

            {/* Новый пароль */}
            <div className="PersonalData__update-password-item">
              <div className="PersonalData__update-password-item-title">Новый пароль</div>
              <input 
                className="PersonalData__update-password-item-input" 
                type="password"
                name='newPassword'
                value={formUpdatePassword.newPassword}
                onChange={handlePasswordChange}
                placeholder='Новый пароль'
              />
            </div>

            {/* Старый пароль */}
            <div className="PersonalData__update-password-item">
              <div className="PersonalData__update-password-item-title">Повторите новый пароль</div>
              <input 
                className="PersonalData__update-password-item-input" 
                type="password"
                name='repeatPassword'
                value={formUpdatePassword.repeatPassword}
                onChange={handlePasswordChange}
                placeholder='Повторите новый пароль'
              />
            </div>

          </div>

          {/* Кнопка подтверждения обновления пароля */}
          <div className="PersonalData__update-password-btn-wrapper">
            <button 
              className="PersonalData__update-password-btn button"
            >
              Обновить пароль
            </button>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default PersonalData;
>>>>>>> refs/remotes/origin/main
