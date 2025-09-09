import { createSlice } from '@reduxjs/toolkit'

const animalsSlice = createSlice({
  name: 'animals',
  initialState: {
    animalsList: [],
    selectedAnimal: null,
    searchTerm: '',
    filters: {
      shelter: '',
      type: '',
      status: ''
    },
    animalTypes: []
  },
  reducers: {
    setAnimalsList: (state, action) => {
      state.animalsList = action.payload
    },
    setSelectedAnimal: (state, action) => {
      state.selectedAnimal = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setAnimalTypes: (state, action) => {
      state.animalTypes = action.payload
    },
    addAnimal: (state, action) => {
      state.animalsList.unshift(action.payload)
    },
    updateAnimalInList: (state, action) => {
      const index = state.animalsList.findIndex(animal => animal.id === action.payload.id)
      if (index !== -1) {
        state.animalsList[index] = action.payload
      }
    },
    removeAnimal: (state, action) => {
      state.animalsList = state.animalsList.filter(animal => animal.id !== action.payload)
    },
    addAnimalType: (state, action) => {
      state.animalTypes.push(action.payload)
    },
    removeAnimalType: (state, action) => {
      state.animalTypes = state.animalTypes.filter(type => type.id !== action.payload)
    }
  }
})

export const {
  setAnimalsList,
  setSelectedAnimal,
  setSearchTerm,
  setFilters,
  setAnimalTypes,
  addAnimal,
  updateAnimalInList,
  removeAnimal,
  addAnimalType,
  removeAnimalType
} = animalsSlice.actions

export default animalsSlice.reducer