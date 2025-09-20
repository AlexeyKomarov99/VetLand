import React from 'react';
//===== assets =====//
import './HowTakeHome.scss';
//===== components =====//
import { Link } from 'react-router-dom';
import {cardsContent} from './data';

const HowTakeHome = ({
  id
}) => {
  return (
    <section 
      id={id}
      className="HowTakeHome"
      data-header-theme="dark"
    >
      <div className="HowTakeHome__wrapper">
        <div className="HowTakeHome__container">
          <div className="HowTakeHome__content">

            <div className="TakeHome__header">
              <div className="TakeHome__title">
                Как <br /> забрать <br /> <span className='TakeHome__title-background'>домой?</span>
              </div>
              <div className="TakeHome__descr">
                Мы делаем всё, что в наших <br /> силах, чтобы животные стали <br /> домашними
              </div>
            </div>

            <div className="TakeHome__cards-group">
              {cardsContent.map((card) => (
                card.link ? (
                  <Link 
                    key={card.id}
                    to={card.link}
                    className="TakeHome__card-item TakeHome__card-item--link"
                  >
                    <div className="TakeHome__card-header">
                      <div className="TakeHome__card-header-number">{card.number}</div>
                      <div className="TakeHome__card-header-descr">{card.title}</div>
                    </div>
                    <div className="TakeHome__card-body">
                      <div className="TakeHome__card-body-descr">{card.descr}</div>
                      <div className="TakeHome__card-body-arrow">
                        {card.icon}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <article 
                    key={card.id}
                    className="TakeHome__card-item"
                  >
                    <div className="TakeHome__card-header">
                      <div className="TakeHome__card-header-number">{card.number}</div>
                      <div className="TakeHome__card-header-descr">{card.title}</div>
                    </div>
                    <div className="TakeHome__card-body">
                      <div className="TakeHome__card-body-descr">{card.descr}</div>
                      <div className="TakeHome__card-body-arrow">
                        {card.icon}
                      </div>
                    </div>
                  </article>
                )
              ))}
            </div>

            <Link 
              className="TakeHome__take-home-animal"
              to='/animals'
            >
              <div className="TakeHome__take-home-animal-descr">
                Выбрать настоящего друга
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none" className='icon'>
                <path d="M76.0006 75.9996H1.68555V65.4692H58.7734L1.68555 9.97773L10.0252 1.68457L65.3841 57.0973V1.68457H76.0006V75.9996Z" stroke="black" strokeWidth="2" strokeLinejoin="round"></path>
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HowTakeHome;