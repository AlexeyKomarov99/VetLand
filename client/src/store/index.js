import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import { doctorApi } from './api/doctorApi'
import { staffApi } from './api/staffApi'
import authSlice from './slices/authSlice'
import doctorSlice from './slices/doctorSlice'
import staffSlice from './slices/staffSlice'
import usersSlice from './slices/usersSlice'
import animalsSlice from './slices/animalsSlice'
import sheltersSlice from './slices/sheltersSlice'
import medicalSlice from './slices/medicalSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: doctorSlice,
    staff: staffSlice,
    users: usersSlice,
    animals: animalsSlice,
    shelters: sheltersSlice,
    medical: medicalSlice,
    [authApi.reducerPath]: authApi.reducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [staffApi.reducerPath]: staffApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(doctorApi.middleware)
      .concat(staffApi.middleware)
})