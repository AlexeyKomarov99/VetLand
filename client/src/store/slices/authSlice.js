import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false
    },
    reducers: {
        // Установка данных пользователя после успешной auth
        setCredentials: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.accessToken
            state.isAuthenticated = true
        },

        // Очистка данных при выходе
        clearCredentials: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
        },

        // Обновление данных пользователя
        updateUser: (state, action) => {
            if(state.user) {
                state.user = { ...state.user, ...action.payload }
            }
        },

        // Установка состояния загрузки
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const {
    setCredentials, 
    clearCredentials, 
    updateUser, 
    setLoading 
} = authSlice.actions;

export default authSlice.reducer;