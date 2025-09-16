import React from 'react';
import { Link } from 'react-router-dom';
//===== assets =====//
import './HowCanHelp.scss';
import { FaArrowRight as ArrowRightIcon } from "react-icons/fa6";

const HowCanHelp = () => {
  return (
    <section className="HowCanHelp">
      <div className="HowCanHelp__wrapper">
        <div className="HowCanHelp__container">
          <div className="HowCanHelp__content">
            
            <h2 className="HowCanHelp__header">Чем я могу помочь?</h2>

            <div className="HowCanHelp__body">
              <div className="HowCanHelp__body-title">
                Любая помощь <br /> очень важна для нас:
              </div>

              <div className="HowCanHelp__body-cards">
                <Link 
                  className="HowCanHelp__card-item"
                  to='/questionnaire'
                >
                  <div className="HowCanHelp__card-header">Забрать домой</div>
                  <div className="HowCanHelp__card-footer">
                    <ArrowRightIcon className='icon' />
                  </div>
                </Link>

                <Link 
                  className="HowCanHelp__card-item"
                  to='/help-animals'
                >
                  <div className="HowCanHelp__card-header">Помочь фонду</div>
                  <div className="HowCanHelp__card-footer">
                    <ArrowRightIcon className='icon' />
                  </div>
                </Link>

                <Link 
                  className="HowCanHelp__card-item"
                  to='/help-animals'
                >
                  <div className="HowCanHelp__card-header">Помочь животному</div>
                  <div className="HowCanHelp__card-footer">
                    <ArrowRightIcon className='icon' />
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HowCanHelp;