import React, {useState, useEffect, useContext} from 'react';

//===== Ресурсы =====//
import './Volunteering.scss';

//===== Компоненты =====//
import VolunteeringHelp from '../../../../components/Profile/User/VolunteeringHelp/VolunteeringHelp';
import CreateVolunteerApplication from '../../../../components/Profile/User/CreateVolunteerApplication/CreateVolunteerApplication';

//===== Контекст =====//
import {AuthContext} from '../../../../contexts/AuthContext';

const Volunteering = () => {

  // Данные о пользователе полученные после авторизации
  const {user} = useContext(AuthContext);

  // Информация по анкете на волонтерство
  const [volunteeringApplicationInfo, setVolunteeringApplicationInfo] = useState({});

  // Создание заявки на волонтерство
  const [createVolunteeringApp, setCreateVolunteeringApp] = useState({
    user_id: user ? user.user_id : 'Пользователь не определен',
    descriptionApplication: '',
    sendingRequestStatus: false
  });

  const handleCreateAppChange = (event) => {
    const {name, value} = event.targer;
    setCreateVolunteeringApp((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  // Состояние по открытию МО для составления анкеты для зачисления в штат волонтеров
  const [windowVolunteerApplication, setWindowVolunteerApplication] = useState(false);
  const openWindowVolunteerApplication = () => setWindowVolunteerApplication(true);
  const closeWindowVolunteerApplication = () => setWindowVolunteerApplication(false);

  const loadDataVolunteeringApplicationInfo = async() => {
    try {
      // const applicationInfo = await ...
      // if(Object.keys(applicationInfo)) {
      //   volunteeringApplicationInfo(applicationInfo);
      // } else {
      //   console.log('Ошибка!')
      // }
    } catch (error) {
      console.log('Ошибка получения информации об анкете на волонтерство', error);
    }
  }

  // Загрузка данных с сервера информации по заявке на волонтерство
  // useEffect(() => {

  // }, volunteeringApplicationInfo?.sendingRequest)


  return (
    <div className='Volunteering'>
      <h2 className="Volunteering__title">Волонтерство</h2>
      
      <div className="Volunteering__content">

        {user?.role === 'volunteer' ? (
          
          // Список животных на вашем попечительстве
          <VolunteeringHelp />

          // Список мероприятий
          

        ) : (
          // Раздел 1. Подать заявку на волонтерство
          <div className="Volunteering__content-item">
            <div className="Volunteering__content-chapter">Подать заявку на волонтерство</div>
            {
              createVolunteeringApp.sendingRequestStatus || volunteeringApplicationInfo?.sendingRequestStatus ? (
                <div className="Volunteering__content-descr-sending-request">Ваша заявка отправлена! Ваш запрос на волонтерство будет принят администрацией сайта в ближайшее время!</div>
              ) : (
              <div className="Volunteering__content-descr">
                <div className="Volunteering__content-text">
                  Готовы сделать мир лучше? Заполните нашу простую форму, чтобы стать частью команды волонтеров!
                </div>
                <div className="Volunteering__content-btn-wrapper">
                  <button 
                    className="Volunteering__content-submit-application button"
                    onClick={() => openWindowVolunteerApplication()}
                  >
                    Составить анкету
                  </button>
                </div>
              </div>
              )
            }
          </div>
        )}

      </div>
      
      {/* Модальное окно - "Создать анкету на волонтерство" */}
      <CreateVolunteerApplication
        createVolunteeringApp={createVolunteeringApp}
        handleCreateAppChange={handleCreateAppChange}
        windowVolunteerApplication={windowVolunteerApplication}
        closeWindowVolunteerApplication={closeWindowVolunteerApplication}
      />

    </div>
  )
}

export default Volunteering;