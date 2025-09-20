import React, {useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
//===== assets =====//
import './Header.scss';
import { FiArrowRight as ArrowRightIcon } from "react-icons/fi";
import { IoMdHeartEmpty as HeartIcon } from "react-icons/io";
//===== components =====//
import MainLabel from './MainLabel';
import Navbar from '../../Navbar/Navbar';
import Authentication from '../../Authentication/Authentication/Authentication';
//===== context =====//
import { AuthContext } from '../../../contexts/AuthContext';
import { useScroll } from '../../../contexts/ScrollContext';

const Header = () => {
  const {user} = useContext(AuthContext);
  const location = useLocation();
  const { 
    textColor, 
    backgroundColor, 
    isHeaderVisible, 
    setTextColor, 
    setBackgroundColor } = useScroll();
  const [windowAuthentication, setWindowAuthentication] = useState(false);
  const openWindowAuthentication = () => setWindowAuthentication(true);
  const closeWindowAuthentication = () => setWindowAuthentication(false);
  // Временное состояние
  const [countHeart, setCountHeart] = useState(0);

  useEffect(() => {
    // Страницы где нужен черный текст/белый фон
    const darkHeaderPages = [
      // '/questionnaire',
      '/animals', 
      '/about-us',
      '/happy-stories',
      '/help-us',
      '/how-take-home',
      '/recover-password',
      '/animal-info'
    ];

    if (darkHeaderPages.some(path => location.pathname.startsWith(path))) {
      setTextColor('black');
      setBackgroundColor('white');
    } else {
      setTextColor('white');
      setBackgroundColor('transparent');
    }
  }, [location.pathname, setTextColor, setBackgroundColor]);

  const isHomePage = location.pathname === '/';

  const headerStyle = {
    color: textColor,
    transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
    position: isHomePage ? 'fixed' : 'absolute',
    top: isHomePage ? 0 : 'auto',
    left: isHomePage ? 0 : 'auto',
    zIndex: 20000,
  };

  const textStyle = {
    color: textColor,
  }

  const cardStyle = {
    color: textColor,
    border: `1px solid ${textColor}`,
    backgroundColor: `${backgroundColor}`
  }

  return (
    <nav 
      className='Header'
      style={headerStyle}
    >
      <div className="Header__wrapper">
        <div className="Header__container">
          <div className="Header__content">
            <div className="Header__group">
              
              <div className="Header__lefr">
                <Link to='/'>
                  <MainLabel 
                    color={textColor}
                  />
                </Link>
              </div>

              <div className="Header__center">
                <Navbar
                  textStyle={textStyle}
                />
              </div>

              <div className="Header__right">
                <div className="Header__group">

                  <div className="Header__left-part">
                    {user ? (
                      <Link to='/profile' className='Header__authentication button'>{user.name} {user.surname}</Link>
                      ) : (
                      <button 
                        className="Header__authentication button"
                        onClick={() => openWindowAuthentication()}
                        style={cardStyle}
                      >
                        Войти
                      </button>
                      )
                    }
                    <Link 
                      to='/help-us' 
                      className='Header__Link'
                      style={cardStyle}
                    >
                      <span 
                        className="Header__Link-descr"
                        style={textStyle}
                      >
                        Финансово помочь питомцам
                      </span>
                      <ArrowRightIcon 
                        style={textStyle}
                        className='icon'
                      />
                    </Link>
                  </div>

                  <Link 
                    to={'/questionnaire'}
                    className="Header__right-part"
                  >
                    <div className="Header__right-part-group">
                      <HeartIcon className='icon' />
                      <span className="Header__right-part-count">{countHeart}</span>
                    </div>
                    <span className="Header__right-part-body">
                      Забрать питомца домой
                    </span>
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Authentication 
        windowAuthentication={windowAuthentication}
        closeWindowAuthentication={closeWindowAuthentication}
      />
    </nav>

  )
}

export default Header;