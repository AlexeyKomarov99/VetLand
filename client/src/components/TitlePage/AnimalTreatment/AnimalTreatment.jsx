import React from 'react';
//===== assets =====//
import './AnimalTreatment.scss';
//===== components =====//
import { Link } from 'react-router-dom';
import { BsArrowRightCircle as ArrowRightCircleIcon } from "react-icons/bs";
import PhotoDog from '../../../assets/dog.jpg';

const animalInfoTest = [
  {id: 1, name: 'Мухтар', age: 'Почти 7'},
  {id: 2, name: 'Мухтар', age: 'Почти 7'},
  {id: 3, name: 'Мухтар', age: 'Почти 7'},
  {id: 4, name: 'Мухтар', age: 'Почти 7'}
]

const AnimalTreatment = ({
  id
}) => {
  return (
    <section 
      id={id}
      className="AnimalTreatment"
      data-header-theme="dark"
    >
      <div className="AnimalTreatment__wrapper">
        <div className="AnimalTreatment__container">
          <div className="AnimalTreatment__content">
            <div className="AnimalTreatment__title">На лечении</div>
            <div className="AnimalTreatment__description">
              <div className="AnimalTreatment__cards-group">
                {animalInfoTest.map((animal) => (
                  <article 
                    key={animal.id}
                    className="AnimalTreatment__animal-item"
                  >
                    <img src={PhotoDog} alt="" className="ReadyGoHome__animal-img" />
                    
                    <div className="AnimalTreatment__animal-descr">
                      <div className="AnimalTreatment__name">{animal.name}</div>

                      <div className="AnimalTreatment__age">
                        <div className="AnimalTreatment__age-group">
                          <div className="AnimalTreatment__age-title">Возраст:</div>
                          <div className="AnimalTreatment__age-number">{animal.age}</div>
                        </div>
                        <div className="AnimalTreatment__icon-wrapper">
                          <ArrowRightCircleIcon className='icon' />
                        </div>
                      </div>

                      <div className="AnimalTreatment__button-group">
                        <button className="AnimalTreatment__take-animal button">Забрать</button>
                        <button className="AnimalTreatment__help-animal button">Помочь</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              <div className="AnimalTreatment__yet">
                <div className="AnimalTreatment__yet-text">И еще</div>
                <div className="AnimalTreatment__yet-number">14</div>

                <div className="AnimalTreatment__yet-group">
                  <div className="AnimalTreatment__yet-descr">Находятся в клинике <br />и ждут поддержки</div>
                  <Link to='/help-animals' className='AnimalTreatment__Link'>
                    <ArrowRightCircleIcon className='icon' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimalTreatment;