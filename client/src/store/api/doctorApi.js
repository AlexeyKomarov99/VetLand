import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorApi = createApi({
  reducerPath: 'doctorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/doctor',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['MedicalRecords'],
  endpoints: (builder) => ({
    // 1. Медицинские записи текущего врача
    getMyMedicalRecords: builder.query({
      query: () => '/my-medical-records',
      providesTags: ['MedicalRecords']
    }),

    // 2. Создание медицинской записи
    createMedicalRecord: builder.mutation({
      query: (recordData) => ({
        url: '/create-medical-record',
        method: 'POST',
        body: recordData
      }),
      invalidatesTags: ['MedicalRecords'] // Обновляем список записей
    })
  })
})

export const {
  useGetMyMedicalRecordsQuery,
  useCreateMedicalRecordMutation
} = doctorApi