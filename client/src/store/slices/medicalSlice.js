import { createSlice } from '@reduxjs/toolkit'

const medicalSlice = createSlice({
  name: 'medical',
  initialState: {
    medicalRecords: [],
    selectedRecord: null,
    searchTerm: '',
    filters: {
      doctor: '',
      animal: '',
      dateFrom: '',
      dateTo: ''
    }
  },
  reducers: {
    setMedicalRecords: (state, action) => {
      state.medicalRecords = action.payload
    },
    setSelectedRecord: (state, action) => {
      state.selectedRecord = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    addMedicalRecord: (state, action) => {
      state.medicalRecords.unshift(action.payload)
    },
    updateMedicalRecord: (state, action) => {
      const index = state.medicalRecords.findIndex(record => record.id === action.payload.id)
      if (index !== -1) {
        state.medicalRecords[index] = action.payload
      }
    },
    removeMedicalRecord: (state, action) => {
      state.medicalRecords = state.medicalRecords.filter(record => record.id !== action.payload)
    },
    // Для массовых операций
    updateRecordsByAnimal: (state, action) => {
      const { animalId, updates } = action.payload
      state.medicalRecords = state.medicalRecords.map(record =>
        record.animal_id === animalId ? { ...record, ...updates } : record
      )
    },
    updateRecordsByDoctor: (state, action) => {
      const { doctorId, updates } = action.payload
      state.medicalRecords = state.medicalRecords.map(record =>
        record.user_id === doctorId ? { ...record, ...updates } : record
      )
    }
  }
})

export const {
  setMedicalRecords,
  setSelectedRecord,
  setSearchTerm,
  setFilters,
  addMedicalRecord,
  updateMedicalRecord,
  removeMedicalRecord,
  updateRecordsByAnimal,
  updateRecordsByDoctor
} = medicalSlice.actions

export default medicalSlice.reducer