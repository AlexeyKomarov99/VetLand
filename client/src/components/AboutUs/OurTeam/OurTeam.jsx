import React from 'react';
//===== assets =====//
import './OurTeam.scss';
import {employees} from './data';

const OurTeam = () => {
  return (
    <section className="OurTeam">
      <div className="OurTeam__wrapper">
        <div className="OurTeam__container">
          <div className="OurTeam__content">

            <div className="OurTeam__header">
              <h2 className="OurTeam__header-title">Команда Vetland Adoption</h2>
              <div className="OurTeam__header-descr">
                Наша команда делает всё возможное, чтобы дать животным шанс стать 
                домашними. Мы ищем единомышленников — людей, для которых любовь к 
                животным и помощь им — не пустые слова. Которые, как и мы, мечтают, 
                чтобы у каждого питомца появился свой человек.
              </div>
            </div>

            <div className="OurTeam__content-cards">
              {employees.map((card) => (
                <article 
                  key={card.id}
                  className="OurTeam__card-item"
                >
                  <img 
                    src={card.img} 
                    alt={card.img} 
                    className="OurTeam__card-img" 
                  />
                  <div className="OurTeam__card-info">
                    <div className="OurTeam__info-full-name">{card.fullName}</div>
                    <div className="OurTeam__info-descr">{card.position}</div>
                  </div>
                </article>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam;