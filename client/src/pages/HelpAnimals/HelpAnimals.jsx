import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
  const [sumSectionStatus, setSumSectionStatus] = useState(false);
  const [periodicitySection, setPeriodicitySection] = useState(false);
  const [userDataSection, setUserDataSection] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);

  const toggleActiveSection = (sectionName) => {
    setActiveSection((prevState) => {
      if (sectionName === 'sum' && prevState !== 'sum') {
        setActiveSection('sum');
      } else if (sectionName === 'period' && prevState !== 'period') {
        setActiveSection('period');
      } else if (sectionName === 'user-data' && prevState !== 'user-data') {
        setActiveSection('user-data');
      } else if (sectionName === 'payment-method' && prevState !== 'payment-method') {
        setActiveSection('payment-method');
      } else {
        return prevState;
      }
    })
  }

  const [userForm, setUserForm] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    sum: '1000',
    period: 'ежемесячное',
  })
  
  const handleChangeUserForm = (event) => {
    const { name, value, type } = event.target;

    if (name === 'sum') {
      if (type === 'text') {
        // Разрешить только числа
        if (/^\d*$/.test(value)) {
          setUserForm((prevState) => ({
            ...prevState,
            sum: value
          }));
        }
      } else {
        setUserForm((prevState) => ({
          ...prevState,
          sum: value
        }));
      }
    } else {
      setUserForm((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
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
                <div className="FinancialAid__total-card-item">
                  <h3 className="FinancialAid__total-card-title">Цель пожертвования</h3>
                  <span className="FinancialAid__total-card-text">Финансовая поддержка фонда</span>
                </div>

                {/* Сумма */}
                { userForm.sum && (
                  <div className="FinancialAid__total-card-item">
                    <h3 className="FinancialAid__total-card-title">Сумма</h3>
                    <span className="FinancialAid__total-card-text">
                      {userForm.sum} ₽
                    </span>
                  </div>
                )}

                {/* Периодичность */}
                { userForm.period && (
                  <div className="FinancialAid__total-card-item">
                    <h3 className="FinancialAid__total-card-title">Периодичность</h3>
                    <span className="FinancialAid__total-card-text">
                      {userForm.period}
                    </span>
                  </div>
                )}

                {/* Личные данные */}
                

              </div>

              {/* Правая часть. Карточки для заполнения данных */}
              <div className="FinancialAid__user-info">

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
                            predefinedSums.includes(userForm.sum) || userForm.sum ? 'filled' : ''
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

                    <button className="FinancialAid__donations-btn">
                      Перейти к периодичности пожертвования
                    </button>
                  </div>

                  {activeSection === 'period' && (
                    <div className="">Секция с периодом</div>
                  )}

                  {activeSection === 'user-data' && (
                    <div className="">Секция с данными пользователя</div>
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