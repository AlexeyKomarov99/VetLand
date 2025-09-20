import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//===== assets =====//
import './RecoverPassword.scss';

const RecoverPassword = () => {
  const [userData, setUserData] = useState({
    email: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newError = {};

    if(!userData.email.trim()) {
      newError.email = 'Укажите почту';
    } else if(!/\S+@\S+\.\S+/.test(userData.email)) {
      newError.email = 'Некорректный формат электронной почты';
    }

    setError(newError);
    const isValid = Object.keys(newError).length === 0;
    setIsFormValid(isValid);
    return isValid;
  }

  // Валидация при изменении данных
  useEffect(() => {
    validateForm();
  }, [userData]);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if(validateForm()) {
      // Логика отправки на почту сгенерированной ссылки на сброс пароля
      navigate('/');

      setUserData({
        email: ''
      });
      setIsFormValid(false);
      setError({});
    }
  }

  return (
    <div className='RecoverPassword'>
      <div className="RecoverPassword__wrapper">
        <div className="RecoverPassword__container">
          <div className="RecoverPassword__content">
            <div className="RecoverPassword__title">Восстановление пароля</div>
            <input 
              type="email"
              name='email'
              value={userData.email} 
              onChange={handleChange}
              className="RecoverPassword__input"
              placeholder='Введите свой email'
            />
            <button 
              className={`RecoverPassword__btn ${!isFormValid ? 'RecoverPassword__btn--disable' : ''}`}
              disabled={!isFormValid}
              onClick={handleButtonClick}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecoverPassword;