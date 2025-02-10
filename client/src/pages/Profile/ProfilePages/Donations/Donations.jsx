import React from 'react';

//===== Ресурсы =====//
import './Donations.scss';

//===== Компоненты =====//
import DonationsShelter from '../../../../components/Profile/Common/DonationsShelter/DonationsShelter';
import DonationsAnimals from '../../../../components/Profile/Common/DonationsAnimals/DonationsAnimals';
import UserRatingDonations from '../../../../components/Profile/Common/UserRatingDonations/UserRatingDonations';

//===== API =====//

const Donations = () => {
  return (
    <div className='Donations'>
      <h2 className="Donations__title">Пожертвование</h2>
      <div className="Donations__content">

        {/* Группа таблиц с пожертвованиями */}
        <div className="Donations__tables-group">
          
          {/* Таблица "Пожертвования приюту" */}
          <DonationsShelter />

          {/* Таблица "Пожертвования животным" */}
          <DonationsAnimals />

        </div>

        {/* Дать разрешение на отображение своих ПД в общей таблице пожертвований? */}
          <div className="Donations__give-consent">
            {/* label */}
          </div>

        {/* Таблица "Общий список пожертвований всех пользователей" */}
        <UserRatingDonations />

      </div>
    </div>
  )
}

export default Donations;