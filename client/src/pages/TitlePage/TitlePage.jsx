import React from 'react';
//===== assets =====//
import './TitlePage.scss';
//===== components =====//
import Banner from '../../components/TitlePage/Banner/Banner';
import ReadyGoHome from '../../components/TitlePage/ReadyGoHome/ReadyGoHome';
import DogVideo from '../../components/TitlePage/DogVideo/DogVideo';
import AnimalTreatment from '../../components/TitlePage/AnimalTreatment/AnimalTreatment';
import Connect from '../../components/TitlePage/Connect/Connect';
import PurposeFund from '../../components/TitlePage/PurposeFund/PurposeFund';
import HowTakeHome from '../../components/TitlePage/HowTakeHome/HowTakeHome';
import HowCanHelp from '../../components/TitlePage/HowCanHelp/HowCanHelp';

const TitlePage = () => {
  
  return (
    <div className="TitlePage">
      <Banner />
      <ReadyGoHome />
      <DogVideo />
      <AnimalTreatment />
      <Connect />
      <PurposeFund />
      <HowTakeHome />
      <HowCanHelp />
    </div>
  )
}

export default TitlePage;