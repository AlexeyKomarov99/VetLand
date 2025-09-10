import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicApi = createApi({
    reducerPath: 'publicApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api/public',
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        // Эндпоинт для получения случайных животных
        getRandomAnimals: builder.query({
            query: (limit = 10) => `/animals/random?limit=${limit}`,
            transformResponse: (response) => response.data, 
        })
    })
})

export const { useGetRandomAnimalsQuery } = publicApi;