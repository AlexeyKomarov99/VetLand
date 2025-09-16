import React from 'react';
//===== assets =====//
import './Animals.scss';
//===== components =====//
import InternalNavbar from '../../components/UI/InternalNavbar/InternalNavbar';
import FiltersGroup from '../../components/Animals/FiltersGroup/FiltersGroup';
import AnimalList from '../../components/UI/AnimalList/AnimalList';
//===== api =====//
import { useGetAnimalListQuery } from '../../store/api/publicApi';

const Animals = () => {
  
  const { data: animals, error, isLoading } = useGetAnimalListQuery();

  return (
    <div className='Animals'>
      <InternalNavbar />
      <FiltersGroup />
      <AnimalList 
        animals={animals}
      />
    </div>
  )
}

export default Animals;