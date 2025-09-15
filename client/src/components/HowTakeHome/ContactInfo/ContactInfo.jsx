import React, {useState} from 'react';
//===== assets =====//
import './ContactInfo.scss';
//===== components =====//
import { listContactInfo, listRegionInfo } from './data';

const ContactInfo = ({
  contactInformation,
  handleChangeContactInfo,
  handleChangeRegionInfo,
  toggleActiveSection,
  error,
}) => {

  return (
    <section className="ContactInfo">
      <div className="ContactInfo__wrapper">
        <div className="ContactInfo__container">
          <div className="ContactInfo__content">
            
            <div className="ContactInfo__contact-info">
                  
              <div className="ContactInfo__contact-info-group">

                {
                  listContactInfo.map((card) => (
                    <div
                      key={card.id} 
                      className="ContactInfo__contact-info-item"
                    >
                      <input 
                        type={card.type}
                        className={`ContactInfo__contact-info-input ${error[card.name] ? 'error' : ''}`}
                        name={card.name}
                        value={contactInformation[card.name]}
                        onChange={handleChangeContactInfo}
                        placeholder={card.placeholder}
                      />
                      {error[card.name] && <span className="ContactInfo__contact-info-error">{error[card.name]}</span>}
                    </div>
                  ))
                }

              </div>

              <div className="ContactInfo__region">
                <div className="ContactInfo__region-title">Откуда вы?</div>
                <div className="ContactInfo__region-group">
                  {listRegionInfo.map((region) => (
                    <div
                      key={region.id}
                      className={`ContactInfo__region-item ${contactInformation.region === region.placeholder ? 'selected' : ''}`}
                      onClick={() => handleChangeRegionInfo(region.placeholder)}
                    >
                      <span
                        value={contactInformation[region.name]}
                      >
                        {region.placeholder}
                      </span>
                    </div>
                  ))}
                  <button 
                    className="ContactInfo__btn-filling-questionnaire ContactInfo__region-item"
                    onClick={() => toggleActiveSection('owner-questionnaire')}
                  >
                    Перейти к заполнению анкеты
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo