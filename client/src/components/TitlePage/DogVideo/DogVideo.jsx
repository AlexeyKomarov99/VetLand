import React from 'react';
//===== assets =====//
import './DogVideo.scss';
//===== components =====//
import { Link } from 'react-router-dom';
import SmilingDogVideo from '../../../assets/video/smiling-dog.mp4';


const DogVideo = ({
  id
}) => {
  return (
    <section 
      id={id}
      className="DogVideo"
    >
      <div className="DogVideo__wrapper">
        <div className="DogVideo__container">
          <div className="DogVideo__content">

            <div className="DogVideo__video-wrapper">
              <video 
                src={SmilingDogVideo} 
                className="DogVideo__video"
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>

            <div className="DogVideo__content-body">
              <div className="DogVideo__text">И еще более</div>
              <div className="DogVideo__number">1000</div>
              <div className="DogVideo__descr">питомцев готовы <br /> стать домашними</div>
              <Link to='/animals' className='DogVideo__Link'>
                <span className="DogVideo__link-descr">Смотреть всех</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none" className='icon'>
                  <path d="M76.0006 75.9996H1.68555V65.4692H58.7734L1.68555 9.97773L10.0252 1.68457L65.3841 57.0973V1.68457H76.0006V75.9996Z" stroke="white" strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default DogVideo;