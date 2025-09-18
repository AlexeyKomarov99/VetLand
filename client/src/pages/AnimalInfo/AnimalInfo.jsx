import React from 'react';
import { useLocation } from 'react-router-dom';
//===== assets =====//
import './AnimalInfo.scss';
//===== components =====//
import InternalNavbar from '../../components/UI/InternalNavbar/InternalNavbar';
import AnimalInfoHeader from '../../components/AnimalInfo/AnimalInfoHeader/AnimalInfoHeader';
import MonthlyService from '../../components/AnimalInfo/MonthlyService/MonthlyService';

const AnimalInfo = () => {
  const location = useLocation();
  const {animal} = location.state || {};
  return (
    <div className='AnimalInfo'>
      <InternalNavbar  
        animal={animal}
      />
      <AnimalInfoHeader 
        animal={animal}
      />
      <div className="AnimalInfo__wrapper">
        <div className="AnimalInfo__container">
          <div className="AnimalInfo__content">
            
            <div className="AnimalInfo__content-left">
              <MonthlyService 
                animal={animal}
              />
            </div>
            
            <div className="AnimalInfo__content-right">

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalInfo;