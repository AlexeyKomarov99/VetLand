import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicApi = createApi({
    reducerPath: 'publicApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api/public',
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        // 1. Эндпоинт для получения случайных животных
        getRandomAnimals: builder.query({
            query: (limit = 10) => `/animals/random?limit=${limit}`,
            transformResponse: (response) => response.data, 
        }),
        // 2. Составление анкеты об усыновлении животного
        submitAppAdoptAnimal: builder.mutation({
            query: (formData) => ({
                url: '/fill-out-application-adopt-animal',
                method: 'POST',
                body: formData
            })
        }),
        // 3. Подать заявку на волонтерство
        submitVolunteerApp: builder.mutation({
            query: (formData) => ({
                url: '/apply-volunteer',
                method: 'POST',
                body: formData
            })
        }),
    })
})

export const { 
    useGetRandomAnimalsQuery,
    useSubmitAppAdoptAnimalMutation,
    useSubmitVolunteerAppMutation,
} = publicApi;