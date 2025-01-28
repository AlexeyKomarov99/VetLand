import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//===== Ресурсы =====//
import './App.css';

//===== Компоненты =====//
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import AlreadyHome from './pages/AlreadyHome/AlreadyHome'; // Уже дома
import Animals from './pages/Animals/Animals'; // Животные
import HelpAnimals from './pages/HelpAnimals/HelpAnimals'; // Помощь животным
import Profile from './pages/Profile/Profile'; // Профиль
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'; // Восстановление пароля
import TakeHomeAlgorithm from './pages/TakeHomeAlgorithm/TakeHomeAlgorithm'; // Алгоритм как забрать домой
import TakeHomeQuestionnaire from './pages/TakeHomeQuestionnaire/TakeHomeQuestionnaire'; // Анкета забрать домой
import TitlePage from './pages/TitlePage/TitlePage'; // Титульная страница
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'; // Политика конфиденциальности
import AnimalInfo from './pages/AnimalInfo/AnimalInfo'; // Подробная информация о животном
import Footer from './components/Footer/Footer';

const App = () => {
  
  return (

    <div className='App'>
      <Router>

        {/* Навигация */}
        <div className='container'>
          
          <Header />
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
            <Route path='/profile' element={<Profile />} />

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
          <Footer />

        </div>

      </Router>

    </div>
  )
}

export default App;