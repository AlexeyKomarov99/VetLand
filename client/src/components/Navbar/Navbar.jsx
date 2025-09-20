import React from 'react';
import { Link } from 'react-router-dom';
//===== assets =====//
import './Navbar.scss';
import { links } from './data';
import { MdArrowDropDownCircle as ArrowDownIcon } from "react-icons/md";

const Navbar = ({
  textStyle
}) => {

  return (
    <nav className='Navbar'>
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.route}
          className='Navbar__Link'
        >
          <span 
            className="Navbar__Link-item" 
            style={textStyle}
          >
            {link.title}
          </span>
          <span 
            className='icon'
            style={textStyle}
          >
              <ArrowDownIcon />
          </span>
        </Link>
      ))}
      <a href="https://highpaw.vet.land" target="_blank" rel="noopener noreferrer" className='Navbar__Link'>
        <span 
          className="Navbar__Link-item" 
          style={textStyle}
        >
          Highpaw
        </span>
        <span 
          className='icon'
          style={textStyle}
        >
          <ArrowDownIcon />
        </span>
      </a>
    </nav>
  )
}

export default Navbar;
