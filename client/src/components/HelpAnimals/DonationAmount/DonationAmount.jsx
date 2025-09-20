import React from 'react';
//===== assets =====//
import './DonationAmount.scss';
import { amounts } from './data';

const DonationAmount = ({
  userDonationRequest,
  setUserDonationRequest,
  setCurrentSection,
}) => {

  const handleClickAmount = (amount) => {
    setUserDonationRequest((prevState) => ({
      ...prevState,
      donationAmount: amount.toString()
    }))
  }

  const handleChangeAmount = (event) => {
    const value = event.target.value;

    // Разрешаем только цифры и пустую строку
    if (value === '' || /^\d+$/.test(value)) {
      setUserDonationRequest((prevState) => ({
        ...prevState,
        donationAmount: value
      }))
    }
  }

  const handleInputClick = (e) => {
    // Останавливаем всплытие события, чтобы не сработал handleClickAmount
    e.stopPropagation();
  }

  const nextSection = () => {
    if (Number(userDonationRequest.donationAmount) > 0 && userDonationRequest.donationAmount.trim() !== '') {
      setCurrentSection('frequency');
    } else {
      return;
    }
  }

  return (
    <section className="DonationAmount">
      <div className="DonationAmount__content">

        <div className="DonationAmount__amounts-group">
          {amounts.map((amount) => (
            <article
              key={amount.id} 
              className="DonationAmount__amount-item"
            >
              <span 
                className={`DonationAmount__amount-text ${userDonationRequest?.donationAmount === amount.amount.toString() ? 'active' : ''}`}
                onClick={() => handleClickAmount(amount.amount)}
              >
                {amount.amount}
              </span>
              <span className="DonationAmount__amount-descr">{amount.descr}</span>
            </article>
          ))}
          <article 
            className="DonationAmount__amount-item"
            onClick={handleInputClick}
          >
            <input 
              type="text" 
              className="DonationAmount__amount-input"
              value={userDonationRequest.donationAmount}
              onChange={handleChangeAmount}
              onClick={handleInputClick}
              placeholder='Введите свою сумму'
              inputMode="numeric"
            />
            <span className="DonationAmount__amount-descr">Введите свою сумму</span>
          </article>
        </div>

        <div 
          className="DonationAmount__btn"
          onClick={nextSection}
        >
          <span className="DonationAmount__btn-text">
            Перейти к периодичности пожертвования
          </span>
        </div>

      </div>
    </section>
  )
}

export default DonationAmount;