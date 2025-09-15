import React, { useState, useEffect, useRef } from 'react';
//===== assets =====//
import './VirtualAssistant.scss';
import {questions} from './data';
import { FaArrowRight as ArrowRight } from "react-icons/fa6";
import { FiEdit3 as EditIcon } from "react-icons/fi";
//===== components =====//
import PrivacyPolicy from '../../Common/PrivacyPolicy/PrivacyPolicy';
import CircularProgress from '../CircularProgress/CircularProgress';

const VirtualAssistant = ({
    setOwnerQuestionnaire,
    handleSubmitAdoptionForm
}) => {
    const [isQuestionnaireComplete, setIsQuestionnaireComplete] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Прокрутка к последнему сообщению
    const scrollToBottom = () => {
        requestAnimationFrame(() => {
            messagesEndRef.current?.scrollIntoView({ 
                behavior: "smooth",
                block: "nearest"
            });
        });
    };

    // Эффект для синхронизации userAnswers с ownerQuestionnaire
    useEffect(() => {
        if (Object.keys(userAnswers).length > 0) {
            const updatedQuestionnaire = {
                fullAddress: userAnswers[0] || '',
                profileSocialNetwork: userAnswers[1] || '',
                typeAndNameAnimalYouLiked: userAnswers[2] || '',
                doYouHavePet: userAnswers[3] || '',
                yourAttitudeTowardsCastrationSterilization: userAnswers[4] || '',
                whoWillLiveWithYou: userAnswers[5] || '',
                whoWillStayWithPetInCaseSeparation: userAnswers[6] || '',
                petCareDuringBusinessTrips: userAnswers[7] || '',
                reasonForRefusingLiveTogetherWithAnimal: userAnswers[8] || '',
                consentForFeedbackFromShelter: userAnswers[9] || '',
                howDidYouHearAboutOurFoundation: userAnswers[10] || '',
            };
            
            setOwnerQuestionnaire(updatedQuestionnaire);
        }
    }, [userAnswers, setOwnerQuestionnaire]);

    useEffect(() => {
        scrollToBottom();
    }, [userAnswers, currentQuestionIndex]);

    useEffect(() => {
        const isComplete = Object.keys(userAnswers).length === questions.length;
        setIsQuestionnaireComplete(isComplete);
    }, [userAnswers]);

    // Расчет прогресса
    const calculateProgress = () => {
        return Math.round((Object.keys(userAnswers).length / questions.length) * 100);
    };

    const progress = calculateProgress();

    // Обработка отправки ответа
    const handleSubmitAnswer = () => {
        if (currentAnswer.trim() === '') return;
        
        if (isEditing !== null) {
            // Редактирование существующего ответа
            setUserAnswers(prev => ({
                ...prev,
                [isEditing]: currentAnswer
            }));
            setIsEditing(null);
        } else {
            // Добавление нового ответа
            setUserAnswers(prev => ({
                ...prev,
                [currentQuestionIndex]: currentAnswer
            }));
        
            // Переход к следующему вопросу, если есть еще вопросы
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            }
        }

        setCurrentAnswer('');
    };

    // Редактирование ответа
    const handleEditAnswer = (index) => {
        setIsEditing(index);
        setCurrentAnswer(userAnswers[index] || '');
        inputRef.current?.focus();
    };

    // Обработка нажатия клавиши Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmitAnswer();
        }
    };

    return (
        <section className="VirtualAssistant">
            <div className="VirtualAssistant__content">
                <div className="VirtualAssistant__left">
                    <div className="VirtualAssistant__questionnaire-field">
                        
                        <div className="VirtualAssistant__dialog">

                            <div className="VirtualAssistant__messages">
                                {questions.map((question, index) => (
                                <React.Fragment key={index}>

                                    {index <= currentQuestionIndex && (
                                    <div className="VirtualAssistant__message VirtualAssistant__message--question">
                                        <div className="VirtualAssistant__bubble VirtualAssistant__bubble--question">
                                            <div className="VirtualAssistant__message-text">{question}</div>
                                        </div>
                                    </div>
                                    )}

                                    {userAnswers[index] && (
                                    <div className="VirtualAssistant__message VirtualAssistant__message--answer">
                                        <div className="VirtualAssistant__bubble VirtualAssistant__bubble--answer">
                                           <div className="VirtualAssistant__message-text">{userAnswers[index]}</div>
                                            <button 
                                                className="VirtualAssistant__edit-btn"
                                                onClick={() => handleEditAnswer(index)}
                                            >
                                                <EditIcon />
                                            </button>
                                        </div>
                                    </div>
                                    )}
                                </React.Fragment>
                                ))}

                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                    </div>
                    <div className="VirtualAssistant__fill-field">
                        <div className="VirtualAssistant__fill-field-wrapper">
                            <input 
                                ref={inputRef}
                                type="text" 
                                className={`VirtualAssistant__input ${isQuestionnaireComplete && isEditing === null ? 'VirtualAssistant__input--disabled' : ''}`}
                                value={currentAnswer}
                                onChange={(e) => setCurrentAnswer(e.target.value)}
                                onKeyPress={isQuestionnaireComplete && isEditing === null ? undefined : handleKeyPress}
                                placeholder={isEditing !== null ? 'Редактировать ответ...' : 'Введите сообщение'}
                                disabled={isQuestionnaireComplete && isEditing === null}
                            />
                            <ArrowRight
                                className='arrow-right'
                                onClick={handleSubmitAnswer}
                            />
                        </div>
                    </div>
                </div>
                <div className="VirtualAssistant__right">
                    <div className="VirtualAssistant__questionnaire-status">
                        <span className="VirtualAssistant__title">Заполнено на</span>
                        
                        <CircularProgress 
                            progress={progress}
                            size={140}
                            strokeWidth={12}
                        />
                        <span 
                            className={`VirtualAssistant__btn ${!isQuestionnaireComplete ? 'VirtualAssistant__btn--disabled' : ''}`}
                            onClick={isQuestionnaireComplete ? () => handleSubmitAdoptionForm(userAnswers) : undefined}
                        >
                            Отправить анкету
                        </span>
                        <PrivacyPolicy />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VirtualAssistant;