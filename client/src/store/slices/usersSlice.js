import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: [],
    selectedUser: null,
    searchTerm: '',
    filters: {
      role: '',
      region: ''
    }
  },
  reducers: {
    setUsersList: (state, action) => {
      state.usersList = action.payload
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    addUser: (state, action) => {
      state.usersList.unshift(action.payload)
    },
    updateUserInList: (state, action) => {
      const index = state.usersList.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.usersList[index] = action.payload
      }
    },
    removeUser: (state, action) => {
      state.usersList = state.usersList.filter(user => user.id !== action.payload)
    }
  }
})

export const {
  setUsersList,
  setSelectedUser,
  setSearchTerm,
  setFilters,
  addUser,
  updateUserInList,
  removeUser
} = usersSlice.actions
export default usersSlice.reducer