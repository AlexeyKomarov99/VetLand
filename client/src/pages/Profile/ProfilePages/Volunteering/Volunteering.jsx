import React, {useState, useContext} from 'react';

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

  // Состояние по открытию МО для составления анкеты для зачисления в штат волонтеров
  const [windowVolunteerApplication, setWindowVolunteerApplication] = useState(false);
  const openWindowVolunteerApplication = () => setWindowVolunteerApplication(true);
  const closeWindowVolunteerApplication = () => setWindowVolunteerApplication(false);

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
          </div>
        )}

      </div>
      
      {/* Модальное окно - "Создать анкету на волонтерство" */}
      <CreateVolunteerApplication
        windowVolunteerApplication={windowVolunteerApplication}
        closeWindowVolunteerApplication={closeWindowVolunteerApplication}
      />

    </div>
  )
}

export default Volunteering;