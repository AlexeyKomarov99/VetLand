import React from 'react';
//===== assets =====//
import './PurposeFund.scss';
//===== components =====//
import { Link } from 'react-router-dom';
import { BsArrowRightCircle as ArrowRightCircleIcon } from "react-icons/bs";
import DogWithBoyPhoto from '../../../assets/photos/dog-with-boy.jpg';
import GirlWithCatPhoto from '../../../assets/photos/girl-with-cat.jpg';
import DogOnBedPhoto from '../../../assets/photos/dog-on-bed.jpg';

const PurposeFund = ({
  id
}) => {
  return (
    <section 
      id={id}
      className="PurposeFund"
      data-header-theme="dark"
    >
      <div className="PurposeFund__wrapper">
        <div className="PurposeFund__container">
          <div className="PurposeFund__content">

            <div className="PurposeFund__purpose-fund">
              <div className="PurposeFund__purpose-title">Цель фонда:</div>
              <div className="PurposeFund__purpose-fund-descr">
                Мы стараемся обеспечить <br /> животных достойными <br /> условиями жизни, пока ищем <br /> для них своего человека.
              </div>
            </div>

            <div className="PurposeFund__title">
              Создать <br /> лучшие условия <br /> для жизни <span className='PurposeFund__title-animal-color'>животных</span>
            </div>

            <div className="PurposeFund__cards-group">
              <div className="PurposeFund__card-wrapper">
                <img src={DogWithBoyPhoto} alt="Мальчик с собакой" className="PurposeFund__card-img" />
              </div>
              <div className="PurposeFund__card-wrapper">
                <img src={GirlWithCatPhoto} alt="Котенок с девочкой" className="PurposeFund__card-img" />
              </div>
              <div className="PurposeFund__card-wrapper">
                <img src={DogOnBedPhoto} alt="Собака на кровати" className="PurposeFund__card-img" />
              </div>
              <Link 
                className="OutTeam__card-wrapper"
                to='/about-us'
              >
                <div className="PurposeFund__card-our-team-descr">
                  <div className="PurposeFund__header-group">
                    <div className="PurposeFund__card-title">Наша команда</div>
                    <div className="PurposeFund__card-descr">Познакомьтесь с нашей командой</div>
                  </div>
                  <div className="PurposeFund__card-icon">
                    <ArrowRightCircleIcon className='icon' />
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PurposeFund