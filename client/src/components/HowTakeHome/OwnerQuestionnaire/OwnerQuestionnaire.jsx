import React from 'react';
//===== assets =====//
import './OwnerQuestionnaire.scss';
import { LuPencilLine as PenIcon } from "react-icons/lu";
//===== components =====//
import VirtualAssistant from '../VirtualAssistant/VirtualAssistant';

const OwnerQuestionnaire = ({
  ownerQuestionnaire,
  setOwnerQuestionnaire,
  contactInformation,
  toggleActiveSection,
  handleSubmitAdoptionForm,
  resetForm
}) => {
  return (
    <section className="OwnerQuestionnaire">
      <div className="OwnerQuestionnaire__wrapper">
        <div className="OwnerQuestionnaire__container">
          <div className="OwnerQuestionnaire__content">

            <div className="OwnerQuestionnaire__header-info">
              <div className="OwnerQuestionnaire__contact-info-group">
                <span className="OwnerQuestionnaire__name">{contactInformation.name} {contactInformation.surname}, {contactInformation.age}</span>
                <span className="OwnerQuestionnaire__phone">{contactInformation.phone}</span>
                <span className="OwnerQuestionnaire__email">{contactInformation.email}</span>
                <span className="OwnerQuestionnaire__region">{contactInformation.region}</span>
                <div 
                  className="OwnerQuestionnaire__content-edit"
                  onClick={() => toggleActiveSection('contact-info')}
                >
                  <PenIcon className='icon-pen' />
                  <span className="text">Редактировать</span>
                </div>
              </div>
              <div className="OwnerQuestionnaire__text">
                Мы пристраиваем своих подопечных только в Москве и Санкт-Петербурге. Все животные передаются новым хозяевам после оформления договора ответственного содержания
              </div>
            </div>

            <VirtualAssistant 
              ownerQuestionnaire={ownerQuestionnaire}
              setOwnerQuestionnaire={setOwnerQuestionnaire}
              handleSubmitAdoptionForm={handleSubmitAdoptionForm}
              resetForm={resetForm}
            />

          </div>
        </div>
      </div>
    </section>
  )
}

export default OwnerQuestionnaire;