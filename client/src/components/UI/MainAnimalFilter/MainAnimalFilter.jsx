import React, {useState, useEffect, useRef} from 'react';
import './MainAnimalFilter.scss';
import {animalTypes, ageRange, animalStatus} from './data';
import { MdArrowDropDownCircle as CircleArrowIcon } from "react-icons/md";

const MainAnimalFilter = ({ 
    filters, 
    onFilterChange 
}) => {
    const [showAgeModal, setShowAgeModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [tempAgeRanges, setTempAgeRanges] = useState(filters.ageRanges);
    const [tempStatuses, setTempStatuses] = useState(filters.statuses);
    
    const ageModalRef = useRef(null);
    const statusModalRef = useRef(null);

    // Синхронизируем временные состояния с фильтрами
    useEffect(() => {
        setTempAgeRanges(filters.ageRanges);
        setTempStatuses(filters.statuses);
    }, [filters.ageRanges, filters.statuses]);

    // Обработчик выбора типа животного
    const handleAnimalTypeSelect = (type) => {
        onFilterChange('animalType', type);
    };

    // Обработчик выбора возраста
    const handleAgeSelect = (ageId) => {
        setTempAgeRanges(prev => 
            prev.includes(ageId) 
                ? prev.filter(id => id !== ageId)
                : [...prev, ageId]
        );
    };

    // Обработчик выбора статуса
    const handleStatusSelect = (statusId) => {
        setTempStatuses(prev => 
            prev.includes(statusId) 
                ? prev.filter(id => id !== statusId)
                : [...prev, statusId]
        );
    };

    // Применить выбранные возраста
    const applyAgeFilters = () => {
        onFilterChange('ageRanges', tempAgeRanges);
        setShowAgeModal(false);
    };

    // Применить выбранные статусы
    const applyStatusFilters = () => {
        onFilterChange('statuses', tempStatuses);
        setShowStatusModal(false);
    };

    const toggleAgeModal = () => {
        setShowAgeModal(!showAgeModal);
        if (showStatusModal) setShowStatusModal(false);
    };

    const toggleStatusModal = () => {
        setShowStatusModal(!showStatusModal);
        if (showAgeModal) setShowAgeModal(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showAgeModal && ageModalRef.current && 
                !ageModalRef.current.contains(event.target) &&
                !event.target.closest('.MainAnimalFilter__age-range')) {
                setShowAgeModal(false);
            }
            
            if (showStatusModal && statusModalRef.current && 
                !statusModalRef.current.contains(event.target) &&
                !event.target.closest('.MainAnimalFilter__status')) {
                setShowStatusModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showAgeModal, showStatusModal]);

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className="MainAnimalFilter">

            <div className="MainAnimalFilter__animal-types">
                {animalTypes.map((type) => (
                    <article
                        key={type.id}
                        className={`MainAnimalFilter__animal-type ${
                            filters.animalType === type.type ? 'MainAnimalFilter__animal-type--active' : ''
                        }`}
                        onClick={() => handleAnimalTypeSelect(type.type)}
                    >
                        <span className="MainAnimalFilter__animal-type-name">{type.name}</span>
                    </article>
                ))}
            </div>

            <div className="MainAnimalFilter__age-range" onClick={toggleAgeModal}>
                <div className="MainAnimalFilter__age-range-trigger">
                    <span className="MainAnimalFilter__age-range-text">
                        Возраст{filters.ageRanges.length > 0 ? ` (${filters.ageRanges.length})` : ''}
                    </span>
                    <CircleArrowIcon className='MainAnimalFilter__age-range-icon' />
                </div>
            </div>

            <div className="MainAnimalFilter__status" onClick={toggleStatusModal}>
                <div className="MainAnimalFilter__status-trigger">
                    <span className="MainAnimalFilter__title">
                        Особенности{filters.statuses.length > 0 ? ` (${filters.statuses.length})` : ''}
                    </span>
                    <CircleArrowIcon className='MainAnimalFilter__status-icon' />
                </div>
            </div>
                
            {showAgeModal && (
                <div ref={ageModalRef} className="MainAnimalFilter__age-range-mw" onClick={handleModalClick}>
                    <div className="MainAnimalFilter__range">
                        {ageRange.map((age) => (
                            <article key={age.id} className="MainAnimalFilter__age-item">
                                <input 
                                    type="checkbox" 
                                    className="MainAnimalFilter__age-input" 
                                    checked={tempAgeRanges.includes(age.id)}
                                    onChange={() => handleAgeSelect(age.id)}
                                />
                                <span className="MainAnimalFilter__age-text">{age.age}</span>
                            </article>
                        ))}
                    </div>
                    <div className="MainAnimalFilter__age-btn" onClick={applyAgeFilters}>
                        Применить
                    </div>
                </div>
            )}

            {showStatusModal && (
                <div ref={statusModalRef} className="MainAnimalFilter__status-mw" onClick={handleModalClick}>
                    <div className="MainAnimalFilter__status-group">
                        {animalStatus.map((status) => (
                            <article key={status.id} className="MainAnimalFilter__status-item">
                                <input 
                                    type="checkbox"
                                    className="MainAnimalFilter__status-input" 
                                    checked={tempStatuses.includes(status.id)}
                                    onChange={() => handleStatusSelect(status.id)}
                                />
                                <span className="MainAnimalFilter__status-text">{status.name}</span>
                            </article>
                        ))}
                    </div>
                    <div className="MainAnimalFilter__status-btn" onClick={applyStatusFilters}>
                        Применить
                    </div>
                </div>
            )}

        </section>
    );
};

export default MainAnimalFilter;