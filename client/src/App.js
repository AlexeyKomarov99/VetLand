import React, { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

//===== Ресурсы =====//
import './App.css';

//===== Компоненты =====//
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import AlreadyHome from './pages/AlreadyHome/AlreadyHome'; // Уже дома
import Animals from './pages/Animals/Animals'; // Животные
import HelpAnimals from './pages/HelpAnimals/HelpAnimals'; // Помощь животным
import Profile from './pages/Profile/Profile/Profile'; // Профиль
//=== Вложенные страницы раздела "Профиль" ===//
import AnimalInfoShelter from './pages/Profile/ProfilePages/AnimalInfoShelter/AnimalInfoShelter';
import AnimalAdoptedInfo from './pages/Profile/ProfilePages/AnimalAdoptedInfo/AnimalAdoptedInfo';
import Applications from './pages/Profile/ProfilePages/Applications/Applications';
import Donations from './pages/Profile/ProfilePages/Donations/Donations';
import PersonalData from './pages/Profile/ProfilePages/PersonalData/PersonalData';
import ShelterManagement from './pages/Profile/ProfilePages/ShelterManagement/ShelterManagement';
import Statistics from './pages/Profile/ProfilePages/Statistics/Statistics';
import UserProfiles from './pages/Profile/ProfilePages/UserProfiles/UserProfiles';
import Volunteering from './pages/Profile/ProfilePages/Volunteering/Volunteering';
import MedicalRecords from './pages/Profile/ProfilePages/MedicalRecords/MedicalRecords';
import UserAdoptedAnimal from './pages/Profile/ProfilePages/UserAdoptedAnimal/UserAdoptedAnimal';
//=== = ===//
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'; // Восстановление пароля
import TakeHomeAlgorithm from './pages/TakeHomeAlgorithm/TakeHomeAlgorithm'; // Алгоритм как забрать домой
import TakeHomeQuestionnaire from './pages/TakeHomeQuestionnaire/TakeHomeQuestionnaire'; // Анкета забрать домой
import TitlePage from './pages/TitlePage/TitlePage'; // Титульная страница
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'; // Политика конфиденциальности
import AnimalInfo from './pages/AnimalInfo/AnimalInfo'; // Подробная информация о животном
import Footer from './components/Footer/Footer';

const AppContent = () => {

  // Получаем информацию о текущем маршруте
  const location = useLocation();
  // Определяем нужно ли показывать Header и Footer
  const shouldShowHeaderAndFooter = !location.pathname.startsWith('/profile');

  return (
    <div className='container'>

      {shouldShowHeaderAndFooter && <Header />}
      <Routes>

        {/* Титульная страница - маршрут по умолчанию */}
        <Route path='/' element={<TitlePage/>} />

        {/* Забрать домой - Анкета будущего хозяина */}
        <Route path='/questionnaire' element={<TakeHomeQuestionnaire />} />
        
        {/* Route path='/questionnaire/:id' */}

        {/* Наши подопечные */}
        <Route path='/animals' element={<Animals />} />

        {/* О нас */}
        <Route path='/about-us' element={<AboutUs />} />

        {/* Уже дома */}
        <Route path='/happy-stories' element={<AlreadyHome />} />

        {/* Профиль */}
        <Route path='/profile/*' element={<Profile />} >
          <Route path='personal-data' element={<PersonalData />} />
          <Route path='donations' element={<Donations />} />
          <Route path='volunteering' element={<Volunteering />} />
          <Route path='user-profiles' element={<UserProfiles />} />
          <Route path='applications' element={<Applications />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='shelter-management' element={<ShelterManagement />} />
          <Route path='animal-info-shelter' element={<AnimalInfoShelter />} />
          <Route path='animal-adopted-info' element={<AnimalAdoptedInfo />} />
          <Route path='user-adopted-animal' element={<UserAdoptedAnimal />} />
          <Route path='medical-records' element={<MedicalRecords />} />
        </Route>

        {/* Помощь животным */}
        <Route path='/help-us' element={<HelpAnimals />} />
        
        {/* Алгоритм, как забрать домой */}
        <Route path='./how-take-home' element={<TakeHomeAlgorithm />} />

        {/* Восстановление пароля */}
        <Route path='/recover-password' element={<RecoverPassword />} />

        {/* Политика конфиденциальности */}
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        
        {/* Подробная информация о животном */}
        <Route path='/animal-info/:id' element={<AnimalInfo />} />

      </Routes>

      {shouldShowHeaderAndFooter && <Footer />}
    </div>
  )
}

const App = () => {
  
  return (
    <div>
      <Router>
        <AppContent />
      </Router>
    </div>
  )
}

export default App;