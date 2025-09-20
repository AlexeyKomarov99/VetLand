import React from 'react';
//===== assets =====//
import './AlreadyHome.scss';
//===== components =====//
import InternalNavbar from '../../components/UI/InternalNavbar/InternalNavbar';
import AnimalList from '../../components/UI/AnimalList/AnimalList';
import FiltersGroup from '../../components/Animals/FiltersGroup/FiltersGroup';
//===== api =====//
import { useGetAdoptedAnimalListQuery } from '../../store/api/publicApi';
//===== hooks =====//
import { useAnimalFilters } from '../../hooks/useAnimalFilters';

const AlreadyHome = () => {
  const { data: animals, error, isLoading } = useGetAdoptedAnimalListQuery();
  const { filteredAnimals, filters, updateFilter, clearFilters } = useAnimalFilters(animals);

  return (
    <div className='AlreadyHome' data-header-theme="dark">
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

export default AlreadyHome;