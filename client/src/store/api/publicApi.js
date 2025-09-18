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
        // 2. Список всех животных
        getAnimalList: builder.query({
            query: () => '/list-all-animals-public',
            transformResponse: (response) => response.data, 
        }),
        // 3. Список всех усыновленных животных
        getAdoptedAnimalList: builder.query({
            query: () => '/list-all-adopted-animals-public',
            transformResponse: (response) => response.data,
        }),
        // 4. Составление анкеты об усыновлении животного
        submitAppAdoptAnimal: builder.mutation({
            query: (formData) => ({
                url: '/fill-out-application-adopt-animal',
                method: 'POST',
                body: formData
            })
        }),
        // 5. Подать заявку на волонтерство
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
    useGetAnimalListQuery,
    useGetAdoptedAnimalListQuery,
    useSubmitAppAdoptAnimalMutation,
    useSubmitVolunteerAppMutation,
} = publicApi;