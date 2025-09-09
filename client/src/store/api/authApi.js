import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    // 1. Регистрация
    register: builder.mutation({
      query: (userData) => ({
        url: '/registration',
        method: 'POST',
        body: userData
      }),
      invalidatesTags: ['Auth']
    }),

    // 2. Вход
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
        credentials: 'include' // Для куков
      }),
      invalidatesTags: ['Auth']
    }),

    // 3. Выход
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
        credentials: 'include'
      }),
      invalidatesTags: ['Auth']
    }),

    // 4. Запрос восстановления пароля
    passwordRecoveryRequest: builder.mutation({
      query: (email) => ({
        url: '/password-recovery-request',
        method: 'POST',
        body: { email }
      })
    }),

    // 5. Обновление пароля
    passwordUpdate: builder.mutation({
      query: (passwords) => ({
        url: '/password-update',
        method: 'PATCH',
        body: passwords
      })
    }),

    // 6. Подтверждение email
    emailConfirmation: builder.mutation({
      query: (token) => ({
        url: `/email-confirmation/${token}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  usePasswordRecoveryRequestMutation,
  usePasswordUpdateMutation,
  useEmailConfirmationMutation
} = authApi;