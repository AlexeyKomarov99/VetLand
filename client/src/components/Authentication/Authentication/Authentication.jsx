import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {useNavigate} from 'react-router-dom';

//===== Ресурсы =====//
import { RxCross1 as CrossIcon } from "react-icons/rx";
import './Authentication.scss';

//===== Компоненты =====//
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

Modal.setAppElement('#root');

const Authentication = ({windowAuthentication, closeWindowAuthentication}) => {

    const navigate = useNavigate();

    const [activatedButton, setActivatedButton] = useState('login');
    const toggleActivatedButton = (keyword) => {
        setActivatedButton(keyword);
    }

    const routePageRecoverPassword = () => {
        navigate('/recover-password');
        closeWindowAuthentication();
    }

    useEffect(() => {
        if (windowAuthentication) {
            document.body.classList.add('body-no-scroll');
            return () => {
                document.body.classList.remove('body-no-scroll');
            };
        }
    }, [windowAuthentication]);

    return (
    <Modal
        className='Authentication Modal'
        overlayClassName='Authentication__overlay'
        isOpen={windowAuthentication}
        onRequestClose={closeWindowAuthentication}
    >
        <div className="Authentication__group">

            {/* Шапка МО */}
            <div className="Authentication__header">
                <div className="Authentication__header-group">
                    <span 
                        className={`Authentication__header-descr ${activatedButton === 'login' ? 'active' : 'inactive'}`}
                        onClick={() => toggleActivatedButton('login')}
                    >
                        Вход
                    </span>
                    <span 
                        className={`Authentication__header-descr ${activatedButton === 'registration' ? 'active' : 'inactive'}`}
                        onClick={() => toggleActivatedButton('registration')}
                    >
                        Регистрация
                    </span>
                </div>
                <div 
                    className="Authentication__header-icon"
                    onClick={closeWindowAuthentication}
                >
                    <CrossIcon className='icon'/>
                </div>
            </div>

            {/* Тело МО */}
            <div className="Authentication__body">
                {activatedButton === 'login' && <Login closeWindowAuthentication={closeWindowAuthentication} />}
                {activatedButton === 'registration' && <Registration closeWindowAuthentication={closeWindowAuthentication} />}
            </div>

            {/* Ноги МО */}
            <div className="Authentication__footer">
                <span
                    className='Authentication__footer-descr'
                    onClick={routePageRecoverPassword}    
                >
                    Забыли пароль?
                </span>
            </div>

        </div>
    </Modal>
  )
}

export default Authentication;