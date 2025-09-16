import React from 'react';
//===== assets =====//
import './AnimalList.scss';

const AnimalList = ({
  animals
}) => {

  // const animalsFormatted = 
  console.log(animals);


  return (
    <section className="AnimalList">
      <div className="AnimalList__wrapper">
        <div className="AnimalList__container">
          <div className="AnimalList__content">
            <div className="AnimalList__photo-group">
              {animals?.map((animal) => (
                <article
                  key={animal.id}
                  className="AnimalList__item"
                >
                  <img src={animal?.animalPhotosData?.photos[0]?.url} alt="Фото животного" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimalList;