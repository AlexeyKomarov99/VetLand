import React, {useState, useEffect, useRef} from 'react';
//===== assets =====//
import './MainAnimalFilter.scss';
import {animalTypes, ageRange, animalStatus} from './data';
import { MdArrowDropDownCircle as CircleArrowIcon } from "react-icons/md";

const MainAnimalFilter = () => {
    const [showAgeModal, setShowAgeModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);
    
    // Refs для модальных окон
    const ageModalRef = useRef(null);
    const statusModalRef = useRef(null);

    // Функция для переключения модального окна возраста
    const toggleAgeModal = () => {
        setShowAgeModal(!showAgeModal);
        // Закрываем другое модальное окно при открытии текущего
        if (showStatusModal) setShowStatusModal(false);
    };

    // Функция для переключения модального окна особенностей
    const toggleStatusModal = () => {
        setShowStatusModal(!showStatusModal);
        // Закрываем другое модальное окно при открытии текущего
        if (showAgeModal) setShowAgeModal(false);
    };

    // Функция для закрытия всех модальных окон
    const closeAllModals = (e) => {
        e.stopPropagation(); // Предотвращаем всплытие события
        setShowAgeModal(false);
        setShowStatusModal(false);
    };

    // Эффект для обработки кликов вне модальных окон
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Проверяем, был ли клик вне модального окна возраста и не по его триггеру
            if (showAgeModal && 
                ageModalRef.current && 
                !ageModalRef.current.contains(event.target) &&
                !event.target.closest('.MainAnimalFilter__age-range')) {
                setShowAgeModal(false);
            }
            
            // Проверяем, был ли клик вне модального окна особенностей и не по его триггеру
            if (showStatusModal && 
                statusModalRef.current && 
                !statusModalRef.current.contains(event.target) &&
                !event.target.closest('.MainAnimalFilter__status')) {
                setShowStatusModal(false);
            }
        };

        // Добавляем обработчик клика при монтировании компонента
        document.addEventListener('mousedown', handleClickOutside);
        
        // Убираем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showAgeModal, showStatusModal]);

    // Останавливаем всплытие события при клике внутри модального окна
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className="MainAnimalFilter">

            <div className="MainAnimalFilter__animal-types">
                {animalTypes.map((type) => (
                    <article
                        key={type.id}
                        className="MainAnimalFilter__animal-type"
                    >
                        <span className="MainAnimalFilter__animal-type-name">{type.name}</span>
                    </article>
                ))}
            </div>

            <div 
                className="MainAnimalFilter__age-range"
                onClick={toggleAgeModal}
            >
                <div className="MainAnimalFilter__age-range-trigger">
                    <span className="MainAnimalFilter__age-range-text">Возраст</span>
                    <CircleArrowIcon className='MainAnimalFilter__age-range-icon' />
                </div>
                {showAgeModal && (
                    <div 
                        ref={ageModalRef}
                        className="MainAnimalFilter__age-range-mw"
                        onClick={handleModalClick} // Добавляем обработчик для предотвращения закрытия
                    >
                        <div className="MainAnimalFilter__range">
                            {ageRange.map((age) => (
                                <article
                                    key={age.id}
                                    className="MainAnimalFilter__age-item"
                                >
                                    <input 
                                        type="checkbox" 
                                        className="MainAnimalFilter__age-input" 
                                    />
                                    <span className="MainAnimalFilter__age-text">
                                        {age.age}
                                    </span>
                                </article>
                            ))}
                        </div>
                        <div 
                            className="MainAnimalFilter__age-btn"
                            onClick={closeAllModals}
                        >
                            Применить
                        </div>
                    </div>
                )}
            </div>

            <div 
                className="MainAnimalFilter__status"
                onClick={toggleStatusModal}
            >
                <div className="MainAnimalFilter__status-trigger">
                    <span className="MainAnimalFilter__title">Особенности</span>
                    <CircleArrowIcon className='MainAnimalFilter__status-icon' />
                </div>
                {showStatusModal && (
                    <div 
                        ref={statusModalRef}
                        className="MainAnimalFilter__status-mw"
                        onClick={handleModalClick} // Добавляем обработчик для предотвращения закрытия
                    >
                        <div className="MainAnimalFilter__status-group">
                            {animalStatus.map((status) => (
                                <article
                                    key={status.id}
                                    className="MainAnimalFilter__status-item"
                                >
                                    <input 
                                        type="checkbox"
                                        className="MainAnimalFilter__status-input" 
                                    />
                                    <span className="MainAnimalFilter__status-text">
                                        {status.name}
                                    </span>
                                </article>
                            ))}
                        </div>
                        <div 
                            className="MainAnimalFilter__status-btn"
                            onClick={closeAllModals}
                        >
                            Применить
                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}

export default MainAnimalFilter;