import React, {useState, useEffect, useCallback} from 'react';
//===== assets =====//
import './DonationUserData.scss';
import { userDataInputs } from './data';
import { IoCheckmarkOutline as CheckMarkIcon } from "react-icons/io5";
//===== utils =====//
import formatPhoneNumber from '../../../utils/formatPhoneNumber';

const DonationUserData = ({
  userDonationRequest,
  error,
  setCurrentSection,
  setUserDataStatus,
  setPaymentMethodStatus,
  setUserDonationRequest,
  setError
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = useCallback(() => {

    const newError = {};

    // Валидация имени
    if(!userDonationRequest.userName.trim()) {
      newError.userName = 'Укажите имя';
    }

    // Валидация электронной почты
    if(!userDonationRequest.email.trim()) {
      newError.email = 'Укажите почту';
    } else if (!/\S+@\S+\.\S+/.test(userDonationRequest.email)) {
      newError.email = 'Некорректный формат электронной почты.';
    }

    // Валидация телефона
    if(!userDonationRequest.phone.trim()) {
      newError.phone = 'Укажите телефон';
    }

    setError(newError);
    const isValid = Object.keys(newError).length === 0;
    setIsFormValid(isValid);
    
    return isValid;

  }, [userDonationRequest, setError])

  const handleChangeUserData = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value); // Форматируем телефон
    }

    setUserDonationRequest({
      ...userDonationRequest,
      [name]: formattedValue,
    });

    if (error[name]) {
      setError(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  const handleClickDisplayRankink = () => {
    setUserDonationRequest((prevState) => ({
      ...prevState,
      displayRatingDonations: !userDonationRequest.displayRatingDonations
    }))
  }

  const nextSection = () => {
    if (validateForm()) {
      setCurrentSection('payment-method');
      setUserDataStatus(false);
      setPaymentMethodStatus(true);
    }
  }

  useEffect(() => {
    validateForm();
  }, [userDonationRequest, validateForm])

  return (
    <section className="DonationUserData">
      <div className="DonationUserData__content">
        
        <div className="DonationUserData__user-data-group">
          {userDataInputs.map((input) => (
            <article 
              key={input.id}
              className={`DonationUserData__user-data-item`}
            >
              <input 
                key={input.id}
                type={input.type}
                className={`DonationUserData__user-data-text ${userDonationRequest[input.name] !== '' ? 'text-decor' : ''}`} 
                name={input.name}
                value={userDonationRequest[input.name] || ''}
                onChange={handleChangeUserData}
                placeholder={input.placeholder}
                required={input.required}
              />
            </article>
          ))}
        </div>

        <button
          type='button'
          className={`DonationUserData__btn ${!isFormValid ? 'DonationUserData__btn--disabled' : ''}`}
          onClick={nextSection}
          disabled={!isFormValid}
        >
          <span className="DonationUserData__btn-text">
            Перейти к способу оплаты
          </span>
        </button>

        <label className="DonationUserData__label-checkbox">
          <input 
            type="checkbox" 
            className="DonationUserData__checkbox" 
            checked={userDonationRequest.displayRatingDonations}
            onChange={handleClickDisplayRankink}  
          />
          <div className="checkbox-box">
            {userDonationRequest.displayRatingDonations && <CheckMarkIcon style={{color: 'white'}} />}
          </div>
          <span className="DonationUserData__checkbox-descr">
            Я согласен / согласна отображать мою фамилию и имя в рейтинге
          </span>
        </label>

      </div>
    </section>
  )
}

export default DonationUserData;