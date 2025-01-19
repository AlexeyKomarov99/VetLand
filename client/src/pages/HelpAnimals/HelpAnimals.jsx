import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//===== Ресурсы =====//
import { MdSubdirectoryArrowRight as ArrowRightBottomIcon } from "react-icons/md";
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa";
import './HelpAnimals.scss';

const HelpAnimals = () => {
  
  const [activeSection, setActiveSection] = useState('sum');
  const [sumSectionStatus, setSumSectionStatus] = useState(false);
  const [periodicitySection, setPeriodicitySection] = useState(false);
  const [userDataSection, setUserDataSection] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);

  const toggleActiveSection = (sectionName) => {
    setActiveSection((prevState) => {
      if (sectionName === 'sum' && prevState !== 'sum') {
        setActiveSection('sum');
      } else if (sectionName === 'period' && prevState != 'period') {
        setActiveSection('period');
      } else if (sectionName === 'user-data' && prevState != 'user-data') {
        setActiveSection('user-data');
      } else if (sectionName === 'payment-method' && prevState != 'payment-method') {
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
                <div className="FinancialAid__total-card-item">
                  <h3 className="FinancialAid__total-card-title"></h3>
                  <span className="FinancialAid__total-card-text">
                    {userForm.sum}
                  </span>
                </div>
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

                  {activeSection === 'sum' && (
                    <div className="">Секция с суммой</div>
                  )}

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