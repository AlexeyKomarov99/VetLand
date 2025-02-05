import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//===== Ресурсы =====//
import { MdSubdirectoryArrowRight as ArrowRightBottomIcon } from "react-icons/md";
import { IoMdArrowDropdownCircle as ArrowDownCircleIcon } from "react-icons/io";
import { FaArrowRight as ArrowRightIcon } from "react-icons/fa6";
import { IoIosSearch as SearchIcon } from "react-icons/io";
import './Animals.scss';

const animalsData = []

const Animals = () => {
  
  // Данные о животоных
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  // Фокус нажатия кнопки по поиску животных по их типу
  const [buttonClickAnimal, setbuttonClickAnimal] = useState('animal');
  // Фокус нажатия кнопки по фильтрации поиска животных
  const [windowFilterAnimal, setWindowFilterAnimal] = useState(null);
  // Ссылки на модальные окна
  const ageModalRef = useRef(null);
  const peculiaritiesModalRef = useRef(null);

  // Обработчик нажатия кнопок для фокуса активной кнопки
  const handleButtonClickAnimal = (buttonName) => {
    setbuttonClickAnimal((prevState) => {
      const newButtonFocus = prevState !== buttonName ? buttonName : prevState;
      return newButtonFocus;
    })
  }

  // Обработчик нажатия кнопок по открытию модальных окон
  const handleWindowFilterAnimal = (windowName) => {
    setWindowFilterAnimal((prevState) => (prevState === windowName ? null : windowName));
  }

  // Обработчик для проверки клика извне
  const handleClickOutside = (event) => {
    if (
      ageModalRef.current &&
      !ageModalRef.current.contains(event.target) &&
      windowFilterAnimal === 'age'
    ) {
      setWindowFilterAnimal(null);
    }

    if (
      peculiaritiesModalRef.current &&
      !peculiaritiesModalRef.current.contains(event.target) &&
      windowFilterAnimal === 'peculiarities'
    ) {
      setWindowFilterAnimal(null);
    }
  };

  // 
  useEffect(() => {
    if (windowFilterAnimal) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    // Очистка обработчика при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [windowFilterAnimal]);



  // Открытие МО "Возраст животного"
  const [windowAnimalAge, setWindowAnimalAge] = useState(false);
  const openWindowAnimalAge = () => setWindowAnimalAge(true);
  const closeWindowAnimalAge = () => setWindowAnimalAge(false);

  // Открытие МО "Особенности животного"
  const [windowAnimalPeculiarities, setWindowAnimalPeculiarities] = useState(true);
  const openWindowAnimalPeculiarities = () => setWindowAnimalPeculiarities(false);
  const closeWindowAnimalPeculiarities = () => setWindowAnimalPeculiarities(true);

  // Фильтры
  const [ageFilter, setAgeFilter] = useState([]);
  const [featuresFilter, setFeaturesFilter] = useState([]); // Подумать над названием

  // Получение данных с сервера
  useEffect(() => {
    // Здесь вы можете использовать fetch или axios для получения данных
    // Пример с использованием статических данных
    setAnimals(animalsData); // animalsData - массив животных, приведенный выше
    setFilteredAnimals(animalsData);
  }, []);

  // Функция для применения фильтров
  useEffect(() => {
    let filtered = animals;

    // Фильтрация по возрасту
    if (ageFilter.length > 0) {
      filtered = filtered.filter(animal => {
        return ageFilter.some(filter => {
          switch(filter) {
            case 'до 3 месяцев':
              return animal.age < 0.25;
            case 'до 1 года':
              return animal.age < 1;
            case '2-5 лет':
              return animal.age >=2 && animal.age <=5;
            case 'старше 5 лет':
              return animal.age >5;
            default:
              return true;
          }
        });
      });
    }

    // Фильтрация по особенностям
    if (featuresFilter.length > 0) {
      filtered = filtered.filter(animal => {
        return featuresFilter.every(filter => {
          switch(filter) {
            case 'физические особенности':
              return animal.physicalFeatures && animal.physicalFeatures.length > 0;
            case 'находится в Москве':
              return animal.location === 'Москва';
            case 'находится на лечении':
              return animal.animalStatus_id === 2;
            default:
              return true;
          }
        });
      });
    }

    setFilteredAnimals(filtered);
  }, [ageFilter, featuresFilter, animals]);

  // Обработчики изменения фильтров
  const toggleAgeFilter = (filter) => {
    setAgeFilter(prev => {
      if (prev.includes(filter)) {
        return prev.filter(f => f !== filter);
      } else {
        return [...prev, filter];
      }
    });
  };

  const toggleFeaturesFilter = (filter) => {
    setFeaturesFilter(prev => {
      if (prev.includes(filter)) {
        return prev.filter(f => f !== filter);
      } else {
        return [...prev, filter];
      }
    });
  };

  return (
    <div className='Animals'>

      {/* Шапка */}
      <section className="Introduction">
        <div className="Introduction__wrapper">
          <div className="Introduction__container">

            <div className="Introduction__header">
              <div className="Introduction__header-nav">
                <Link to='/' className='Introduction__link-main'>
                  <span className="Introduction__link-text">Главная</span>
                  <ArrowRightBottomIcon className='icon' />
                </Link>
                <span className="Introduction__current-page">Наши подопечные</span>
              </div>
              <div className="Introduction__header-content">
                <h2 className="Introduction__header-title">Наши подопечные</h2>
                <span className="Introduction__header-descr">
                Питомцы, <br />
                у которых пока <br />
                нет своего <br />
                человека <br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Настройки поиска и фильтрации */}
      <section className="SearchSettings">
        <div className="SearchSettings__wrapper">
          <div className="SearchSettings__container">

            <div className="SearchSettings__content">
              
              <div className="SearchSettings__btn-group">
                
                {/* Группа кнопок  для отображения животных по их типу*/}
                <div className="SearchSettings__btn-animal-group">
                  {/* Все животные */}
                  <button 
                    className={`SearchSettings__btn-item ${buttonClickAnimal === 'animal' ? 'active' : ''}`}
                    onClick={() => handleButtonClickAnimal('animal')}
                    >
                      Все животные
                  </button>
                  
                  {/* Собаки */}
                  <button 
                    className={`SearchSettings__btn-item ${buttonClickAnimal === 'dog' ? 'active' : ''}`}
                    onClick={() => handleButtonClickAnimal('dog')}
                    >
                      Собаки
                  </button>
                  
                  {/* Кошки */}
                  <button 
                    className={`SearchSettings__btn-item ${buttonClickAnimal === 'cat' ? 'active' : ''}`}
                    onClick={() => handleButtonClickAnimal('cat')}
                    >
                      Кошки
                  </button>
                </div>
                
                {/* Группа кнопок для фильтраци животных по их особенностям */}
                <div 
                  className="SearchSettings__btn-animal-characteristics-group"
                >

                  {/* Возраст */}
                  <div className="SearchSettings__btn-mw-group-age">
                    
                    <button 
                      className={`SearchSettings__btn-item SearchSettings__btn-with-icon ${windowFilterAnimal === 'age' ? 'active-red' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation(); // Предотвращает всплытие события
                        handleWindowFilterAnimal('age')
                      }}
                    >
                      <span className="SearchSettings__btn-text">Возраст</span>
                      <ArrowDownCircleIcon className='SearchSettings__btn-icon' />
                    </button>
                    {
                      windowFilterAnimal ==='age' && (
                      <div 
                        ref={ageModalRef}
                        className={`SearchSettings__window-animal-age modal`}
                      >
                        <div className="SearchSettings__window-animal-age-wrapper">
                          <div className="SearchSettings__window-animal-age-container">
                            <div className="SearchSettings__window-animal-age-content">
                              <div className="SearchSettings__window-animal-age-header">
                                <label className="SearchSettings__window-animal-age-label">
                                  <input
                                    className='SearchSettings__window-animal-age-input'
                                    type="checkbox"
                                    value="до 3 месяцев"
                                    checked={ageFilter.includes('до 3 месяцев')}
                                    onChange={() => toggleAgeFilter('до 3 месяцев')}
                                  />
                                  <span className="SearchSettings__window-animal-age-text">до 3 месяцев</span>
                                </label>
                                <label className="SearchSettings__window-animal-age-label">
                                  <input
                                    className='SearchSettings__window-animal-age-input'
                                    type="checkbox"
                                    value="до 1 года"
                                    checked={ageFilter.includes('до 1 года')}
                                    onChange={() => toggleAgeFilter('до 1 года')}
                                  />
                                  <span className="SearchSettings__window-animal-age-text">до 1 года</span>
                                </label>
                                <label className="SearchSettings__window-animal-age-label">
                                  <input
                                    className='SearchSettings__window-animal-age-input'
                                    type="checkbox"
                                    value="2-5 лет"
                                    checked={ageFilter.includes('2-5 лет')}
                                    onChange={() => toggleAgeFilter('2-5 лет')}
                                  />
                                  <span className="SearchSettings__window-animal-age-text">2-5 лет</span>
                                </label>
                                <label className="SearchSettings__window-animal-age-label">
                                  <input
                                    className='SearchSettings__window-animal-age-input'
                                    type="checkbox"
                                    value="старше 5 лет"
                                    checked={ageFilter.includes('старше 5 лет')}
                                    onChange={() => toggleAgeFilter('старше 5 лет')}
                                  />
                                  <span className="SearchSettings__window-animal-age-text">старше 5 лет</span>
                                </label>
                              </div>
                              <div className="SearchSettings__window-animal-age-footer">
                                <button 
                                  className="SearchSettings__window-animal-age-button"
                                >
                                  Применить
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    }

                  </div>

                  {/* Особенности */}
                  <div className="SearchSettings__btn-mw-group-peculiarities">
                    <button 
                      className={`SearchSettings__btn-item SearchSettings__btn-with-icon ${windowFilterAnimal === 'peculiarities' ? 'active-red' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWindowFilterAnimal('peculiarities'); // Предотвращает всплытие события
                      }}
                    >
                      <span className="SearchSettings__btn-text">Особенности</span>
                      <ArrowDownCircleIcon className='SearchSettings__btn-icon' />
                    </button>
                    {
                      windowFilterAnimal === 'peculiarities' && (
                      <div 
                        className={`SearchSettings__window-animal-peculiarities modal`}
                        ref={peculiaritiesModalRef}
                      >
                        <div className="SearchSettings__window-animal-peculiarities-wrapper">
                          <div className="SearchSettings__window-animal-peculiarities-container">
                            <div className="SearchSettings__window-animal-peculiarities-content">
                              <div className="SearchSettings__window-animal-peculiarities-header">
                                
                                <label className="SearchSettings__window-animal-peculiarities-label">
                                  <input
                                    className='SearchSettings__window-animal-peculiarities-input'
                                    type="checkbox"
                                    value="физические особенности"
                                    checked={featuresFilter.includes('физические особенности')}
                                    onChange={() => toggleFeaturesFilter('физические особенности')}
                                  />
                                  <span className="SearchSettings__window-animal-peculiarities-text">физические особенности</span>
                                </label>

                                <label className="SearchSettings__window-animal-peculiarities-label">
                                  <input 
                                    className='SearchSettings__window-animal-peculiarities-input'
                                    type="checkbox"
                                    value="находится в Москве"
                                    checked={featuresFilter.includes('находится в Москве')}
                                    onChange={() => toggleFeaturesFilter('находится в Москве')}
                                  />
                                  <span className="SearchSettings__window-animal-peculiarities-text">находится в Москве</span>
                                </label>

                                <label className="SearchSettings__window-animal-peculiarities-label">
                                  <input
                                    className='SearchSettings__window-animal-peculiarities-input'
                                    type="checkbox"
                                    value="находится на лечении"
                                    checked={featuresFilter.includes('находится на лечении')}
                                    onChange={() => toggleFeaturesFilter('находится на лечении')}
                                  />
                                  <span className="SearchSettings__window-animal-peculiarities-text">находится на лечении</span>
                                </label>

                              </div>
                              <div className="SearchSettings__window-animal-peculiarities-footer">
                                <button className="SearchSettings__window-animal-peculiarities-button">Применить</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    }

                  </div>

                </div>
              </div>

              <div className="SearchSettings__search-field">
                <div className="SearchSettings__search-input-grp">
                  <SearchIcon className='SearchSettings__search-icon' />
                  <input 
                    className="SearchSettings__search-input" 
                    type="text"
                    placeholder='Поиск по кличке'
                  />
                </div>
                <button className="SearchSettings__search-btn">
                  <ArrowRightIcon className='SearchSettings__search-arrow-icon' />
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Список животных */}
      <section className="ListAnimal">
        <div className="ListAnimal__wrapper">
          <div className="ListAnimal__container">
            <div className="ListAnimal__content">
              {
                filteredAnimals.length > 0 ? (
                  <></>
                ) : (
                  <div className="ListAnimal__not-found-content">
                    <div className="ListAnimal__descr-wrapper">
                      <div className="ListAnimal__descr">
                        К сожалению по выбранным фильтрам ничего не найдено
                      </div>
                    </div>
                    <div className="ListAnimal__look-other-animal">
                      <h2 className="ListAnimal__look-other-animal-title">Посмотрите на других наших питомцев</h2>
                      <div className="ListAnimal__look-other-animal-group">
                        список животных
                      </div>
                    </div>
                    
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Animals;
