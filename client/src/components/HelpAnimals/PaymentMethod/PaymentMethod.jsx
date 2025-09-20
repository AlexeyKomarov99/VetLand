import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
//===== assets =====//
import './PaymentMethod.scss';

const PaymentMethod = ({
  userDonationRequest,
  setUserDonationRequest,
  setCurrentSection,
  setAmountStatus,
  setFrequencyStatus,
  setUserDataStatus,
  setPaymentMethodStatus,
  setError
}) => {
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);
  const navigate = useNavigate();

  const handlePaymentClick = (paymentMethod) => {
    setUserDonationRequest((prevState) => ({
      ...prevState,
      paymentMethod: paymentMethod
    }))

    setIsPaymentMethod(true);
  }

  const handleDonationRequest = () => {

    // Пока во время разработки будем переходить на главную
    // потом добавим реализуцию с платежной системой
    navigate('/');

    setUserDonationRequest({
      donationPurpose: 'Финансовая поддержка фонда',
      userName: '',
      phone: '',
      email: '',
      frequencyDonations: 'Ежемесячно',
      donationAmount: '1000',
      paymentMethod: '',
      displayRatingDonations: false
    });
    setCurrentSection('sum');
    setAmountStatus(false);
    setFrequencyStatus(false);
    setUserDataStatus(false);
    setPaymentMethodStatus(false);
    setError({});
  }

  return (
    <section className="PaymentMethod">
      <div className="PaymentMethod__content">

        <span 
          className={`PaymentMethod__payment-text ${userDonationRequest.paymentMethod === 'Банковской картой' ? 'active' : ''}`}
          onClick={() => handlePaymentClick('Банковской картой')}
        >
          Банковской картой
        </span>

        <button
          type='button'
          className={`PaymentMethod__btn ${!isPaymentMethod ? 'PaymentMethod__btn--disabled' : ''}`}
          onClick={handleDonationRequest}
        >
          <span className="PaymentMethod__btn-text">
            Пожертвовать
          </span>
        </button>

      </div>
    </section>
  )
}

export default PaymentMethod;