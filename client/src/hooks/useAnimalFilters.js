// hooks/useAnimalFilters.js
import { useState, useMemo } from 'react';
import { animalTypes, ageRange, animalStatus } from '../components/UI/MainAnimalFilter/data';

export const useAnimalFilters = (animals = []) => {
  const [filters, setFilters] = useState({
    animalType: 'all',
    ageRanges: [],
    statuses: [],
    searchName: ''
  });

  // Функция для преобразования типа животного в ключ
  const getAnimalTypeKey = (animalType) => {
    const mapping = {
      'Кошки': 'cats',
      'Собаки': 'dogs',
      'Кролики': 'rabbits',
      'Птицы': 'birds',
      'Грызуны': 'rodents'
    };
    return mapping[animalType] || 'all';
  };

  // Функция для проверки возраста
  const isAnimalInAgeRange = (animalAge, ageRangeItem) => {
    if (ageRangeItem.unit === 'months') {
      const ageInMonths = animalAge * 12; // преобразуем годы в месяцы
      
      if (ageRangeItem.max === null) {
        return ageInMonths >= ageRangeItem.min;
      }
      return ageInMonths >= ageRangeItem.min && ageInMonths <= ageRangeItem.max;
    }
    return false;
  };

  const filteredAnimals = useMemo(() => {
    if (!animals || !Array.isArray(animals)) return [];

    return animals.filter(animal => {
      // 1. Фильтр по типу животного
      if (filters.animalType !== 'all') {
        const animalTypeKey = getAnimalTypeKey(animal.animalType);
        if (animalTypeKey !== filters.animalType) {
          return false;
        }
      }

      // 2. Фильтр по возрасту
      if (filters.ageRanges.length > 0) {
        const selectedAgeRanges = ageRange.filter(item => 
          filters.ageRanges.includes(item.id)
        );
        
        const passesAgeFilter = selectedAgeRanges.some(ageRangeItem => 
          isAnimalInAgeRange(animal.age, ageRangeItem)
        );
        
        if (!passesAgeFilter) return false;
      }

      // 3. Фильтр по статусу
      if (filters.statuses.length > 0) {
        const selectedStatuses = animalStatus.filter(item => 
          filters.statuses.includes(item.id)
        );
        
        const passesStatusFilter = selectedStatuses.some(statusItem => 
          animal.animalStatus === statusItem.name
        );
        
        if (!passesStatusFilter) return false;
      }

      // 4. Поиск по кличке
      if (filters.searchName && 
          !animal.animalName.toLowerCase().includes(filters.searchName.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [animals, filters]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      animalType: 'all',
      ageRanges: [],
      statuses: [],
      searchName: ''
    });
  };

  return {
    filteredAnimals,
    filters,
    updateFilter,
    clearFilters
  };
};