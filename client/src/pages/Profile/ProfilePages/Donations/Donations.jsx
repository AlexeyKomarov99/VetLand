import React from 'react';

//===== Ресурсы =====//
import './Donations.scss';

//===== Компоненты =====//
import DonationsAnimals from '../../../../components/Profile/Common/DonationsAnimals/DonationsAnimals';
import DonationsShelter from '../../../../components/Profile/Common/DonationsShelter/DonationsShelter';
import UserRatingDonations from '../../../../components/Profile/Common/UserRatingDonations/UserRatingDonations';

const Donations = () => {
  return (
    <div className='Donations'>
      <h2 className="Donations__title">Пожертвование</h2>
      
      <div className="Donations__content">

        {/* Группа с таблицами "Пожертвований" */}
        <div className="Donations__table-group">

          <div className="Donations__table-donations-animals">
            <DonationsAnimals />
          </div>

          <div className="Donations__table-donations-shelter">
            <DonationsShelter />
          </div>

        </div>

        {/* Согласие пользователя на отображение своих данных в "Общая рейтинговая таблица пожертвований" */}
        <div className="Donations__user-agreement">
          {/* Может создать отдельный компонент? */}
        </div>


        {/* "Общая рейтинговая таблица users" */}
        <div className="Donations__user-rating-donations">
          <UserRatingDonations />
        </div>

      </div>
    </div>
  )
}

export default Donations;
