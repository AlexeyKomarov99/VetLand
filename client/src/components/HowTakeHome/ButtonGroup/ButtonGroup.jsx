import React from 'react';
//===== assets =====//
import './ButtonGroup.scss';
import { FaRegClock as ClockIcon} from "react-icons/fa6";
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa";

const ButtonGroup = ({
    activeSection,
    toggleActiveSection,
    contactInfoStatus,
    ownerQuestionnaireStatus
}) => {
  return (
    <section className="ButtonGroup">
        <div className="ButtonGroup__wrapper">
            <div className="ButtonGroup__container">
                <div className="ButtonGroup__content">
                    
                    <div className="ButtonGroup__section-questionnaire">

                        <div className="ButtonGroup__btn-group">
                        
                        <button 
                            className={`ButtonGroup__btn-item ${activeSection === 'contact-info' ? (contactInfoStatus ? 'success' : 'pending') : (contactInfoStatus ? 'success' : 'pending') }`}
                            onClick={() => toggleActiveSection('contact-info')}
                        >
                            <span style={{color: 'white'}} className="ButtonGroup__btn-descr">Контактная информация</span>
                            {contactInfoStatus ? <CheckCircleIcon className='checkcircle-icon' /> : ''}
                        </button>

                        <button 
                            className={`ButtonGroup__btn-item ${activeSection === 'owner-questionnaire' ? (ownerQuestionnaireStatus ? 'success' : 'pending') : ''}`}
                        >
                            <span className="ButtonGroup__btn-descr">Анкета будущего хозяина</span>
                            {ownerQuestionnaireStatus ? <CheckCircleIcon className='checkcircle-icon' /> : ''}
                        </button>

                        </div>
                        <div className="ButtonGroup__time-passage-group">
                        <ClockIcon className='icon' />
                        <span className="ButtonGroup__time-passage-text">Время прохождения: 5 мин</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ButtonGroup;