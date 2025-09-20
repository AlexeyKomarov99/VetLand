import React from 'react';
//===== assets =====//
import './Connect.scss';
//===== components =====//
import { Link } from 'react-router-dom';
import PhotoCat from '../../../assets/background/connect-cat.png';
import { BsArrowRightCircle as ArrowRightCircleIcon } from "react-icons/bs";

const Connect = ({
  id
}) => {
  return (
    <section 
      id={id}
      className="Connect"
      data-header-theme="dark"
    >
      <div className="Connect__wrapper">
        <div className="Connect__container">
          <div className="Connect__content">
            
            <div className="Connect__photo-cat-wrapper">
              <img src={PhotoCat} alt="Фото кота" />
            </div>

            <div className="Connect__content-text">
              <div className="Connect__title">Connect!</div>

              <div className="Connect__descr">
                Еще не домашние,
                <br />
                но уже
                <br />
                не бездомные
              </div>

              <div className="Connect__cards-group">
                
                <Link
                  to='/animals'
                  className="Connect__take-friend"
                >
                  <div className="Connect__take-friend-group">
                    <div className="Connect__take-friend-header">Выбрать друга</div>
                    <div className="Connect__take-friend-footer">
                      <ArrowRightCircleIcon className='icon' />
                    </div>
                  </div>
                </Link>

                <div className="Connect__knowledge">
                  <div className="Connect__knowledge-group">
                    <div className="Connect__knowledge-header-group">
                      <div className="Connect__knowledge-title">База знаний</div>
                      <div className="Connect__knowledge-descr">Поделимся базой знаний от профессионалов</div>
                    </div>
                    <div className="Connect__knowledge-body-group">Coming soon</div>
                  </div>
                </div>

                <Link className="Connect__guardian">
                  <div className="Connect__guardian-group">
                    <div className="Connect__guardian-header-group">
                      <div className="Connect__guardian-title">Опекунство</div>
                      <div className="Connect__guardian-descr"> Обеспечивайте и навещайте вашего питомца, получайте информацию о нём, участвуйте в мероприятиях фонда </div>
                    </div>
                    <div className="Connect__guardian-body-group">
                      <ArrowRightCircleIcon className='icon' />
                    </div>
                  </div>
                </Link>

                <div className="Connect__movement">
                  <div className="Connect__movement-group">
                    <div className="Connect__movement-header">Стать частью движения</div>
                    <div className="Connect__movement-footer">Coming soon</div>
                  </div>  
                </div>

              </div>

            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect;