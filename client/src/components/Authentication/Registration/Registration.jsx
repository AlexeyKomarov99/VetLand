import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//===== assets =====//
import { IoCheckmark as CheckMarkIcon } from "react-icons/io5";
import "./Registration.scss";
//===== components =====//
import PrivacyPolicy from "../../Common/PrivacyPolicy/PrivacyPolicy";

const Registration = ({closeWindowAuthentication}) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleChecked1 = () => {
    setChecked1(!checked1);
  };

  const handleChecked2 = () => {
    setChecked2(!checked2);
  };

  // Переход на профиль пользователя после регистрации
  const navigate = useNavigate();
  
  // Функция регистрации
  const { handleRegister } = useContext(AuthContext);

  const [error, setError] = useState({});

  // Функция для форматирования телефона
  const formatPhoneNumber = (value) => {
    // Очищаем строку от всего, кроме цифр
    const cleaned = value.replace(/\D/g, "");

    // Форматируем строку в виде +7 (XXX) XXX-XX-XX
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }

    // При неполном вводе возвращаем текущую строку
    return cleaned.length > 1
      ? `+7 (${cleaned.slice(1, 4) || ""}) ${cleaned.slice(4, 7) || ""}${
          cleaned.length > 7 ? "-" : ""
        }${cleaned.slice(7, 9) || ""}${
          cleaned.length > 9 ? "-" : ""
        }${cleaned.slice(9, 11) || ""}`
      : "+7";
  };
  
  // Обработка изменений в полях
  const handleChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value); // Форматируем телефон
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  // Функция валидации пароля
  const validatePassword = (password) => {
    // Регулярное выражение:
    // - Не менее 8 символов
    // - Как минимум одна заглавная буква
    // - Как минимум одна буква (любая)
    // - Как минимум один специальный символ
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    const newError = {};

    // Валидация имени
    if(!formData.name.trim()) {
      newError.name = 'Укажите имя';
    }

    // Валидация фамилии
    if(!formData.surname.trim()) {
      newError.surname = 'Укажите фамилию';
    }

    // Валидация электронной почты
    if(!formData.email.trim()) {
      newError.email = 'Укажите почту';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = 'Некорректный формат электронной почты.';
    }

    // Валидация телефона
    if(!formData.phone.trim()) {
      newError.phone = 'Укажите телефон';
    }
    
    // Валидация пароля
    if(!formData.password.trim()) {
      newError.surname = 'Укажите пароль';
    } else if (!validatePassword(formData.password)) {
      newError.password ='Пароль должен содержать не менее 8 символов, включать заглавные буквы и специальные символы.';
    }

    // Валидация подтверждения пароля
    if (!formData.repeatPassword.trim()) {
      newError.repeatPassword = 'Подтверждение пароля обязательно.';
    } else if (formData.password !== formData.repeatPassword) {
        newError.repeatPassword = 'Пароли не совпадают.';
    }

    setError(newError);

    // Если нет ошибок, возвращаем true
    return Object.keys(newError).length === 0;
  }

  // Отправка формы
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Проверка заполнения всех полей ввода
    if (!validateForm()) {
      alert('Заполните все поля ввода');
      return;
    }

    try {
      await handleRegister(formData);
      navigate('/profile/personal-data');
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        repeatPassword: "",
      });
      setError({});
      
      // Закрытие модального окна
      closeWindowAuthentication();

    } catch (error) {
      console.error("Ошибка регистрации", error);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="Registration">
      
      <div className="Registration__group">

        <p className="Registration__attention">
          На нашем сайте работает система премодерации аккаунтов. После
          регистрации и подтверждения вашего email вы не сможете войти в личный
          кабинет опекуна, пока ваш аккаунт не одобрит модератор.
        </p>

        <div className="Registration__input-group">
          <input
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
          />

          <input
            type="text"
            className="input"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Фамилия"
          />

          {/* Поле ввода с кастомным форматированием */}
          <input
            type="text"
            className="input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            maxLength={18} // Ограничение входа
          />

          <input
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Пароль"
          />

          <input
            type="password"
            className="input"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            placeholder="Повторите пароль"
          />
        </div>

        <div className="Registration__label-group">
          <PrivacyPolicy />
        </div>

        <div className="Registration__button-wrapper">
          <button 
            type="submit"
            className="Registration__button-send button"
          >
            Зарегистрироваться
          </button>
        </div>

      </div>

    </form>
  );
};

export default Registration;