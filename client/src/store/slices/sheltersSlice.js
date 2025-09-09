import { createSlice } from '@reduxjs/toolkit'

const sheltersSlice = createSlice({
  name: 'shelters',
  initialState: {
    sheltersList: [],
    selectedShelter: null,
    searchTerm: '',
    filters: {
      region: '',
      city: ''
    }
  },
  reducers: {
    setSheltersList: (state, action) => {
      state.sheltersList = action.payload
    },
    setSelectedShelter: (state, action) => {
      state.selectedShelter = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    addShelter: (state, action) => {
      state.sheltersList.unshift(action.payload)
    },
    updateShelterInList: (state, action) => {
      const index = state.sheltersList.findIndex(shelter => shelter.id === action.payload.id)
      if (index !== -1) {
        state.sheltersList[index] = action.payload
      }
    },
    removeShelter: (state, action) => {
      state.sheltersList = state.sheltersList.filter(shelter => shelter.id !== action.payload)
    },
    updateShelterStats: (state, action) => {
      const { shelterId, animalsCount, donationsAmount } = action.payload
      const shelter = state.sheltersList.find(s => s.id === shelterId)
      if (shelter) {
        if (animalsCount !== undefined) shelter.numberAnimals = animalsCount
        if (donationsAmount !== undefined) shelter.amountDonationsAnimals = donationsAmount
      }
    }
  }
})

export const {
  setSheltersList,
  setSelectedShelter,
  setSearchTerm,
  setFilters,
  addShelter,
  updateShelterInList,
  removeShelter,
  updateShelterStats
} = sheltersSlice.actions

export default sheltersSlice.reducer