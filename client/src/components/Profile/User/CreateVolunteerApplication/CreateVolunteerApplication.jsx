import React from 'react';
import Modal from 'react-modal';

//===== Ресурсы =====//
import './CreateVolunteerApplication.scss';

//===== API =====//

const CreateVolunteerApplication = ({createVolunteeringApp, handleCreateAppChange, windowVolunteerApplication, closeWindowVolunteerApplication}) => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Работа функции
  }

  return (
    <Modal 
      className='CreateVolunteerApplication Modal'
      overlayClassName='CreateVolunteerApplication__overlay'
      isOpen={windowVolunteerApplication}
      onRequestClose={closeWindowVolunteerApplication}
    >
      <form 
        // onSubmit={} 
        className="CreateVolunteerApplication__form"
      >
        <div className="CreateVolunteerApplication__header">
          <h3 className="CreateVolunteerApplication__header-title">Формирование заявки на волонтерство</h3>
        </div>

        <div className="CreateVolunteerApplication__body">
          <textarea 
            className="CreateVolunteerApplication__textarea textarea"
            name="descriptionApplication"
            value={createVolunteeringApp.descriptionApplication}
            onChange={handleCreateAppChange}
            placeholder='Чем Вы можете быть полезны приюту? Напишите короткое заявление ...'
          >

            </textarea>
        </div>
        
        <div className="CreateVolunteerApplication__footer">
          <button 
            className="CreateVolunteerApplication__btn-close button"
            onClick={() => closeWindowVolunteerApplication()}
          >Закрыть окно</button>
          <button className="CreateVolunteerApplication__btn-send-app button">Отправить заявку</button>
        </div>

      </form>

    </Modal>
  )
}

export default CreateVolunteerApplication;