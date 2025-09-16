import React from 'react';
//===== assets =====//
import './HowWeLive.scss';

const HowWeLive = () => {
  return (
    <section className="HowWeLive">
      <div className="HowWeLive__wrapper">
        <div className="HowWeLive__container">
          <div className="HowWeLive__content">
            <div className="HowWeLive__content-wrapper">
              <div className="HowWeLive__content-text">
                <h2 className="HowWeLive__title">Как мы живем</h2>
                <div className="HowWeLive__descr">
                  Нам важно, чтобы наши животные больше никогда не попали 
                  в беду. Каждый день им необходим уход, качественное питание 
                  и просто человеческое внимание. Наша деревня нуждается в 
                  ремонте, оплате коммунальных услуг и вашей поддержке.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeLive;