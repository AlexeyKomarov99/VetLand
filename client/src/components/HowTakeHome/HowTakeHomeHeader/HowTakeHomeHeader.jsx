import React from 'react';
//===== assets =====//
import './HowTakeHomeHeader.scss';

const HowTakeHomeHeader = () => {
  return (
    <section className="HowTakeHomeHeader">
        <div className="HowTakeHomeHeader__wrapper">
            <div className="HowTakeHomeHeader__container">
                <div className="HowTakeHomeHeader__content">

                    <div className="HowTakeHomeHeader__content-title">Анкета будущего хозяина</div>
                    <div className="HowTakeHomeHeader__content-descr">
                        <div className="HowTakeHomeHeader__content-item">
                        У каждого животного, попавшего к нам, своя грустная история. Чтобы наши 
                        подопечные больше никогда не столкнулись с бедой, мы с максимальной тщательностью 
                        подходим к выбору хозяев для них. Мы будем задавать много вопросов, в том числе 
                        неудобных (и, возможно, не один раз). И просим отнестись к этому с терпением и пониманием.
                        </div>
                        <div className="HowTakeHomeHeader__content-item">
                        Мы доверяем питомцев только тем, в ком абсолютно уверены, поэтому процесс 
                        собеседований и согласований может быть небыстрым. Если мы поймем, что пока 
                        вы не готовы стать хозяином, то будем вынуждены отказать вам. Мы стараемся менять 
                        отношение людей к животным и верим, что скоро ответственных владельцев станет больше!
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default HowTakeHomeHeader;