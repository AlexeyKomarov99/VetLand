import React from 'react';
//===== assets =====//
import './HowCanHelp.scss';
//===== components =====//
import { Link } from 'react-router-dom';
import { BsArrowRightCircle as ArrowRightCircleIcon } from "react-icons/bs";
import VideoDogAndWomen from '../../../assets/video/mixkit-a-woman-with-her-dog-watching-the-sunset.mp4';
import { IoLogoVk as VKIcon } from "react-icons/io5";
import { IoLogoTwitter as TwitterIcon } from "react-icons/io5";
import { FaOdnoklassniki as OdnoklassnikiIcon } from "react-icons/fa6";
import { FaLink as LinkIcon } from "react-icons/fa";

const HowCanHelp = () => {
  return (
    <section className="HowCanHelp">
      <div className="HowCanHelp__wrapper">
        <div className="HowCanHelp__container">
          <div className="HowCanHelp__content">
            
            <div className="HowCanHelp__video-wrapper">
              <video 
                src={VideoDogAndWomen} 
                className="HowCanHelp__video"
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>

            <div className="HowCanHelp__body-content">
              <div className="HowCanHelp__body-wrapper">
                <div className="HowCanHelp__content">
                  
                  <div className="HowCanHelp__header">
                    <div className="HowCanHelp__header-text">
                      Чем я могу <br /> помочь?
                    </div>
                  </div>

                  <div className="HowCanHelp__body">
                    <div className="HowCanHelp__body-descr">
                      Любая помощь <br /> очень важна для нас:
                    </div>
                  </div>

                  <div className="HowCanHelp__footer">
                    
                    <Link 
                      className="HowCanHelp__card-item card-transform"
                      to='/animals'
                    >
                      <div className="HowCanHelp__card-header">Забрать домой</div>
                      <div className="HowCanHelp__card-footer">
                        <ArrowRightCircleIcon className='icon' />
                      </div>
                    </Link>

                    <Link 
                      className="HowCanHelp__card-item card-transform"
                      to='/help-animals'
                    >
                      <div className="HowCanHelp__card-header">Помочь фонду</div>
                      <div className="HowCanHelp__card-footer">
                        <ArrowRightCircleIcon className='icon' />
                      </div>
                    </Link>

                    <Link 
                      className="HowCanHelp__card-item card-transform"
                      to='animals'
                    >
                      <div className="HowCanHelp__card-header">Помочь питомцу</div>
                      <div className="HowCanHelp__card-footer">
                        <ArrowRightCircleIcon className='icon' />
                      </div>
                    </Link>

                    <div className="HowCanHelp__card-item">
                      <div className="HowCanHelp__card-header">Рассказать про наш фонд друзьям</div>
                      <div className="HowCanHelp__icons-group">
                        <VKIcon className='icon' />
                        <TwitterIcon className='icon' />
                        <OdnoklassnikiIcon className='icon' />
                        <LinkIcon className='icon' />
                      </div>
                    </div>

                    <div className="HowCanHelp__card-item">
                      <div className="HowCanHelp__card-header">Подарить сертификат</div>
                      <div className="HowCanHelp__card-footer card-footer-ozon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="16" viewBox="0 0 74 16" fill="none" className='icon-ozon'>
                          <path d="M30.6219 11.9047H24.2981L32.3714 1.22175C32.5473 0.987172 32.4985 0.645083 32.2639 0.469151C32.1759 0.400733 32.0586 0.361637 31.9414 0.361637H20.2614C19.2352 0.361637 18.3946 1.2022 18.3946 2.22847C18.3946 3.25473 19.2352 4.0953 20.2614 4.0953H25.5101L17.4075 14.788C17.2217 15.0226 17.2706 15.3549 17.5052 15.5406C17.6029 15.6188 17.7202 15.6579 17.8375 15.6481H30.6121C31.6384 15.5993 32.43 14.7196 32.3812 13.6836C32.3323 12.7257 31.5699 11.9633 30.6121 11.9145V11.9047H30.6219ZM71.438 0.361637C70.4117 0.361637 69.5712 1.2022 69.5712 2.22847V8.49358L59.4844 0.488699C59.2596 0.302993 58.9175 0.332315 58.7318 0.566891C58.6536 0.664631 58.6145 0.781918 58.6145 0.90898V13.7813C58.6145 14.8076 59.4551 15.6481 60.4814 15.6481C61.5076 15.6481 62.3482 14.8173 62.3482 13.7813V7.51619L72.4349 15.5308C72.6695 15.7166 73.0116 15.6775 73.1973 15.4429C73.2755 15.3451 73.3146 15.2279 73.3146 15.1106V2.22847C73.3048 1.19243 72.474 0.361637 71.438 0.361637ZM44.7453 12.2566C40.474 12.2566 37.2877 10.0086 37.2877 7.99511C37.2877 5.98167 40.4838 3.73366 44.7453 3.73366C49.0165 3.73366 52.2028 5.98167 52.2028 7.99511C52.2028 10.0086 49.0263 12.2566 44.7453 12.2566ZM44.7453 0C38.5681 0 33.5541 3.57728 33.5541 7.99511C33.5541 12.413 38.5681 15.9902 44.7453 15.9902C50.9224 15.9902 55.9365 12.413 55.9365 7.99511C55.9365 3.57728 50.9224 0 44.7453 0ZM8.00489 12.2663C5.64936 12.2663 3.73366 10.3604 3.73366 8.00489C3.73366 5.64936 5.63958 3.73366 7.99511 3.73366C10.3506 3.73366 12.2663 5.63958 12.2663 7.99511V8.00489C12.2663 10.3506 10.3604 12.2566 8.00489 12.2663ZM8.00489 0C3.58705 0 0.00977398 3.57728 0 7.99511C0 12.413 3.57728 15.9902 7.99511 16C12.4129 16 15.9902 12.4227 16 8.00489V7.99511C15.9902 3.57728 12.4129 0 8.00489 0Z" fill="currentColor "></path>
                        </svg>
                      </div>
                    </div>

                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HowCanHelp;