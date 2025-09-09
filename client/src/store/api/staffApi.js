import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const staffApi = createApi({
  reducerPath: 'staffApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/staff',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Users', 'Animals', 'Shelters', 'MedicalRecords', 'Questionnaires', 'Volunteers'],
  endpoints: (builder) => ({
    // ============ Пользователи ============ //
    listAllUsers: builder.query({
      query: () => '/list-all-users',
      providesTags: ['Users']
    }),
    viewUserInfo: builder.query({
      query: (id) => `/view-user-info/${id}`,
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/create-new-user',
        method: 'POST',
        body: userData
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/update-user-data/${id}`,
        method: 'PATCH',
        body: userData
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/delete-user/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    }),

    // ============ Анкеты и заявки ============ //
    listQuestionnaires: builder.query({
      query: () => '/list-user-questionnaires-animal-adoption',
      providesTags: ['Questionnaires']
    }),
    listVolunteerApplications: builder.query({
      query: () => '/list-volunteer-applications',
      providesTags: ['Volunteers']
    }),
    userDonationRating: builder.query({
      query: () => '/user-rating-by-donations',
      providesTags: ['Users']
    }),

    // ============ Животные ============ //
    listAllAnimals: builder.query({
      query: () => '/list-all-animals',
      providesTags: ['Animals']
    }),
    listShelterAnimals: builder.query({
      query: (shelterId) => `/list-all-animals-specific-shelter/${shelterId}`,
      providesTags: ['Animals']
    }),
    viewAnimalInfo: builder.query({
      query: (id) => `/view-detailed-information-animal/${id}`,
      providesTags: ['Animals']
    }),
    addAnimal: builder.mutation({
      query: (animalData) => ({
        url: '/add-animal-db-specific-shelter',
        method: 'POST',
        body: animalData
      }),
      invalidatesTags: ['Animals']
    }),
    addAdoptedAnimal: builder.mutation({
      query: (adoptionData) => ({
        url: '/add-animal-db-adopted-animals',
        method: 'POST',
        body: adoptionData
      }),
      invalidatesTags: ['Animals']
    }),
    updateAnimal: builder.mutation({
      query: ({ id, ...animalData }) => ({
        url: `/update-information-animal/${id}`,
        method: 'PATCH',
        body: animalData
      }),
      invalidatesTags: ['Animals']
    }),
    deleteAnimal: builder.mutation({
      query: (id) => ({
        url: `/delete-animal/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Animals']
    }),
    addAnimalType: builder.mutation({
      query: (typeData) => ({
        url: '/add-new-type-animal',
        method: 'POST',
        body: typeData
      }),
      invalidatesTags: ['Animals']
    }),
    deleteAnimalType: builder.mutation({
      query: (id) => ({
        url: `/delete-animal-type/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Animals']
    }),

    // ============ Приюты ============ //
    listShelters: builder.query({
      query: () => '/list-all-shelter',
      providesTags: ['Shelters']
    }),
    addShelter: builder.mutation({
      query: (shelterData) => ({
        url: '/add-new-shelter',
        method: 'POST',
        body: shelterData
      }),
      invalidatesTags: ['Shelters']
    }),

    // ============ Медицинские записи ============ //
    listAllMedicalRecords: builder.query({
      query: () => '/list-medical-records',
      providesTags: ['MedicalRecords']
    }),
    deleteMedicalRecord: builder.mutation({
      query: (id) => ({
        url: `/delete-medical-record/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['MedicalRecords']
    }),
    updateMedicalRecord: builder.mutation({
      query: ({ id, ...recordData }) => ({
        url: `/edit-medical-record/${id}`,
        method: 'PATCH',
        body: recordData
      }),
      invalidatesTags: ['MedicalRecords']
    })
  })
})

export const {
  // Пользователи
  useListAllUsersQuery,
  useViewUserInfoQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  
  // Анкеты и заявки
  useListQuestionnairesQuery,
  useListVolunteerApplicationsQuery,
  useUserDonationRatingQuery,
  
  // Животные
  useListAllAnimalsQuery,
  useListShelterAnimalsQuery,
  useViewAnimalInfoQuery,
  useAddAnimalMutation,
  useAddAdoptedAnimalMutation,
  useUpdateAnimalMutation,
  useDeleteAnimalMutation,
  useAddAnimalTypeMutation,
  useDeleteAnimalTypeMutation,
  
  // Приюты
  useListSheltersQuery,
  useAddShelterMutation,
  
  // Медицинские записи
  useListAllMedicalRecordsQuery,
  useDeleteMedicalRecordMutation,
  useUpdateMedicalRecordMutation
} = staffApi;