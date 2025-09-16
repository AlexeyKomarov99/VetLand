import React, {useState} from 'react';
//===== assets =====//
import './PrivacyPolicy.scss';
import { IoCheckmark as CheckMarkIcon } from "react-icons/io5";

const PrivacyPolicy = () => {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleChecked1 = () => {
        setChecked1(!checked1);
    };

    const handleChecked2 = () => {
        setChecked2(!checked2);
    };

    return (
        <div className='PrivacyPolicy'>
            <label className="PrivacyPolicy__label-checkbox">
                <input 
                type="checkbox" 
                className="PrivacyPolicy__checkbox" 
                checked={checked1}
                onChange={handleChecked1}  
                />
                <div className="checkbox-box">
                {checked1 && <CheckMarkIcon style={{color: 'white'}} />}
                </div>
                <span className="PrivacyPolicy__checkbox-descr">
                    Я ознакомился (лась) с <a href="https://vet.land/privacy-policy.pdf" style={{textDecoration: 'underline', fontSize: '12px'}}>
                    политикой конфиденциальности</a> и принимаю их условия
                </span>
            </label>

            <label className="PrivacyPolicy__label-checkbox">
                <input 
                type="checkbox" 
                className="PrivacyPolicy__checkbox" 
                checked={checked2}
                onChange={handleChecked2}
                />
                <div className="checkbox-box">
                {checked2 && <CheckMarkIcon style={{color: 'white'}} />}
                </div>
                <span className="PrivacyPolicy__checkbox-descr">
                    Хочу получать информацию от фонда vet.land
                </span>
            </label>
        </div>
    )
}

export default PrivacyPolicy;