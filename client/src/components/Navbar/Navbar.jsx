import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowDropDownCircle as ArrowDownIcon } from "react-icons/md";
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='Navbar'>

        <Link to='/questionnaire' className='Navbar__Link'>
          <span className="Navbar__Link-item">Забрать домой</span>
          <span className='icon'><ArrowDownIcon /></span>
        </Link>

        <Link to='/animals' className='Navbar__Link'>
          <span className="Navbar__Link-item">Наши подопечные</span>
          <span className='icon'><ArrowDownIcon /></span>
        </Link>

        <Link to='/about-us' className='Navbar__Link'>
          <span className="Navbar__Link-item">О нас</span>
          <span className='icon'><ArrowDownIcon /></span>
        </Link>

        <Link to='/happy-stories' className='Navbar__Link'>
          <span className="Navbar__Link-item">Уже дома</span>
          <span className='icon'><ArrowDownIcon /></span>
        </Link>

        <a href="https://highpaw.vet.land" target="_blank" rel="noopener noreferrer" className='Navbar__Link'>
          <span className="Navbar__Link-item">Highpaw</span>
          <span className='icon'><ArrowDownIcon /></span>
        </a>

    </nav>
  )
}

export default Navbar;
