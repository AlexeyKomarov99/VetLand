import React from 'react';
//===== assets =====//
import './AnimalPhotos.scss';

const AnimalPhotos = ({
    animal
}) => {
    const animalPhotos = animal?.animalPhotosData?.photos;

    // Проверяем, есть ли фотографии
    if (!animalPhotos || animalPhotos.length === 0) {
        return (
            <section className="AnimalPhotos">
                <div className="animal-photos-empty">
                    Фотографии отсутствуют
                </div>
            </section>
        );
    }

    return (
        <section className="AnimalPhotos">
            <div className="AnimalPhotos__container">
                <div className="animal-photos-grid">

                    <div className="animal-photo-item large-photo">
                        <img 
                            src={animalPhotos[0]?.url} 
                            alt={`Фото животного 1`}
                            loading="lazy"
                        />
                    </div>

                    {animalPhotos[1] && (
                        <div className="animal-photo-item photo-3">
                            <img 
                                src={animalPhotos[1]?.url} 
                                alt={`Фото животного 2`}
                                loading="lazy"
                            />
                        </div>
                    )}

                    {animalPhotos[2] && (
                        <div className="animal-photo-item photo-6">
                            <img 
                                src={animalPhotos[2]?.url} 
                                alt={`Фото животного 3`}
                                loading="lazy"
                            />
                        </div>
                    )}

                    {animalPhotos.slice(3).map((photo, index) => (
                        <div key={index + 3} className="animal-photo-item">
                            <img 
                                src={photo?.url} 
                                alt={`Фото животного ${index + 4}`}
                                loading="lazy"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default AnimalPhotos;