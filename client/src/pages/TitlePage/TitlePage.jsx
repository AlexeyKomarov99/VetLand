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
import HowCanHelpFund from '../../components/TitlePage/HowCanHelpFund/HowCanHelpFund';
//===== hooks =====//
import { useScrollObserver } from '../../hooks/useScrollObserver';

const TitlePage = () => {
  useScrollObserver();

  return (
    <div className="TitlePage">
      <Banner id="Banner" />
      <ReadyGoHome id="ReadyGoHome" />
      <DogVideo id="DogVideo" />
      <AnimalTreatment id="AnimalTreatment" />
      <Connect id="Connect" />
      <PurposeFund id="PurposeFund" />
      <HowTakeHome id="HowTakeHome" />
      <HowCanHelpFund id="HowCanHelpFund" />
    </div>
  )
}

export default TitlePage;