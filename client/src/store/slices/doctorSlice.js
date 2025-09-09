import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
    name: 'doctor',
    initialState: {
        medicalRecords: [],
        selectedRecord: null,
        isLoading: false
    },
    reducers: {
    // Установка медицинских записей
    setMedicalRecords: (state, action) => {
      state.medicalRecords = action.payload
    },
    
    // Выбор конкретной записи
    setSelectedRecord: (state, action) => {
      state.selectedRecord = action.payload
    },
    
    // Добавление новой записи
    addMedicalRecord: (state, action) => {
      state.medicalRecords.unshift(action.payload)
    },
    
    // Обновление состояния загрузки
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const {
    setMedicalRecords,
    setSelectedRecord,
    addMedicalRecord,
    setLoading
} = doctorSlice.actions;

export default doctorSlice.reducer;