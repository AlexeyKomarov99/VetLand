import React from 'react';
//===== assets =====//
import './DonationInfoBoard.scss';
//===== components =====//

const DonationInfoBoard = ({
    userDonationRequest
}) => {
  return (
    <section className="DonationInfoBoard">
        <div className="DonationInfoBoard__content">
            
            {userDonationRequest?.donationPurpose && (
                <div className="DonationInfoBoard__donation-purpose item">
                    <span className="DonationInfoBoard__title">Цель пожертвования</span>
                    <span className="DonationInfoBoard__value">{userDonationRequest?.donationPurpose}</span>
                </div>
            )}

            {userDonationRequest?.donationAmount && (
                <div className="DonationInfoBoard__amount item">
                    <span className="DonationInfoBoard__title">Сумма</span>
                    <span className="DonationInfoBoard__value">{userDonationRequest?.donationAmount}</span>
                </div>
            )}

            {userDonationRequest?.frequencyDonations && (
                <div className="DonationInfoBoard__frequency item">
                    <span className="DonationInfoBoard__title">Периодичность</span>
                    <span className="DonationInfoBoard__value">{userDonationRequest?.frequencyDonations}</span>
                </div>
            )}

            {userDonationRequest?.userName && (
                <div className="DonationInfoBoard__user-data item">
                    <div className="DonationInfoBoard__title">Личные данные</div>
                    <span className="DonationInfoBoard__value">{userDonationRequest?.userName}</span>
                    <span className="DonationInfoBoard__value">{userDonationRequest?.phone}</span>
                    <span className="DonationInfoBoard__value">{userDonationRequest?.email}</span>
                </div>
            )}

            {userDonationRequest?.paymentMethod && (
                <div className="DonationInfoBoard__payment-method item">
                    <div className="DonationInfoBoard__title">Способ оплаты</div>
                    <span className="DonationInfoBoard__value">{userDonationRequest?.paymentMethod}</span>
                </div>
            )}

        </div>
    </section>
  )
}

export default DonationInfoBoard