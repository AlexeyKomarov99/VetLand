import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
//===== assets =====//
import './HelpAnimals.scss';
//===== components =====//
import InternalNavbar from '../../components/UI/InternalNavbar/InternalNavbar';
import DonationAmount from '../../components/HelpAnimals/DonationAmount/DonationAmount';
import DonationFrequency from '../../components/HelpAnimals/DonationFrequency/DonationFrequency';
import DonationUserData from '../../components/HelpAnimals/DonationUserData/DonationUserData';
import DonationStatus from '../../components/HelpAnimals/DonationStatus/DonationStatus';
import DonationInfoBoard from '../../components/HelpAnimals/DonationInfoBoard/DonationInfoBoard';
import PaymentMethod from '../../components/HelpAnimals/PaymentMethod/PaymentMethod';

const HelpAnimals = () => {

  const location = useLocation();
  const {donationForm} = location.state ? location.state : {};
  const [userDonationRequest, setUserDonationRequest] = useState({
    donationPurpose: donationForm ? donationForm?.donationPurpose : 'Финансовая поддержка фонда',
    userName: donationForm ? donationForm?.userName : '',
    phone: donationForm ? donationForm?.phone : '',
    email: donationForm ? donationForm?.email : '',
    frequencyDonations: 'Ежемесячно',
    donationAmount: donationForm ? donationForm?.donationAmount : '1000',
    paymentMethod: ''
  })

  const [currentSection, setCurrentSection] = useState('sum');
  const [amountStatus, setAmountStatus] = useState(false);
  const [frequencyStatus, setFrequencyStatus] = useState(false);
  const [userDataStatus, setUserDataStatus] = useState(false);
  const [paymentMethodStatus, setPaymentMethodStatus] = useState(false);

  // Переключение секций
  const toggleSection = (sectionName) => {
    console.log(sectionName);
    if(sectionName === 'sum') {
      setCurrentSection('sum');
      setAmountStatus(true);
      setFrequencyStatus(false);
      setUserDataStatus(false);
      setPaymentMethodStatus(false);
    } else if(sectionName === 'frequency') {
      setCurrentSection('frequency');
      setAmountStatus(false);
      setFrequencyStatus(true);
      setUserDataStatus(false);
      setPaymentMethodStatus(false);
    } else if(sectionName === 'user-data') {
      setCurrentSection('user-data');
      setAmountStatus(false);
      setFrequencyStatus(false);
      setUserDataStatus(true);
      setPaymentMethodStatus(false);
    } else {
      setCurrentSection('payment-method');
      setAmountStatus(false);
      setFrequencyStatus(false);
      setUserDataStatus(false);
      setPaymentMethodStatus(true);
    }
  }

  console.log(donationForm);

  return (
    <div className='HelpAnimals'>
      <InternalNavbar />
      <div className="HelpAnimals__wrapper">
        <div className="HelpAnimals__container">
          <div className="HelpAnimals__content">
            <div className="HelpAnimals__content-left">
              <DonationInfoBoard 
                userDonationRequest={userDonationRequest}
              />
            </div>
            <div className="HelpAnimals__content-right">
              <DonationStatus
                userDonationRequest={userDonationRequest}
                currentSection={currentSection}
                toggleSection={toggleSection}
              />
              {currentSection === 'sum' && 
                <DonationAmount 
                  userDonationRequest={userDonationRequest}
                  setUserDonationRequest={setUserDonationRequest}
                  setCurrentSection={setCurrentSection}
                  setAmountStatus={setAmountStatus}
                />}
              {currentSection === 'frequency' && 
                <DonationFrequency
                  setAmountStatus={setAmountStatus}
                  setCurrentSection={setCurrentSection}
                  setUserDataStatus={setUserDataStatus}
                  userDonationRequest={userDonationRequest}
                  setUserDonationRequest={setUserDonationRequest}
                />}
              {currentSection === 'user-data' && 
                <DonationUserData 
                />}
              {currentSection === 'payment-method' && 
                <PaymentMethod 
                />}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HelpAnimals