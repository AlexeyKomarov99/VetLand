import React from 'react';
import './DonationFrequency.scss';
import { frequencyList } from './data';

const DonationFrequency = ({
  setCurrentSection,
  setUserDataStatus,
  userDonationRequest,
  setUserDonationRequest,
  setAmountStatus
}) => {

  const handleClickFrequency = (frequency) => {
      setUserDonationRequest((prevState) => ({
      ...prevState,
      frequencyDonations: frequency
    }))
  }

  const nextSection = () => {
    if (Number(userDonationRequest.donationAmount) > 0 && userDonationRequest.donationAmount.trim() !== '') {
      setCurrentSection('user-data');
      setUserDataStatus(true);
      setAmountStatus(false);
    } else {
      return;
    }
  }

  return (
    <section className="DonationFrequency">
      <div className="DonationFrequency__content">
        <div className="DonationFrequency__frequency-group">
          {frequencyList.map((frequency) => (
            <article 
              key={frequency.id}
              className="DonationFrequency__frequency-item"
              onClick={() => handleClickFrequency(frequency.frequency)}
            >
              <span className={`DonationFrequency__frequency-text ${userDonationRequest.frequencyDonations === frequency.frequency ? 'active' : ''}`}>{frequency.frequency}</span>
            </article>
          ))}
        </div>

        <div 
          className="DonationFrequency__btn"
          onClick={nextSection}
        >
          <span className="DonationFrequency__btn-text">
            Перейти к заполнению данных
          </span>
        </div>
        
        <div className="DonationFrequency__text-descr">
          При выборе ежемесячного пожертвования указанная вами сумма будет автоматически списываться каждый месяц. Отменить регулярный платеж можно в любой момент, перейдя по <a className='DonationFrequency__text-descr link' href='https://vet.land/cancel-payment' target="_blank">ссылке</a>.
        </div>

      </div>
    </section>
  )
}

export default DonationFrequency;