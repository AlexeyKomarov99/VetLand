import React, { useState } from "react";
import { Link } from "react-router-dom";

//===== Ресурсы =====//
import "./Registration.scss";

import { IoCheckmark as CheckMarkIcon } from "react-icons/io5";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
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

  // Отправка формы
  const handleSubmit = (event) => {
    event.preventDefault();
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
            type="text"
            className="input"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            placeholder="Повторите пароль"
          />
        </div>

        <div className="Registration__label-group">
          <label className="Registration__label-checkbox">
              <input 
                type="checkbox" 
                className="Registration__checkbox" 
                checked={checked1}
                onChange={handleChecked1}  
              />
              <div className="checkbox-box">
                {checked1 && <CheckMarkIcon style={{color: 'white'}} />}
              </div>
              <span className="Registration__checkbox-descr">
                  Я ознакомился (лась) с <Link style={{textDecoration: 'underline', fontSize: '12px'}} to='/privacy-policy'>
                  политикой конфиденциальности</Link> и принимаю их условия
              </span>
          </label>

          <label className="Registration__label-checkbox">
              <input 
                type="checkbox" 
                className="Registration__checkbox" 
                checked={checked2}
                onChange={handleChecked2}
              />
              <div className="checkbox-box">
                {checked2 && <CheckMarkIcon style={{color: 'white'}} />}
              </div>
              <span className="Registration__checkbox-descr">
                  Хочу получать информацию от фонда vet.land
              </span>
          </label>
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