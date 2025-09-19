import React from 'react';
//===== assets =====//
import './AnimalDescr.scss';
//===== components =====//
import './AnimalDescr.scss';
import { IoLogoVk as VKIcon } from "react-icons/io5";
import { IoLogoTwitter as TwitterIcon } from "react-icons/io5";
import { FaOdnoklassniki as OdnoklassnikiIcon } from "react-icons/fa6";
import { FaLink as LinkIcon } from "react-icons/fa";
//===== utils =====//
import { animalAgeFormatting } from '../../../utils/animalAgeFormatting';

const AnimalDescr = ({
  animal
}) => {

  console.log(animal);

  const animalGender = (gender) => {
    const genderFormatted = 
      gender === 'Женский' ? 'Девочка' :
      gender === 'Мужской' ? 'Мальчик' :
      ''
      return genderFormatted; 
  }

  const animalCards = [
    {id: 1, value: animalGender(animal?.gender)},
    {id: 2, value: animal?.animalStatus},
    {id: 3, value: animal?.shelterInfo?.city}
  ]

  return (
    <section className="AnimalDescr">
      <div className="AnimalDescr__container">
        <div className="AnimalDescr__header">
          <span className="AnimalDescr__header-descr">Возраст:</span>
          <span className="AnimalDescr__header-title">{animalAgeFormatting(animal?.age)}</span>
        </div>
        <div className="AnimalDescr__cards-group">
          {animalCards.map((card) => (
            <article 
              key={card.id}
              className="AnimalDescr__card"
            >
              <span className="AnimalDescr__card-text">{card.value}</span>
            </article>
          ))}
        </div>
        <div className="AnimalDescr__animal-descr">
          {animal?.animalDescr}
        </div>
        <div className="AnimalDescr__social-netw-group">
          <span className="AnimalDescr__social-netw-title">Поделиться:</span>
          <div className="SocialNetworksIcons__group">
              <VKIcon className='icon' />
              <TwitterIcon className='icon' />
              <OdnoklassnikiIcon className='icon' />
              <LinkIcon className='icon' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimalDescr;