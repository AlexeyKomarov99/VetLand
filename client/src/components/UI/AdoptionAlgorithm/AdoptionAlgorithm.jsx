import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//===== assets =====//
import './AdoptionAlgorithm.scss';
import { algorithm } from './data';

const AdoptionAlgorithm = ({
    animal
}) => {

    return (
        <section className="AdoptionAlgorithm">
            <div className="AdoptionAlgorithm__wrapper">
                <div 
                    className="AdoptionAlgorithm__container"
                    style={animal ? {padding: '1rem 0 1rem'} : null}
                >
                    <div className="AdoptionAlgorithm__content">
                        <div className={`${animal ? 'AdoptionAlgorithm__algorithm-animal-info' : 'AdoptionAlgorithm__algorithm'} `}>
                            {algorithm.map((step, index) => (
                                <article 
                                    key={step.id}
                                    className={
                                            animal
                                                ? `AdoptionAlgorithm__item ${
                                                    index === 0 || index === 1 
                                                        ? `top-${index}` 
                                                        : index >= 2 && index < 5
                                                            ? `medium-${index}`
                                                            : index === 5
                                                                ? `bottom-${index}`
                                                                : ''
                                                }`
                                                : `AdoptionAlgorithm__item ${
                                                index === 0 
                                                    ? 'AdoptionAlgorithm__item--first' 
                                                    : index < 4 
                                                        ? 'AdoptionAlgorithm__item--top' 
                                                        : 'AdoptionAlgorithm__item--bottom'
                                                }`
                                        }    
                                >
                                    <div className="AdoptionAlgorithm__header">
                                        <span className="AdoptionAlgorithm__number">{step.id}</span>
                                    </div>
                                    <div className="AdoptionAlgorithm__body">
                                        <span className="AdoptionAlgorithm__title">{step.title}</span>
                                        <span className="AdoptionAlgorithm__descr-group">
                                            <div className="AdoptionAlgorithm__descr">{step.descr}</div>
                                            {animal && index === 1 ? (
                                                <Link
                                                    to={`${step.link}`}
                                                    className='AdoptionAlgorithm__link'
                                                >
                                                    {step.icon}
                                                </Link>
                                            ) : (
                                                <Link
                                                    to={`${step.link}`}
                                                    className='AdoptionAlgorithm__link'
                                                >
                                                    {step.icon}
                                                </Link>
                                            )}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdoptionAlgorithm;