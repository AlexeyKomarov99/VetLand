import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth';

export const registration = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/registration`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true // позволяет отправлять куки на клиенте и получать их от сервера
        });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка регистрации', error);
    }
}

export const login = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true // позволяет отправлять куки на клиенте и получать их от сервера
        });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка входа', error);
    }
}

export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`, {}, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка выхода:', error);
    }
}

export const passwordUpdate = async () => {
    try {
        
    } catch (error) {
        throw new Error('Ошибка обновления пароля:', error);
    }
}

export const passwordRecovery = async () => {
    try {
        
    } catch (error) {
        throw new Error('Ошибка восстановления пароля:', error);
    }
}

export const emailConfirmation = async () => {
    try {
        
    } catch (error) {
        throw new Error('Ошибка подтверждения почты:', error);
    }
}