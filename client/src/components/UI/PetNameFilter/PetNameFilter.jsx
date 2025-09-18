import React from 'react';
//===== assets =====//
import './PetNameFilter.scss';
import { FaArrowRight as ArrowIcon } from "react-icons/fa6";
import { FiSearch as SearchIcon } from "react-icons/fi";

const PetNameFilter = ({ 
  searchName, 
  onSearchChange 
}) => {

  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <section className="PetNameFilter">
      <SearchIcon className='search-icon' />
      <input 
        type="text" 
        className="PetNameFilter__input" 
        placeholder='Поиск по кличке'
        value={searchName}
        onChange={handleInputChange}
      />
      <ArrowIcon className='arrow-icon' />
    </section>
  )
}

export default PetNameFilter;