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
    paymentMethod: '',
    displayRatingDonations: false
  })
  const [currentSection, setCurrentSection] = useState('sum');
  const [error, setError] = useState({});

  // Переключение секций
  const toggleSection = (sectionName) => {
    console.log(sectionName);
    if(sectionName === 'sum') {
      setCurrentSection('sum');
    } else if(sectionName === 'frequency') {
      setCurrentSection('frequency');
    } else if(sectionName === 'user-data') {
      setCurrentSection('user-data');
    } else {
      setCurrentSection('payment-method');
    }
  }

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
                />}
              {currentSection === 'frequency' && 
                <DonationFrequency
                  setCurrentSection={setCurrentSection}
                  userDonationRequest={userDonationRequest}
                  setUserDonationRequest={setUserDonationRequest}
                />}
              {currentSection === 'user-data' && 
                <DonationUserData 
                  userDonationRequest={userDonationRequest}
                  error={error}
                  setCurrentSection={setCurrentSection}
                  setUserDonationRequest={setUserDonationRequest}
                  setError={setError}
                />}
              {currentSection === 'payment-method' && 
                <PaymentMethod
                  userDonationRequest={userDonationRequest}
                  setUserDonationRequest={setUserDonationRequest}
                  setCurrentSection={setCurrentSection}
                  setError={setError}
                />}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HelpAnimals