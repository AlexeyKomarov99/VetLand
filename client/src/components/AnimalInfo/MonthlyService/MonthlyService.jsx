import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//===== assets =====//
import './MonthlyService.scss';
import { IoMdCheckmark as CheckIcon } from "react-icons/io";
import { CiHeart as HeartIcon } from "react-icons/ci";
import { sum } from './data';

const MonthlyService = ({
    animal
}) => {
    const [questionInfo, setQuestionInfo] = useState(false);
    const [selectedInput, setSelectedInput] = useState(null);
    const [amountInput, setAmountInput] = useState('');

    const handleChangeAmount = (amount) => {
        setAmountInput(amount);
        setSelectedInput(amount);
    }

    const handleMouseEnter = () => {
        setQuestionInfo(true);
    }

    const handleMouseLeave = () => {
        setQuestionInfo(false);
    }

    const monthlyAmount = 4500;
    const fundraisingAmount = animal ? animal.amountTreatment : 0;
    const fundraisingStatus = Math.min(Math.round((fundraisingAmount / monthlyAmount) * 100), 100);

    return (
        <section className="MonthlyService">
            <div className="MonthlyService__content">
                <div className="MonthlyService__content-left">
                    <span className="MonthlyService__title">На мое месячное содержание уходит:</span>
                    <div className="MonthlyService__price-group">
                        <span className="MonthlyService__monthly-amount">{monthlyAmount} ₽</span>
                        <span 
                            className="MonthlyService__question-info"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            ?
                            {questionInfo && (
                                <div className="MonthlyService__question-mw">
                                    <span className="MonthlyService__question-mw--text">Затраты на лечение не включены в стоимость</span>
                                </div>
                            )}
                        </span>
                    </div>
                    <div className="MonthlyService__status-group">
                        <div className="MonthlyService__status-header">
                            <CheckIcon className='check-icon' />
                            <span className="MonthlyService__fundraising-status">{fundraisingStatus}%</span>
                            <span className="MonthlyService__status-descr">собрано в этом месяце</span>
                        </div>
                        <div className="MonthlyService__status-bottom">
                            <div 
                                className="MonthlyService__status"
                                style={{ width: `${fundraisingStatus}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="MonthlyService__content-right">
                    <div className="MonthlyService__title">Помочь</div>
                    <div className="MonthlyService__group">
                        <div className="MonthlyService__sum-group">
                            {sum.map((amount) => (
                                <article 
                                    key={amount.id}
                                    className={`MonthlyService__sum-item ${selectedInput === amount.amount ? 'selected-input' : ''}`}
                                    onClick={() => handleChangeAmount(amount.amount)}
                                >
                                    {amount.amount} ₽    
                                </article>
                            ))}
                            <article 
                                className={`MonthlyService__sum-item all-sum ${selectedInput === monthlyAmount ? 'seleceted-input-all' : ''}`}
                                onClick={() => handleChangeAmount(monthlyAmount)}
                            >
                                <HeartIcon className='heart-icon' />
                                <span className="MonthlyService__sum-text">Вся сумма</span>
                            </article>
                        </div>
                        <div className="MonthlyService__input-btn-group">
                            <input 
                                type="text"
                                value={amountInput}
                                onChange={e => {
                                    const value = e.target.value;
                                    // Разрешаем только цифры
                                    if (/^\d*$/.test(value)) {
                                        setAmountInput(value);
                                        setSelectedInput(value);
                                    }
                                }}
                                className="MonthlyService__input"
                                placeholder='Или введите свою сумму'
                            />
                            <Link
                                to='/help-us'
                                disabled={!amountInput}
                                className="MonthlyService__btn"
                                style={{ 
                                    pointerEvents: !amountInput ? 'none' : 'auto', 
                                    opacity: !amountInput ? 0.5 : 1 
                                }}
                            >
                                Перейти к форме оплаты
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MonthlyService;