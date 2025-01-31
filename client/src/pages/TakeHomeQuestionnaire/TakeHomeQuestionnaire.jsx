import React, {useState} from 'react';

//===== Ресурсы =====//
import { FaRegClock as ClockIcon} from "react-icons/fa6";
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa";
import './TakeHomeQuestionnaire.scss';

const listContactInfo = [
  {id: 1, type: 'text', name: 'name', placeholder: 'Имя', error: 'Укажите имя' },
  {id: 2, type: 'text', name: 'surname', placeholder: 'Фамилия', error: 'Укажите фамилию' },
  {id: 3, type: 'text', name: 'phone', placeholder: 'Телефон', error: 'Некорректная форма телефона' },
  {id: 4, type: 'email', name: 'email', placeholder: 'Почта', error: 'Укажите почту' },
  {id: 5, type: 'text', name: 'age', placeholder: 'Возраст', error: 'Укажите возраст' },
]

const TakeHomeQuestionnaire = () => {
  
  const [activeSection, setActiveSection] = useState('contact-info');                      // Статус активной секции

  const [contactInfoStatus, setContactInfoStatus] = useState(false);               // Статус заполнения всех полей в секции "Контактная информ"
  const [ownerQuestionnaireStatus, setOwnerQuestionnaireStatus] = useState(false); // Статус -//= "Анкета будущего хозяина" 
  const [contactInformation, setContactInformation] = useState({                   // Контактная информация
    name: '',
    surname: '',
    phone: '',
    email: '',
    age: '',
  });
  const [ownerQuestionnaire, setOwnerQuestionnaire] = useState({                   // Заполненная анкета хозяина
    region: 'Москва и Моск. обл',
    fullAdress: '',
    profileSocialNetwork: '',
    pets: '',
    castration_sterilization: '',
    yourAnimal: '',
    helpAnimal: '',
    reasonLivingTogether: '',
    contactWithShelter: '',
    whoRecommendedShelter: '',
  })
  const [error, setError] = useState({});                                          // Состояние ошибок

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
    setContactInformation((prevState) => ({
      ...prevState,
      [name]: value
    }))

    // Изменение состояния ошибок
    setError((prevState) => ({
      ...prevState,
      [name]: ''
    }))
  }

  // Обработчик для смены региона
  const handleRegionClick = (region) => {
    setOwnerQuestionnaire((prevState) => ({
      ...prevState,
      region: region 
    }))
  }

  // Функция валидации
  const validateInputFilled = () => {
    const newError = {};

    if(!contactInformation.name.trim()) {
      newError.name = 'Укажите имя'
    }

    if(!contactInformation.surname.trim()) {
      newError.surname = 'Укажите фамилию'
    }

    if(!contactInformation.phone.trim()) {
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

  return (
    <div className="TakeHomeQuestionnaire">

      <div className="AnimalImage"></div>
      
      {/* Секция 1. Вступление */}
      <section className="Introduction">
        <div className="Introduction__wrapper">
          <div className="Introduction__container">
            <div className="Introduction__content">
              <div className="Introduction__content-title">Анкета будущего хозяина</div>
              <div className="Introduction__content-descr">
                <div className="Introduction__content-item">
                  У каждого животного, попавшего к нам, своя грустная история. Чтобы наши 
                  подопечные больше никогда не столкнулись с бедой, мы с максимальной тщательностью 
                  подходим к выбору хозяев для них. Мы будем задавать много вопросов, в том числе 
                  неудобных (и, возможно, не один раз). И просим отнестись к этому с терпением и пониманием.
                </div>
                <div className="Introduction__content-item">
                  Мы доверяем питомцев только тем, в ком абсолютно уверены, поэтому процесс 
                  собеседований и согласований может быть небыстрым. Если мы поймем, что пока 
                  вы не готовы стать хозяином, то будем вынуждены отказать вам. Мы стараемся менять 
                  отношение людей к животным и верим, что скоро ответственных владельцев станет больше!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция 2. Заполнение анкеты */}
      <section className="Questionnaire">
        <div className="Questionnaire__wrapper">
          <div className="Questionnaire__container">
            
            <div className="Questionnaire__content">
              
              {/* Статус заполнения анкет */}
              <div className="Questionnaire__section-questionnaire">
                <div className="Questionnaire__btn-group">
                  
                  <button 
                    className={`Questionnaire__btn-item ${activeSection === 'contact-info' ? (contactInfoStatus ? 'success' : 'pending') : (contactInfoStatus ? 'success' : 'pending') }`}
                    onClick={() => toggleActiveSection('contact-info')}
                  >
                    <span style={{color: 'white'}} className="Questionnaire__btn-descr">Контактная информация</span>
                    {contactInfoStatus ? <CheckCircleIcon className='checkcircle-icon' /> : ''}
                  </button>

                  <button 
                    className={`Questionnaire__btn-item ${activeSection === 'owner-questionnaire' ? (ownerQuestionnaireStatus ? 'success' : 'pending') : ''}`}
                  >
                    <span className="Questionnaire__btn-descr">Анкета будущего хозяина</span>
                    {ownerQuestionnaireStatus ? <CheckCircleIcon className='checkcircle-icon' /> : ''}
                  </button>

                </div>
                <div className="Questionnaire__time-passage-group">
                  <ClockIcon className='icon' />
                  <span className="Questionnaire__time-passage-text">Время прохождения: 5 мин</span>
                </div>
              </div>

              {/* Секция 1. Первичные данные о пользователе */}
              {activeSection === 'contact-info' && (

                <div className="Questionnaire__contact-info">
                  
                  <div className="Questionnaire__contact-info-group">

                    {
                      listContactInfo.map((card) => (
                        <div
                          key={card.id} 
                          className="Questionnaire__contact-info-item"
                        >
                          <input 
                            type={card.type}
                            className={`Questionnaire__contact-info-input ${error[card.name] ? 'error' : ''}`}
                            name={card.name}
                            value={contactInformation[card.name]}
                            onChange={handleChangeContactInfo}
                            placeholder={card.placeholder}
                          />
                          {error[card.name] && <span className="Questionnaire__contact-info-error">{error[card.name]}</span>}
                        </div>
                      ))
                    }

                  </div>

                  {/* Откуда вы? Регион проживания */}
                  <div className="Questionnaire__region">
                    <div className="Questionnaire__region-title">Откуда вы?</div>
                    <div className="Questionnaire__region-group">
                      <span 
                        className={`Questionnaire__region-item ${ownerQuestionnaire.region === 'Москва и Моск. обл' ? 'selected' : ''}`}
                        onClick={() => handleRegionClick('Москва и Моск. обл')}
                      >
                        Москва и Моск. обл
                      </span>
                      <span 
                        className={`Questionnaire__region-item ${ownerQuestionnaire.region === 'Санкт-Петербург и Ленинградская обл.' ? 'selected' : ''}`}
                        onClick={() => handleRegionClick('Санкт-Петербург и Ленинградская обл.')}
                      >
                        Санкт-Петербург и Ленинградская обл.
                      </span>
                      <span 
                        className={`Questionnaire__region-item ${ownerQuestionnaire.region === 'Другой город' ? 'selected' : ''}`}
                        onClick={() => handleRegionClick('Другой город')}
                      >
                        Другой город
                      </span>
                      <button 
                        className="Questionnaire__btn-filling-questionnaire Questionnaire__region-item"
                        onClick={() => toggleActiveSection('owner-questionnaire')}
                      >
                        Перейти к заполнению анкеты
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* Секция 2. */}
              {activeSection === 'owner-questionnaire' && (
                
                  
                <div className="">СЕКЦИЯ 2</div>

                
              )}

            </div>

            
          
          </div>
        </div>
      </section>

    </div>
  )
}

export default TakeHomeQuestionnaire