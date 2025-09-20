import React from 'react';
import './DonationStatus.scss';
import { statuses } from './data';

const DonationStatus = ({
    userDonationRequest,
    currentSection,
    toggleSection,
}) => {
    
    const getStatusClass = (section) => {
        // Текущая активная секция
        if (currentSection === section) {
            return 'selected-status';
        }
        
        // Проверяем статусы заполнения для каждой секции
        switch(section) {
            case 'sum':
                // Сумма заполнена, если donationAmount больше 0 и не пустая
                if (Number(userDonationRequest.donationAmount) > 0 && 
                    userDonationRequest.donationAmount.trim() !== '') {
                    return 'completed-status';
                }
                break;
                
            case 'frequency':
                // Частота заполнена, если frequencyDonations не пустая
                if (userDonationRequest.frequencyDonations.trim() !== '') {
                    return 'completed-status';
                }
                break;
                
            case 'user-data':
                // Данные пользователя заполнены, если все поля заполнены
                if (userDonationRequest.userName.trim() !== '' && 
                    userDonationRequest.phone.trim() !== '' && 
                    userDonationRequest.email.trim() !== '') {
                    return 'completed-status';
                }
                break;
                
            case 'payment-method':
                // Метод оплаты заполнен, если выбран
                if (userDonationRequest.paymentMethod.trim() !== '') {
                    return 'completed-status';
                }
                break;
                
            default:
                return 'untouched-status';
        }
        
        // Если не выполнены условия выше - секция не тронута
        return 'untouched-status';
    };

    return (
        <section className="DonationStatus">
            <div className="DonationStatus__content">
                {statuses.map((status) => (
                    <article 
                        key={status.id}
                        className={`DonationStatus__item ${getStatusClass(status.section)}`}
                        onClick={() => toggleSection(status.section)}
                    >
                        <span className="DonationStatus__status-text">
                            {status.title}
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default DonationStatus;