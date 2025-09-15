import React, {useState} from 'react';
//===== assets =====//
import './HowTakeHome.scss';
//===== components =====//
import AnimalsBackground from '../../components/HowTakeHome/AnimalsBackground/AnimalsBackground';
import HowTakeHomeHeader from '../../components/HowTakeHome/HowTakeHomeHeader/HowTakeHomeHeader';
import ButtonGroup from '../../components/HowTakeHome/ButtonGroup/ButtonGroup';
import ContactInfo from '../../components/HowTakeHome/ContactInfo/ContactInfo';
import OwnerQuestionnaire from '../../components/HowTakeHome/OwnerQuestionnaire/OwnerQuestionnaire';
//===== utils =====//
import formatPhoneNumber from '../../utils/formatPhoneNumber';
//===== api =====//
import { useSubmitAppAdoptAnimalMutation } from '../../store/api/publicApi';

const HowTakeHome = () => {
  
  const [activeSection, setActiveSection] = useState('contact-info');
  const [contactInfoStatus, setContactInfoStatus] = useState(false);
  const [ownerQuestionnaireStatus, setOwnerQuestionnaireStatus] = useState(false);
  const [contactInformation, setContactInformation] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    age: '',
    region: ''
  });  
  const [ownerQuestionnaire, setOwnerQuestionnaire] = useState({ 
    fullAddress: '',
    profileSocialNetwork: '',
    typeAndNameAnimalYouLiked: '',
    doYouHavePet: '',
    yourAttitudeTowardsCastrationSterilization: '',
    whoWillLiveWithYou: '',
    whoWillStayWithPetInCaseSeparation: '',
    petCareDuringBusinessTrips: '',
    reasonForRefusingLiveTogetherWithAnimal: '',
    consentForFeedbackFromShelter: '',
    howDidYouHearAboutOurFoundation: ''
  })
  const [error, setError] = useState({});
  const [submitAppAdoptAnimal, { isLoading }] = useSubmitAppAdoptAnimalMutation(); // Добавляем мутацию

  // Функция сброса всех состояний формы
  const resetForm = () => {
    setContactInformation({
      name: '',
      surname: '',
      phone: '',
      email: '',
      age: '',
      region: ''
    });
    
    setOwnerQuestionnaire({ 
      fullAddress: '',
      profileSocialNetwork: '',
      typeAndNameAnimalYouLiked: '',
      doYouHavePet: '',
      yourAttitudeTowardsCastrationSterilization: '',
      whoWillLiveWithYou: '',
      whoWillStayWithPetInCaseSeparation: '',
      petCareDuringBusinessTrips: '',
      reasonForRefusingLiveTogetherWithAnimal: '',
      consentForFeedbackFromShelter: '',
      howDidYouHearAboutOurFoundation: ''
    });
    
    setError({});
    setActiveSection('contact-info');
    setContactInfoStatus(false);
    setOwnerQuestionnaireStatus(false);
  };

  // Функция валидации
  const validateInputFilled = () => {
    const newError = {};

    if(!contactInformation.name.trim()) {
      newError.name = 'Укажите имя'
    }

    if(!contactInformation.surname.trim()) {
      newError.surname = 'Укажите фамилию'
    }

    // Проверяем, что телефон содержит 18 символов (полный формат)
    if(!contactInformation.phone.trim() || contactInformation.phone.length !== 18) {
      newError.phone = 'Некорректный формат телефона'
    }

    if(!contactInformation.email.trim()) {
      newError.email = 'Укажите почту'
    }

    if(!contactInformation.age.trim()) {
      newError.age = 'Укажите возраст'
    }

    console.log(newError);
    setError(newError);
    return Object.keys(newError).length === 0;

  }

  // Функция переключения состояния активной секции
  const toggleActiveSection = (sectionName) => {
    setActiveSection((prevState) => {
      if (sectionName === 'contact-info' && prevState !== 'contact-info') {
        setContactInfoStatus(false);
        setOwnerQuestionnaireStatus(false);
      } else if (sectionName === 'owner-questionnaire' && prevState !== 'owner-questionnaire') {
        if (!validateInputFilled()) {
          return prevState;  
        } else {
          setContactInfoStatus(true);
          setOwnerQuestionnaireStatus(false);
          console.log("Значение объекта:", contactInformation);
          console.log('Значение объекта 2:', ownerQuestionnaire);
        }
      }
      
      return sectionName;
    });
  }

  // Обработчик получения значений с полей вводов
  const handleChangeContactInfo = (event) => {
    const {name, value} = event.target;
    
    let formattedValue = value;

    // Применяем маску только для поля телефона
    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
    }

    setContactInformation((prevState) => ({
      ...prevState,
      [name]: formattedValue
    }))

    // Изменение состояния ошибок
    setError((prevState) => ({
      ...prevState,
      [name]: ''
    }))
  }

  const handleChangeRegionInfo = (regionName) => {
    setContactInformation((prevState) => ({
      ...prevState,
      region: regionName
    }))
  }
  
  const handleSubmitAdoptionForm = async (userAnswers) => {
    try {

      const questionnaireData = {
        fullAddress: userAnswers[0] || '',
        profileSocialNetwork: userAnswers[1] || '',
        typeAndNameAnimalYouLiked: userAnswers[2] || '',
        doYouHavePet: userAnswers[3] || '',
        yourAttitudeTowardsCastrationSterilization: userAnswers[4] || '',
        whoWillLiveWithYou: userAnswers[5] || '',
        whoWillStayWithPetInCaseSeparation: userAnswers[6] || '',
        petCareDuringBusinessTrips: userAnswers[7] || '',
        reasonForRefusingLiveTogetherWithAnimal: userAnswers[8] || '',
        consentForFeedbackFromShelter: userAnswers[9] || '',
        howDidYouHearAboutOurFoundation: userAnswers[10] || ''
      };

      const formData = {
        ...contactInformation,
        ...questionnaireData
      };

      // Используем RTK Query мутацию
      const result = await submitAppAdoptAnimal(formData).unwrap();
      console.log('Анкета отправлена:', result);
      alert('Анкета успешно отправлена!');

      // Сбрасываем форму после успешной отправки
      resetForm();
      
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке анкеты');
    }
  };

  return (
    <div className="HowTakeHome">

      <AnimalsBackground />
      <HowTakeHomeHeader />
      <ButtonGroup 
        activeSection={activeSection}
        toggleActiveSection={toggleActiveSection}
        contactInfoStatus={contactInfoStatus}
        ownerQuestionnaireStatus={ownerQuestionnaireStatus}
      />

      {activeSection === 'contact-info' && 
        <ContactInfo
          contactInformation={contactInformation}
          setContactInformation={setContactInformation}
          toggleActiveSection={toggleActiveSection}
          handleChangeContactInfo={handleChangeContactInfo}
          handleChangeRegionInfo={handleChangeRegionInfo}
          error={error}
          setError={setError}
        />
      }

      {activeSection === 'owner-questionnaire' &&
        <OwnerQuestionnaire
          ownerQuestionnaire={ownerQuestionnaire}
          setOwnerQuestionnaire={setOwnerQuestionnaire}
          contactInformation={contactInformation}
          toggleActiveSection={toggleActiveSection}
          handleSubmitAdoptionForm={handleSubmitAdoptionForm}
          resetForm={resetForm}
        />
      }

    </div>
  )
}

export default HowTakeHome;