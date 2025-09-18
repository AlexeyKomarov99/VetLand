import React from 'react';
import { Link } from 'react-router-dom';
//===== assets =====//
import './AnimalInfoHeader.scss';
import { RxCross1 as CrossIcon } from "react-icons/rx";

const AnimalInfoHeader = ({
  animal
}) => {

  const animalsNominativeCase = {
    'Кролики': 'Кролик',
    'Собаки': 'Собака',
    'Кошки': 'Кот',
    'Птицы': 'Птица',
    'Грызуны': 'Грызун'
  }

  return (
    <section className="AnimalInfoHeader">
      <div className="AnimalInfoHeader__wrapper">
        <div className="AnimalInfoHeader__container">
          <div className="AnimalInfoHeader__content">

            <div className="AnimalInfoHeader__content-left">
              <div className="AnimalInfoHeader__animal-name">
                <span className="AnimalInfoHeader__animal-type">{animalsNominativeCase[animal.animalType]}</span>
                <span className="AnimalInfoHeader__name">{animal.animalName}</span>
              </div>
              <div className="AnimalInfoHeader__btn-group">
                <Link
                  to='/questionnaire'
                  className="AnimalInfoHeader__btn-take-home"
                >
                  Забрать домой
                </Link>
                <div className="AnimalInfoHeader__become-guardian">Стать опекуном</div>
              </div>
            </div>

            <Link 
              to='/animals'
              className="AnimalInfoHeader__content-right"
            >
              <CrossIcon className='cross-icon' />
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimalInfoHeader;