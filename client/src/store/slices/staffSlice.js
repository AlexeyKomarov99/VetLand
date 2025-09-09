import { createSlice } from '@reduxjs/toolkit'

const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    dashboardStats: {
      totalUsers: 0,
      totalAnimals: 0,
      totalShelters: 0,
      pendingApplications: 0
    },
    isLoading: false,
    currentView: 'dashboard'
  },
  reducers: {
    setDashboardStats: (state, action) => {
      state.dashboardStats = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCurrentView: (state, action) => {
      state.currentView = action.payload
    },
    updateStats: (state, action) => {
      state.dashboardStats = { ...state.dashboardStats, ...action.payload }
    }
  }
})

export const { setDashboardStats, setLoading, setCurrentView, updateStats } = staffSlice.actions
export default staffSlice.reducer