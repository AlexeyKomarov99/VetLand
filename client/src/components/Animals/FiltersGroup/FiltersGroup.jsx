import React from 'react';
import { useLocation } from 'react-router-dom';
//===== assets =====//
import './FiltersGroup.scss';
//===== components =====//
import MainAnimalFilter from '../../UI/MainAnimalFilter/MainAnimalFilter';
import PetNameFilter from '../../UI/PetNameFilter/PetNameFilter';

const FiltersGroup = ({ 
    filters, 
    onFilterChange, 
    onClearFilters 
}) => {

    const location = useLocation();

    return (
        <section className="FiltersGroup">
            <div className="FiltersGroup__wrapper">
                <div className="FiltersGroup__container">
                    <div className="FiltersGroup__content">
                        <div className="FiltersGroup__filters-group">
                            {location.pathname !== '/happy-stories' && (
                                <MainAnimalFilter
                                    filters={filters}
                                    onFilterChange={onFilterChange}
                                />
                            )}
                            <PetNameFilter 
                                searchName={filters.searchName}
                                onSearchChange={(value) => onFilterChange('searchName', value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FiltersGroup;