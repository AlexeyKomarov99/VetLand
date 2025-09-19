import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//===== assets =====//
import './InternalNavbar.scss';
import { HiArrowTurnDownRight as ArrowRightBottomIcon } from "react-icons/hi2";
import {routes} from './data';

const InternalNavbar = ({
  animal
}) => {
  const location = useLocation();
  const pageInfo = routes.filter(route => route.route === location.pathname);
  const link = pageInfo[0]?.linkName;
  const title = pageInfo[0]?.titlePage;
  const descr = pageInfo[0]?.descr;

  return (
    <section className="InternalNavbar">
      <div className="InternalNavbar__wrapper">
        <div className="InternalNavbar__container">
          <div className="InternalNavbar__content">
              <div className="InternalNavbar__header">

                <div 
                  className={`InternalNavbar__header-nav ${animal ? 'InternalNavbar__animal-info-activated' : ''}`}
                >
                  <Link 
                    to='/' 
                    className='InternalNavbar__link-main' 
                    style={{marginRight: '0.5rem'}}
                  >
                    <span className="InternalNavbar__link-text">Главная</span>
                    <ArrowRightBottomIcon className='icon' />
                  </Link>
                  <span className="InternalNavbar__current-page">{link}</span>
                  {animal && (
                    <>
                      <Link 
                        to='/animals' 
                        className='InternalNavbar__link-main' 
                        style={{marginRight: '0.5rem'}}
                      >
                        <span className="InternalNavbar__link-text">Наши подопечные</span>
                        <ArrowRightBottomIcon className='icon' />
                      </Link>
                      <span className='InternalNavbar__animal-name' >{animal.animalName}</span>
                    </>
                  )}
                </div>
                
                <div className="InternalNavbar__title-group">
                  <h2 className="InternalNavbar__header-title">{title}</h2>
                  <span className="InternalNavbar__header-descr">{descr}</span>
                </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternalNavbar;