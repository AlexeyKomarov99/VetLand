import React, {useState} from 'react';

//===== Ресурсы =====//
import './Profile.scss';

//===== Компоненты =====//
//= Общие =//
import DonationsAnimals from '../../components/Profile/Common/DonationsAnimals/DonationsAnimals';
import DonationsShelter from '../../components/Profile/Common/DonationsShelter/DonationsShelter';
import PersonalAccountNavigation from '../../components/Profile/Common/PersonalAccountNavigation/PersonalAccountNavigation';
import PersonalData from '../../components/Profile/Common/PersonalData/PersonalData';
import ReadAnimalInfo from '../../components/Profile/Common/ReadAnimalInfo/ReadAnimalInfo';
import UpdateAnimalInfo from '../../components/Profile/Common/UpdateAnimalInfo/UpdateAnimalInfo';
import UserRatingDonations from '../../components/Profile/Common/UserRatingDonations/UserRatingDonations';

//= Пользователь =//
import AnimalsAdoptedByUser from '../../components/Profile/User/AnimalsAdoptedByUser/AnimalsAdoptedByUser';
import CreateVolunteerApplication from '../../components/Profile/User/CreateVolunteerApplication/CreateVolunteerApplication';
import StagesAnimalAdoption from '../../components/Profile/User/StagesAnimalAdoption/StagesAnimalAdoption';
import Volunteering from '../../components/Profile/User/Volunteering/Volunteering';

//= Доктор =//
import ListAnimalsUndergoingTreatment from '../../components/Profile/Doctor/ListAnimalsUndergoingTreatment/ListAnimalsUndergoingTreatment';
import MWAddAnimalInspection from '../../components/Profile/Doctor/MWAddAnimalInspection/MWAddAnimalInspection';
import MWAddMedicalRecord from '../../components/Profile/Doctor/MWAddMedicalRecord/MWAddMedicalRecord';

//= Менеджер =//
// Животные
import AddAnimalAdoptedPetsDatabase from '../../components/Profile/Manager/Animals/AddAnimalAdoptedPetsDatabase/AddAnimalAdoptedPetsDatabase';
import MWAddAnimalDatabase from '../../components/Profile/Manager/Animals/MWAddAnimalDatabase/MWAddAnimalDatabase';
import MWRemoveAnimalDatabase from '../../components/Profile/Manager/Animals/MWRemoveAnimalDatabase/MWRemoveAnimalDatabase';
// Списки
import ListAllAnimals from '../../components/Profile/Manager/Lists/ListAllAnimals/ListAllAnimals';
import RegisteredUsers from '../../components/Profile/Manager/Lists/RegisteredUsers/RegisteredUsers';
import ShelterStaff from '../../components/Profile/Manager/Lists/ShelterStaff/ShelterStaff';
// Заявки пользователей
import AnimalAdoptionApplications from '../../components/Profile/Manager/UserRequests/AnimalAdoptionApplications/AnimalAdoptionApplications';
import VolunteerApplications from '../../components/Profile/Manager/UserRequests/VolunteerApplications/VolunteerApplications';
// Работа с пользователями
import MWCreateUser from '../../components/Profile/Manager/WorkingWithUsers/MWCreateUser/MWCreateUser';
import MWDeleteUser from '../../components/Profile/Manager/WorkingWithUsers/MWDeleteUser/MWDeleteUser';
import MWReadUserData from '../../components/Profile/Manager/WorkingWithUsers/MWReadUserData/MWReadUserData';
import MWUpdateUserData from '../../components/Profile/Manager/WorkingWithUsers/MWUpdateUserData/MWUpdateUserData';

//= Администратор =//

const Profile = () => {
  
  const [activePage, setActivePage] = useState('Личные данные');
  const toggleActivePage = (page) => {
    setActivePage((prevState) => {
      const newActivePage = prevState === page ? prevState : page;
      return newActivePage;
    })
  }

  return (
    <div className='Profile'>
      <div className="Profile__wrapper">
        <div className="Profile__container">
          <div className="Profile__content">

            {/* Содержимое контента */}
            <div className="Profile__content-info">

              {/* В зависимости от роли авторизованного пользователя отображать соответствующие компоненты */}

              {/* Личный кабинет */}
              {activePage === 'Личные данные' && <PersonalData />}
              
              {activePage === 'Волонтерство' && <CreateVolunteerApplication />}
              {activePage === 'Усыновление' && <AnimalsAdoptedByUser />}
              

              {activePage === 'Пожертвование' && (<DonationsAnimals /> && <DonationsShelter />)}


            </div>

            {/* Тестовая панель навигации */}
            <div className="Profile__navbar">
              <PersonalAccountNavigation 
                toggleActivePage={toggleActivePage}
              />
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Profile