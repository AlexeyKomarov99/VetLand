import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//===== assets =====//
import './InternalNavbar.scss';
import { HiArrowTurnDownRight as ArrowRightBottomIcon } from "react-icons/hi2";
import {routes} from './data';

const InternalNavbar = () => {
  
  const location = useLocation();
  const pageInfo = routes.filter(route => route.route === location.pathname);
  const link = pageInfo[0]?.linkName;
  const title = pageInfo[0]?.titlePage;

  return (
    <section className="InternalNavbar">
      <div className="InternalNavbar__wrapper">
        <div className="InternalNavbar__container">
          <div className="InternalNavbar__content">
              <div className="InternalNavbar__header">
                <div className="InternalNavbar__header-nav">
                  <Link to='/' className='InternalNavbar__link-main' >
                    <span className="InternalNavbar__link-text">Главная</span>
                    <ArrowRightBottomIcon className='icon' />
                  </Link>
                  <span className="InternalNavbar__current-page">{link}</span>
                </div>
                <h2 className="InternalNavbar__header-title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternalNavbar;