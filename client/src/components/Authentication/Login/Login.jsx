import React, {useState, useRef} from 'react';

//===== Ресурсы =====//
import './Login.scss';

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({});

  // Фокусирование курсора в середине input
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleFocus = (ref) => {
      const length = ref.current.value.length;
      const middlePosition = Math.floor(length / 2);
      ref.current.setSelectionRange(middlePosition, middlePosition);
  };

  return (
    <form 
      className="Login"
      // onSubmit={}
    >
      <div className="Login__group">
        <input 
          type="text" 
          className="input"
          placeholder='Email'
          ref={loginRef}
          onFocus={() => handleFocus(loginRef)}
        />
        <input 
          type="password" 
          className="input"
          placeholder='Пароль'
          ref={passwordRef}
          onFocus={() => handleFocus(passwordRef)}
        />
      </div>

      <button 
        className="Login__button-send button"
        type='submit'
      >
        Вход
      </button>
    </form>
  )
}

export default Login