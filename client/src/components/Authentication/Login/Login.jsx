import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

//===== Ресурсы =====//
import './Login.scss';

//===== Контекст =====//
import { AuthContext } from '../../../contexts/AuthContext';

const Login = ({closeWindowAuthentication}) => {
  
  const {handleLogin} = useContext(AuthContext); // Функция логина
  const navigate = useNavigate(); // Переменная маршрутизации на страницу профиля
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({});

  // Обработка изменений в полях
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    setError((prevStateError) => ({
      ...prevStateError,
      [name]: ''
    }))
  }

  // Функция валидации заполнения всех полей данных
  const validateForm = () => {
    const newError = {};

    // Валидация почты 
    if(!formData.email.trim()) {
      newError.email = 'Укажите почту';
    }

    // Валидация пароля
    if(!formData.password.trim()) {
      newError.password = 'Укажите пароль';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!validateForm()) {
      alert('Заполните все поля!');
      return;
    }

    try {
      await handleLogin(formData);
      navigate('/profile/personal-data');
      setFormData({
        email: '',
        password: '',
      });
      setError({});

      // Закрытие модального окна
      closeWindowAuthentication();
    } catch (error) {
      console.error("Ошибка входа", error);
    }

  }

  return (
    <form 
      className="Login"
      onSubmit={handleSubmit}
    >
      <div className="Login__group">
        <input 
          type="email" 
          className="input"
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          autoComplete='off'
        />
        <input 
          type="password" 
          className="input"
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Пароль'
          autoComplete='off'
        />
      </div>

      <button 
        className="Login__button-send button"
        type='submit'
      >
        Вход
      </button>
    </form>
  )
}

export default Login