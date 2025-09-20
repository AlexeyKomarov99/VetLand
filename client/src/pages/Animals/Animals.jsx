import React from 'react';
//===== assets =====//
import './Animals.scss';
//===== components =====//
import InternalNavbar from '../../components/UI/InternalNavbar/InternalNavbar';
import FiltersGroup from '../../components/Animals/FiltersGroup/FiltersGroup';
import AnimalList from '../../components/UI/AnimalList/AnimalList';
//===== api =====//
import { useGetAnimalListQuery } from '../../store/api/publicApi';
//===== hooks =====//
import { useAnimalFilters } from '../../hooks/useAnimalFilters';

const Animals = () => {  
  const { data: animals, error, isLoading } = useGetAnimalListQuery();
  const { filteredAnimals, filters, updateFilter, clearFilters } = useAnimalFilters(animals);

  return (
    <div className='Animals' data-header-theme="dark">
      <InternalNavbar />
      <FiltersGroup 
        filters={filters}
        onFilterChange={updateFilter}
        onClearFilters={clearFilters}
      />
      <AnimalList 
        animals={filteredAnimals}
      />
    </div>
  )
}

export default Animals;