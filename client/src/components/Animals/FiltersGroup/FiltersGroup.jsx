import React from 'react';
//===== assets =====//
import './FiltersGroup.scss';
//===== components =====//
import MainAnimalFilter from '../../UI/MainAnimalFilter/MainAnimalFilter';
import PetNameFilter from '../../UI/PetNameFilter/PetNameFilter';

const FiltersGroup = () => {
  return (
    <section className="FiltersGroup">
        <div className="FiltersGroup__wrapper">
            <div className="FiltersGroup__container">
                <div className="FiltersGroup__content">
                    <div className="FiltersGroup__filters-group">
                        <MainAnimalFilter />
                        <PetNameFilter />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FiltersGroup;