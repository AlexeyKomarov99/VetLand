import React from 'react';
//===== assets =====//
import './TakeHomeAlgorithm.scss';
//===== components =====//
import InternalNavbar from '../../components/UI/InternalNavbar/InternalNavbar';
import AdoptionAlgorithm from '../../components/UI/AdoptionAlgorithm/AdoptionAlgorithm';
import AnimalList from '../../components/UI/AnimalList/AnimalList';
//===== api =====//
import { useGetAnimalListQuery } from '../../store/api/publicApi';

const TakeHomeAlgorithm = () => {

  const {data: animals, error, isLoading} = useGetAnimalListQuery();

  return (
    <div className='TakeHomeAlgorithm'>
      <InternalNavbar />
      <AdoptionAlgorithm />
      <div className="TakeHomeAlgorithm__wrapper">
        <div className="TakeHomeAlgorithm__container">
          <div className="TakeHomeAlgorithm__content">
            <div className="TakeHomeAlgorithm__title">Ждут своего хозяина</div>
          </div>
        </div>
      </div>
      <AnimalList 
        animals={animals}
      />
    </div>
  )
}

export default TakeHomeAlgorithm;