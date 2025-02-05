import React, {useState, useEffect, useContext} from 'react';

//===== Ресурсы =====//
import './DonationsAnimals.scss';

//===== Компоненты =====//
import Pagination from '../../../Pagination/Pagination';

//===== Контекст =====//
import { AuthContext } from '../../../../contexts/AuthContext';

const DonationsAnimals = () => {
  
  // Данные о пользователе полученные после авторизации
  const {user} = useContext(AuthContext);
  
  return (
    <div className='DonationsAnimals'>
      <div className="DonationsAnimals__container">
        <h3 className="DonationsAnimals__title"></h3>
        <table className="DonationsAnimals__table">
          <thead className="DonationsAnimals__thead">
            <tr className="DonationsAnimals__tr">
              <th className="DonationsAnimals__th">№</th>
              <th className="DonationsAnimals__th">Отправитель</th>
              <th className="DonationsAnimals__th">Регион приюта</th>
              <th className="DonationsAnimals__th">Сумма</th>
              <th className="DonationsAnimals__th">Дата</th>
            </tr>
          </thead>
        </table>

      </div>
    </div>
  )
}

export default DonationsAnimals;