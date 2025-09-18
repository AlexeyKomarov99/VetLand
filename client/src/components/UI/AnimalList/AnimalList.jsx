import React, { useState } from 'react';
import './AnimalList.scss';
import { LuArrowRight as ArrowRight } from "react-icons/lu";

const AnimalList = ({ animals }) => {
  const [hoveredAnimal, setHoveredAnimal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 27; // 3 строки по 9 элементов

  // Проверка на пустой список
  if (!animals || animals.length === 0) {
    return (
      <section className="AnimalList">
        <div className="AnimalList__wrapper">
          <div className="AnimalList__container">
            <div className="AnimalList__content">
              <div className="AnimalList__empty">
                К сожалению по выбранным фильтрам ничего не найдено
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleMouseEnter = (animalId) => {
    setHoveredAnimal(animalId);
  }

  const handleMouseLeave = () => {
    setHoveredAnimal(null);
  }

  const loadMorePhotos = () => {
    setCurrentPage(prev => prev + 1);
  }

  const currentPhotos = animals?.slice(0, currentPage * photosPerPage) || [];
  const totalPhotos = animals?.length || 0;
  const remainingPhotos = Math.max(0, totalPhotos - currentPage * photosPerPage);

  // Разбиваем фото на группы по 9 для каждой горизонтальной линии
  const photoGroups = [];
  for (let i = 0; i < currentPhotos.length; i += 9) {
    photoGroups.push(currentPhotos.slice(i, i + 9));
  }

  // Функция для определения типа линии с циклом из 4 элементов
  const getLineType = (groupIndex) => {
    const cycle = groupIndex % 4; // Цикл из 4 линий
    
    // Правильная последовательность: 0, 1, 2, 1, 0, 1, 2, 1, ...
    if (cycle === 0) return 0; // слева
    if (cycle === 1) return 1; // центр
    if (cycle === 2) return 2; // справа
    if (cycle === 3) return 1; // центр
  };

  // Функция для рендеринга одной горизонтальной линии
  const renderPhotoLine = (photos, groupIndex) => {
    const lineType = getLineType(groupIndex);
    
    if (lineType === 0) {
      // Большая фото слева
      return (
        <div className="AnimalList__line AnimalList__line--type-1">
          <div className="AnimalList__large-container">
            {photos[0] && renderPhotoItem(photos[0], groupIndex * 9 + 0, true)}
          </div>
          <div className="AnimalList__small-grid">
            {photos.slice(1, 5).map((photo, index) => 
              renderPhotoItem(photo, groupIndex * 9 + index + 1, false)
            )}
          </div>
          <div className="AnimalList__small-grid">
            {photos.slice(5, 9).map((photo, index) => 
              renderPhotoItem(photo, groupIndex * 9 + index + 5, false)
            )}
          </div>
        </div>
      );
    } 
    else if (lineType === 1) {
      // Большая фото в центре
      return (
        <div className="AnimalList__line AnimalList__line--type-2">
          <div className="AnimalList__small-grid">
            {photos.slice(0, 4).map((photo, index) => 
              renderPhotoItem(photo, groupIndex * 9 + index, false)
            )}
          </div>
          <div className="AnimalList__large-container">
            {photos[4] && renderPhotoItem(photos[4], groupIndex * 9 + 4, true)}
          </div>
          <div className="AnimalList__small-grid">
            {photos.slice(5, 9).map((photo, index) => 
              renderPhotoItem(photo, groupIndex * 9 + index + 5, false)
            )}
          </div>
        </div>
      );
    }
    else {
      // Большая фото справа (lineType === 2)
      return (
        <div className="AnimalList__line AnimalList__line--type-3">
          <div className="AnimalList__small-grid">
            {photos.slice(0, 4).map((photo, index) => 
              renderPhotoItem(photo, groupIndex * 9 + index, false)
            )}
          </div>
          <div className="AnimalList__small-grid">
            {photos.slice(4, 8).map((photo, index) => 
              renderPhotoItem(photo, groupIndex * 9 + index + 4, false)
            )}
          </div>
          <div className="AnimalList__large-container">
            {photos[8] && renderPhotoItem(photos[8], groupIndex * 9 + 8, true)}
          </div>
        </div>
      );
    }
  };

  // Рендер отдельного фото (без изменений)
  const renderPhotoItem = (animal, index, isLarge) => {
    if (!animal) return null;
    
    return (
      <article
        key={`${animal.id}-${index}`}
        className={`AnimalList__item ${isLarge ? 'AnimalList__item--large' : 'AnimalList__item--small'}`}
        onMouseEnter={() => handleMouseEnter(animal.id)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="AnimalList__image-container">
          <img 
            src={animal?.animalPhotosData?.photos[0]?.url} 
            alt={`Фото животного ${animal.animalName}`} 
            className="AnimalList__image"
          />
          <div 
            className={`AnimalList__overlay ${hoveredAnimal === animal.id ? 'AnimalList__overlay--visible' : ''}`}
          >
            <div className="AnimalList__info">
              <div className="AnimalList__name">{animal.animalName}</div>
              <div className="AnimalList__age-group">
                <div className="AnimalList__age-left">
                  <span className="AnimalList__age-descr">Возраст:</span>
                  <span className="AnimalList__age"></span>
                </div>
                <ArrowRight className='arrow-right' />
              </div>
              <div className="AnimalList__btn-group">
                <div className="AnimalList__take-animal">
                  Забрать
                </div>
                <div className="AnimalList__help-animal">
                  Помочь
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="AnimalList">
      <div className="AnimalList__wrapper">
        <div className="AnimalList__container">
          <div className="AnimalList__content">
            <div className="AnimalList__photo-grid">
              {photoGroups.map((group, index) => (
                <React.Fragment key={index}>
                  {renderPhotoLine(group, index)}
                </React.Fragment>
              ))}
            </div>
            
            {remainingPhotos > 0 && (
              <div className="AnimalList__load-more">
                <button 
                  className="AnimalList__load-more-btn"
                  onClick={loadMorePhotos}
                >
                  Показать еще <span className="AnimalList__load-more-text-decor">{Math.min(photosPerPage, remainingPhotos)}</span> из <span className="AnimalList__load-more-text-decor">{remainingPhotos}</span> оставшихся
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimalList;