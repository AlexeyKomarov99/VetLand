import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

//===== Ресурсы =====//
import { MdSubdirectoryArrowRight as ArrowRightBottomIcon } from "react-icons/md";
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa";
import './HelpAnimals.scss';

//===== Списки для компонентов =====//
const sumList = [
  {id: 1, sum: 1000, descr: '5 животных, обработанных от клещей и блох'},
  {id: 2, sum: 3000, descr: 'это 25 кг корма для наших подопечных'},
  {id: 3, sum: 12000, descr: 'курс занятий с кинологом по социализации сложной собаки'},
]

const HelpAnimals = () => {
  const predefinedSums = ['1000', '3000', '12000'];
  const [activeSection, setActiveSection] = useState('sum');
  const [sumSectionStatus, setSumSectionStatus] = useState(true);
  const [periodicitySection, setPeriodicitySection] = useState(false);
  const [userDataSection, setUserDataSection] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [userForm, setUserForm] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    displayDonationRanking: false,
    sum: '1000',
    period: 'Ежемесячное',
  })
  const [error, setError] = useState('');

  const location = useLocation();
  const {donationForm} = location.state || {};
  console.log('Данные полученные из AnimalInfo:', donationForm);

  const toggleActiveSection = (sectionName) => {
    setActiveSection((prevState) => {
      if (sectionName === 'sum' && prevState !== 'sum') {
        setActiveSection('sum');
        setUserDataSection(false);
      } else if (sectionName === 'period' && prevState !== 'period') {
        setActiveSection('period');
        setPeriodicitySection(true);
        setUserDataSection(false);
      } else if (sectionName === 'user-data' && prevState !== 'user-data') {
        setActiveSection('user-data');
        setUserDataSection(true);
      } else if (sectionName === 'payment-method' && prevState !== 'payment-method') {
        if (!validateInputFilled()) {
          return;
        } else {
          setActiveSection('payment-method');
          setPaymentMethod(true);
        }
      } else {
        return prevState;
      }
    })
  }
  
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
  
  // Функция валидации заполнения форм
  const validateInputFilled = () => {
    const newError = {};

    if(!userForm.name.trim()) {
      newError.name = 'Укажите имя';
    }

    if(!userForm.surname.trim()) {
      newError.surname = 'Укажите фамилию';
    }

    if(!userForm.phone.trim()) {
      newError.phone = 'Укажите номер телефона';
    }

    if(!userForm.email.trim()) {
      newError.email = 'Укажите почту';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  // Обработчик заполнения полей форм
  const handleChangeUserForm = (event) => {
    const { name, value, type } = event.target;
    let newValue = value;

    if (name === 'phone') {
      newValue = formatPhoneNumber(value);
    }

    if (name === 'sum') {
      if (type === 'text') {
        if (!/^\d*$/.test(value)) {
            // Возможно, показать ошибку или игнорировать изменение
            return;
        }
      }
    }

    setUserForm((prevState) => ({
      ...prevState,
      [name]: newValue
    }))

    // Изменение состояния ошибок при вводе текста
    setError((prevState) => ({
      ...prevState,
      [name]: value
    }))

  };

  return (
    <div className='HelpAnimals'>

      {/* Секция 1. Вступление "Финансовая поддержка" */}
      <div className="Introduction">
        <div className="Introduction__wrapper">
          <div className="Introduction__container">

            <div className="Introduction__content">

              <div className="Introduction__header">
                <div className="Introduction__header-nav">
                  <Link to='/' className='Introduction__Link-main'>
                    <span className="Introduction__Link-text">Главная</span>
                    <ArrowRightBottomIcon className='icon' />
                  </Link>
                  <span className="Introduction__current-page">Поддержите нас</span>
                </div>
              </div>

              <div className="Introduction__body">
                <div className="Introduction__title">Финансовая поддержка</div>
                <div className="Introduction__descr">
                  <span className="Introduction__descr-item">
                    Мы ценим ваше участие и помощь.
                    Любая сумма важна и помогает нам работать,
                    а нашим подопечным — жить и дождаться хозяина.
                  </span>
                  <span className="Introduction__descr-item gradient-item">Спасибо!</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Секция 2. Заполнение данных для финансовой помощи */}
      <div className="FinancialAid">
        <div className="FinancialAid__wrapper">
          <div className="FinancialAid__container">

            <div className="FinancialAid__content">

              {/* Левая часть. Информация о пожертвовании */}
              <div className="FinancialAid__total-card">
                <div className="FinancialAid__total-card-wrapper">
                  
                  <div className="FinancialAid__total-card-item">
                    <h3 className="FinancialAid__total-card-title">Цель пожертвования</h3>
                    <span className="FinancialAid__total-card-text">Финансовая поддержка фонда</span>
                  </div>

                  {/* Сумма */}
                  { sumSectionStatus && (
                    <div className="FinancialAid__total-card-item">
                      <h3 className="FinancialAid__total-card-title">Сумма</h3>
                      <span className="FinancialAid__total-card-text">
                        {userForm.sum} ₽
                      </span>
                    </div>
                  )}

                  {/* Периодичность */}
                  { periodicitySection && (
                    <div className="FinancialAid__total-card-item">
                      <h3 className="FinancialAid__total-card-title">Периодичность</h3>
                      <span className="FinancialAid__total-card-text">
                        {userForm.period}
                      </span>
                    </div>
                  )}

                  {/* Личные данные */}
                  { userDataSection && (
                    <div className="FinancialAid__total-card-item">
                      <h3 className="FinancialAid__total-card-title">Личные данные</h3>
                      <div className="FinancialAid__total-card-group">
                        <span className="FinancialAid__total-card-text">
                          {userForm.name}
                        </span>
                        <span className="FinancialAid__total-card-text">
                          {userForm.surname}
                        </span>
                        <span className="FinancialAid__total-card-text">
                          {userForm.phone}
                        </span>
                        <span className="FinancialAid__total-card-text">
                          {userForm.email}
                        </span>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Правая часть. Карточки для заполнения данных */}
              <div className="FinancialAid__user-info">

                {/* Группа кнопок для смены секции заполнения данных */}
                <div className="FinancialAid__header-btn-group">
                  
                  <button 
                    className={`FinancialAid__btn-item ${activeSection === 'sum' ? (sumSectionStatus ? 'success' : 'pending') : (sumSectionStatus ? 'success' : 'pending')}`}
                    onClick={() => toggleActiveSection('sum')}
                  >
                    <div className="FinancialAid__btn-descr">Сумма</div>
                    {sumSectionStatus ? <CheckCircleIcon className='checkcircle-icon' /> : '' }
                  </button>

                  <button 
                    className={`FinancialAid__btn-item ${activeSection === 'period' ? (periodicitySection ? 'success' : 'pending') : (periodicitySection ? 'success' : 'pending')}`}
                    onClick={() => toggleActiveSection('period')}
                  >
                    <div className="FinancialAid__btn-descr">Периодичность</div>
                    {periodicitySection ? <CheckCircleIcon className='checkcircle-icon' /> : '' }
                  </button>

                  <button 
                    className={`FinancialAid__btn-item ${activeSection === 'user-data' ? (userDataSection ? 'success' : 'pending') : (userDataSection ? 'success' : 'pending')}`}
                    onClick={() => toggleActiveSection('user-data')}
                  >
                    <div className="FinancialAid__btn-descr">Данные</div>
                    {userDataSection ? <CheckCircleIcon className='checkcircle-icon' /> : '' }
                  </button>

                  <button 
                    className={`FinancialAid__btn-item ${activeSection === 'payment-method' ? (paymentMethod ? 'success' : 'pending') : (paymentMethod ? 'success' : 'pending')}`}
                    onClick={() => toggleActiveSection('payment-method')}
                  >
                    <div className="FinancialAid__btn-descr">Способ оплаты</div>
                    {sumSectionStatus ? <CheckCircleIcon className='checkcircle-icon' /> : '' }
                  </button>
                </div>

                <div className="FinancialAid__content-body">

                  {/* Карточки с суммой денег на пожертвование */}
                  {activeSection === 'sum' && (
                      <div className="FinancialAid__donations">
                        <div className="FinancialAid__donations-cards">
                          
                          <div className="FinancialAid__donations-card-group">
                            <label className="FinancialAid__donations-card-label radio">
                              <input 
                                className="FinancialAid__donations-card-input" 
                                type="radio"
                                name='sum'
                                value={1000}
                                checked={userForm.sum === '1000'}
                                onChange={handleChangeUserForm}
                              />
                              <span className="FinancialAid__donations-card-sum">1000 ₽</span>
                            </label>
                            <span className="FinancialAid__donations-card-descr">
                              5 животных, обработанных от клещей и блох
                            </span>
                          </div>

                          <div className="FinancialAid__donations-card-group">
                            <label className="FinancialAid__donations-card-label radio">
                              <input 
                                className="FinancialAid__donations-card-input" 
                                type="radio"
                                name='sum'
                                value={3000}
                                checked={userForm.sum === '3000'}
                                onChange={handleChangeUserForm}
                              />
                              <span className="FinancialAid__donations-card-sum">3000 ₽</span>
                            </label>
                            <span className="FinancialAid__donations-card-descr">
                              это 25 кг корма для наших подопечных
                            </span>
                          </div>

                          <div className="FinancialAid__donations-card-group">
                            <label className="FinancialAid__donations-card-label radio">
                              <input 
                                className="FinancialAid__donations-card-input" 
                                type="radio"
                                name='sum'
                                value={12000}
                                checked={userForm.sum === '12000'}
                                onChange={handleChangeUserForm}
                              />
                              <span className="FinancialAid__donations-card-sum">12000 ₽</span>
                            </label>
                            <span className="FinancialAid__donations-card-descr">
                              курс занятий с кинологом по социализации сложной собаки
                            </span>
                          </div>

                          <div className="FinancialAid__donations-card-group">
                            <label
                              className={`FinancialAid__donations-card-label label ${
                                !predefinedSums.includes(userForm.sum) && userForm.sum ? 'filled' : ''
                              }`}
                            >
                              <input 
                                className="FinancialAid__donations-card-input custom-input" 
                                type="text"
                                name='sum'
                                value={predefinedSums.includes(userForm.sum) ? '' : userForm.sum}
                                onChange={handleChangeUserForm}
                              />
                              <span className="custom-span">Ваша сумма</span>
                            </label>
                          </div>

                        </div>

                        <button 
                          className="FinancialAid__donations-btn"
                          onClick={() => toggleActiveSection('period')}
                        >
                          Перейти к периодичности пожертвования
                        </button>
                      </div>
                  )}
                  
                  {/* Карточки с выбором периода пожертвований */}
                  {activeSection === 'period' && (
                    <div className="FinancialAid__period">
                      <div className="FinancialAid__period-cards">
                        
                        <label className="FinancialAid__period-card-label .radio">
                          <input 
                            type="radio"
                            name='period'
                            value='Ежемесячное'
                            checked={userForm.period === 'Ежемесячное'}
                            onChange={handleChangeUserForm}
                            className="FinancialAid__period-card-input" 
                          />
                          <span className="FinancialAid__period-card-span">Ежемесячное</span>
                        </label>

                        <label className="FinancialAid__period-card-label">
                          <input 
                            type="radio"
                            name='period'
                            value='Ежеквартальное'
                            checked={userForm.period === 'Ежеквартальное'}
                            onChange={handleChangeUserForm}
                            className="FinancialAid__period-card-input" 
                          />
                          <span className="FinancialAid__period-card-span">Ежеквартальное</span>
                        </label>

                        <label className="FinancialAid__period-card-label">
                          <input 
                            type="radio"
                            name='period'
                            value='Ежегодное'
                            checked={userForm.period === 'Ежегодное'}
                            onChange={handleChangeUserForm}
                            className="FinancialAid__period-card-input" 
                          />
                          <span className="FinancialAid__period-card-span">Ежегодное</span>
                        </label>

                        <label className="FinancialAid__period-card-label">
                          <input 
                            type="radio"
                            name='period'
                            value='Разовое'
                            checked={userForm.period === 'Разовое'}
                            onChange={handleChangeUserForm}
                            className="FinancialAid__period-card-input" 
                          />
                          <span className="FinancialAid__period-card-span">Разовое</span>
                        </label>         

                      </div>
                      <button 
                        className="FinancialAid__period-btn"
                        onClick={() => toggleActiveSection('user-data')}
                      >
                        Перейти к заполнению данных
                      </button>
                    </div>
                  )}

                  {activeSection === 'user-data' && (
                    <div className="FinancialAid__user-data">

                      {/* Данные пользователя */}
                      <div className="FinancialAid__user-data-cards">

                        <div className="FinancialAid__user-data-card-group">
                          <label className={`FinancialAid__user-data-card-label ${userForm.name ? 'filled' : ''}`}>
                            <input 
                              className={`FinancialAid__user-data-card-input ${error.name ? 'error' : ''}`}
                              type="text"
                              name='name'
                              value={userForm.name}
                              onChange={handleChangeUserForm}
                              autoComplete='off'
                            />
                            <span className={`FinancialAid__user-data-card-span ${error.name ? 'error' : ''}`}>
                              Имя
                            </span>
                          </label>
                          {error.name && <span className="FinancialAid__user-data-card-error">Укажите имя</span> }
                        </div>

                        <div className="FinancialAid__user-data-card-group">
                          <label className={`FinancialAid__user-data-card-label ${userForm.surname ? 'filled' : ''}`}>
                            <input 
                              className={`FinancialAid__user-data-card-input ${error.surname ? 'error' : ''}`}
                              type="text"
                              name='surname'
                              value={userForm.surname}
                              onChange={handleChangeUserForm}
                              autoComplete='off'
                            />
                            <span className={`FinancialAid__user-data-card-span ${error.surname ? 'error' : ''}`}>
                              Фамилия
                            </span>
                          </label>
                          {error.surname && <span className="FinancialAid__user-data-card-error">Укажите фамилию</span> }
                        </div>

                        <div className="FinancialAid__user-data-card-group">
                          <label className={`FinancialAid__user-data-card-label ${userForm.phone ? 'filled' : ''}`}>
                            <input 
                              className={`FinancialAid__user-data-card-input ${error.phone ? 'error' : ''}`}
                              type="text"
                              name='phone'
                              value={userForm.phone}
                              onChange={handleChangeUserForm}
                              placeholder="+7 (___) ___-__-__"
                              maxLength={18} // Ограничение входа
                            />
                            <span className={`FinancialAid__user-data-card-span ${error.phone ? 'error' : ''}`}>
                              Телефон
                            </span>
                          </label>
                          {error.phone && <span className="FinancialAid__user-data-card-error">Укажите номер телефона</span> }
                        </div>

                        <div className="FinancialAid__user-data-card-group">
                          <label className={`FinancialAid__user-data-card-label ${userForm.email ? 'filled' : ''}`}>
                            <input 
                              className={`FinancialAid__user-data-card-input ${error.email ? 'error' : ''}`}
                              type="email"
                              name='email'
                              value={userForm.email}
                              onChange={handleChangeUserForm}
                            />
                            <span className={`FinancialAid__user-data-card-span ${error.email ? 'error' : ''}`}>
                              Email
                            </span>
                          </label>
                          {error.email && <span className="FinancialAid__user-data-card-error">Укажите почту</span> }
                        </div>

                      </div>

                      {/* Переход к следующему разделу */}
                      <button 
                        className="FinancialAid__user-data-btn"
                        onClick={() => toggleActiveSection('payment-method')}
                      >
                        Перейти к способу оплаты
                      </button>

                      {/* Разрешение на отображение данных пользователя в рейтинге по донатам */}
                      <input 
                        type="radio" 
                        name='displayDonationRanking'
                        className="FinancialAid__user-data-agreement" 
                      />
                    </div>
                  )}

                  {activeSection === 'payment-method' && (
                    <div className="">Секция способ оплаты</div>
                  )}



                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HelpAnimals