import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
//===== assets =====//
import './BecomeGuardian.scss';
import { sum, userInput } from './data';
import { CiHeart as HeartIcon } from "react-icons/ci";
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io";
//===== utils =====//
import formatPhoneNumber from '../../../utils/formatPhoneNumber';

const BecomeGuardian = ({
  animal
}) => {
  const [donationForm, setDonationForm] = useState({
    userName: '',
    phone: '',
    email: '',
    frequencyDonations: 'Ежемесячно',
    donationAmount: ''
  })
  const [isCustomAmount, setIsCustomAmount] = useState(false); // Добавляем состояние для отслеживания ручного ввода
  const [questionInfo, setQuestionInfo] = useState(false);
  const monthlyCareAmount = animal ? animal?.monthlyCareAmount : '0';
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setQuestionInfo(true);
  }

  const handleMouseLeave = () => {
    setQuestionInfo(false);
  }

  const handleChangeForm = (event) => {
    const {name, value} = event.target;
    let formattedValue = value;
    
    // Если пользователь начал вводить свою сумму, отмечаем это
    if (name === 'donationAmount' && value !== '') {
      setIsCustomAmount(true);
    }
    
    if (name === "phone") {
      formattedValue = formatPhoneNumber(value); // Форматируем телефон
    }

    setDonationForm((prevState) => ({
      ...prevState,
      [name]: formattedValue
    }))
  }

  const handleClickDonation = (amount) => {
    setDonationForm((prevState) => ({
      ...prevState,
      donationAmount: amount
    }))
    setIsCustomAmount(false); // Сбрасываем флаг ручного ввода при выборе кнопкой
  }

  // Очищаем поле ввода при клике на него, если ранее была выбрана кнопка
  const handleInputClick = () => {
    if (!isCustomAmount && donationForm.donationAmount !== '') {
      setDonationForm((prevState) => ({
        ...prevState,
        donationAmount: ''
      }));
      setIsCustomAmount(true);
    }
  }

  const isFormValid = () => {
    // Проверяем обязательные поля
    const requiredFields = ['userName', 'phone', 'email', 'donationAmount'];
    
    for (const field of requiredFields) {
      if (!donationForm[field] || donationForm[field].trim() === '') {
        return false;
      }
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donationForm.email)) {
      return false;
    }
    
    if (parseInt(donationForm.donationAmount) <= 0) {
      return false;
    }
    
    return true;
  };

  const handlePayment = () => {
    if (isFormValid()) {

      navigate('/help-us', {
        state: {
          donationForm: donationForm
        }
      })
    } else {
      alert('Заполните все обязательные поля');
    }
  };

  return (
    <section className="BecomeGuardian">
      <div className="BecomeGuardian__container">

        <div className="BecomeGuardian__content">

          <div className="BecomeGuardian__header">
            <span className="BecomeGuardian__title">Стать <br/>опекуном</span>
            <span 
              className="BecomeGuardian__question"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              ?
              {questionInfo && (
                  <div className="BecomeGuardian__question-mw">
                      <span className="BecomeGuardian__question-mw--text">
                        Опекун ежемесячно оказывает финансовую поддержку конкретному животному.
                        <br />
                        Мы не ограничиваем количество опекунов у&nbsp;питомцев вы можете помогать тому,
                        кто&nbsp;пришелся вам по&nbsp;душе
                      </span>
                  </div>
              )}
            </span>

          </div>

          <div className="BecomeGuardian__frequency-donations">
              <span className="BecomeGuardian__frequency-donations-title">1. Периодичность пожертвования</span>
              <div className="BecomeGuardian__frequency-item">
                <div className="BecomeGuardian__frequency-text">
                  Ежемесячно
                </div>
              </div>
          </div>

          <div className="BecomeGuardian__donation-amount">
              <span className="BecomeGuardian__donation-amount-title">2. Выберите размер пожертвования</span>
              <div className="BecomeGuardian__donation-group">
                {sum.map((sum) => (
                  <article
                    key={sum.id}
                    className={`BecomeGuardian__donation-item ${!isCustomAmount && donationForm.donationAmount === sum.amount ? 'active-input' : ''}`}
                    onClick={() => handleClickDonation(sum.amount)}
                  >
                    <div className="BecomeGuardian__donation-text">
                      {sum.amount} ₽
                    </div>
                  </article>
                ))}
                <article 
                    className={`BecomeGuardian__donation-item ${!isCustomAmount && donationForm.donationAmount === monthlyCareAmount ? 'active-input' : ''}`}
                    onClick={() => handleClickDonation(monthlyCareAmount)}
                >
                    <HeartIcon className='heart-icon' />
                    <span className="BecomeGuardian__donation-text">Вся сумма</span>
                </article>
              </div>
              <input 
                type="number" 
                className="BecomeGuardian__donation-input" 
                placeholder='Ваша сумма'
                name="donationAmount"
                value={donationForm.donationAmount}
                onChange={handleChangeForm}
                onClick={handleInputClick}
              />
          </div>
          
          <div className="BecomeGuardian__user-data">
            
            <div className="BecomeGuardian__user-data-header">
              <div className="BecomeGuardian__user-data-header-title">Ввести платежные данные</div>
              <ArrowDownIcon className='arrow-icon' />
            </div>
            
            <div className="BecomeGuardian__user-data-group">
              {userInput.map((data) => (
                <article 
                  key={data.id}
                  className="BecomeGuardian__user-data-item"
                >
                  <input 
                    type={data.type}
                    name={data.name}
                    value={donationForm[data.name]}
                    onChange={handleChangeForm}
                    className="BecomeGuardian__user-data-input" 
                    placeholder={data.placeholder}
                  />
                </article>
              ))}
            </div>

          </div>
          
          <button 
            className={`BecomeGuardian__btn-confirm ${!isFormValid() ? 'BecomeGuardian__btn-confirm--disabled' : ''}`}
            onClick={handlePayment}
            disabled={!isFormValid()}
          >
            Перейти к форме оплаты
          </button>
        </div>
        
      </div>
    </section>
  )
}

export default BecomeGuardian;