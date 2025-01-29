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
import Profile from './pages/Profile/Profile'; // Профиль
//=== Вложенные страницы раздела "Профиль" ===//
import AnimalsInfo from './components/Profile/ProfilePages/AnimalsInfo/AnimalsInfo';
import Applications from './components/Profile/ProfilePages/Applications/Applications';
import Donations from './components/Profile/ProfilePages/Donations/Donations';
import PersonalData from './components/Profile/ProfilePages/PersonalData/PersonalData';
import ShelterManagement from './components/Profile/ProfilePages/ShelterManagement/ShelterManagement';
import Statistics from './components/Profile/ProfilePages/Statistics/Statistics';
import UserProfiles from './components/Profile/ProfilePages/UserProfiles/UserProfiles';
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
  const shouldShowHeaderAndFooter = location.pathname !== '/profile';

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
          <Route path='user-profiles' element={<UserProfiles />} />
          <Route path='applications' element={<Applications />} />
          <Route path='animals-info' element={<AnimalInfo />} />
          <Route path='donations' element={<Donations />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='shelter-management' element={<ShelterManagement />} />
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
    <div className='App'>
      <Router>
        <AppContent />
      </Router>
    </div>
  )
}

export default App;