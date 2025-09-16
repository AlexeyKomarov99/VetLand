import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//===== assets =====//
import './App.css';

//===== Компоненты =====//
import Header from './components/Common/Header/Header';
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
import TitlePage from './pages/TitlePage/TitlePage'; // Титульная страница
import HowTakeHome from './pages/HowTakeHome/HowTakeHome'; // Анкета забрать домой


import RecoverPassword from './pages/RecoverPassword/RecoverPassword'; // Восстановление пароля
import TakeHomeAlgorithm from './pages/TakeHomeAlgorithm/TakeHomeAlgorithm'; // Алгоритм как забрать домой
import AnimalInfo from './pages/AnimalInfo/AnimalInfo';
import Footer from './components/Common/Footer/Footer';

const AppContent = () => {

  // Получаем информацию о текущем маршруте
  const location = useLocation();
  // Определяем нужно ли показывать Header и Footer
  const shouldShowHeaderAndFooter = !location.pathname.startsWith('/profile');

  useEffect(() => {
    if (location.pathname.startsWith('/profile')) {
      document.body.style.backgroundColor = '#f0f0f0'; // пример цвета для профиля
    } else {
      document.body.style.backgroundColor = '#333333'; // темно-серый цвет по умолчанию
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [location.pathname]);

  return (
    <div className='container'>

      {/* {shouldShowHeaderAndFooter && <Header />} */}
      <Routes>

        {/* Титульная страница - маршрут по умолчанию */}
        <Route path='/' element={<TitlePage/>} />

        {/* Как забрать домой - Анкета будущего хозяина */}
        <Route path='/questionnaire' element={<HowTakeHome />} />

        {/* Наши подопечные */}
        <Route path='/animals' element={<Animals />} />

        {/* О нас */}
        <Route path='/about-us' element={<AboutUs />} />

        {/* Уже дома */}
        <Route path='/happy-stories' element={<AlreadyHome />} />

        {/* Помощь животным */}
        <Route path='/help-us' element={<HelpAnimals />} />
        
        {/* Алгоритм, как забрать домой */}
        <Route path='./how-take-home' element={<TakeHomeAlgorithm />} />

        {/* Восстановление пароля */}
        <Route path='/recover-password' element={<RecoverPassword />} />
        
        {/* Подробная информация о животном */}
        <Route path='/animal-info/:id' element={<AnimalInfo />} />

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

      </Routes>

      {shouldShowHeaderAndFooter && <Footer />}
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Router>
        <AppContent />
      </Router>
    </div>
  )
}

export default App;