import {createContext, useState} from 'react';
import {register, login, logout} from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); // Присвоение данных от сервера и передача их компонентам
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Для проверки входа пользователя в систему

    // Процедура регистрации
    const handleRegister = async(formData) => {
      try {
        const userData = await register(formData);
        setUser(userData.userDto);
        setIsAuthenticated(true);
        sessionStorage.setItem('accessToken', userData.accessToken);
        console.log("Данные о пользователе после регистрации: ", userData)
        return userData.userDto;
      } catch (error) {
        console.error("Ошибка регистрации: ", error);
      }
    }

    // Процедура входа
    const handleLogin = async(credentials) => {
      try {
        const userData = await login(credentials);
        setUser(userData.userDto);
        setIsAuthenticated(true)
        sessionStorage.setItem('accessToken', userData.accessToken);
        console.log("Данные о пользователе после авторизации: ", userData)
        return true;
      } catch (error) {
        console.error("Ошибка входа: ", error);
      }
    }

    // Процедура выхода
    const handleLogout = async() => {
      try {
        await logout();
        setUser(null);
        setIsAuthenticated(false);
        sessionStorage.removeItem('accessToken');
        console.log("Пользователь вышел из системы");
      } catch (error) {
        console.log("Ошибка выхода:", error)
      }
    }

    return (
      <AuthContext.Provider value={{user, isAuthenticated, handleRegister, handleLogin, handleLogout}}>
        {children}
      </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};

