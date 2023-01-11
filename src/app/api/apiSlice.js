import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//Passo 1 


export const apiCliente = createApi({
    reducerPath: 'apiCliente',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api'
    }),
    endpoints:(builder) =>({
        getClientes: builder.query({
            query: () => '/clientes'
        }),
        getClienteById: builder.query({
            query: (id) => `/clientes/${id}`
        }),
        createCliente: builder.mutation({
            query: (body) => ({
            url: '/clientes',
            method: 'POST',
            body: body
            }),
        }),
        updateCliente: builder.mutation({
            query:( { idupdate, ...patch }) => ({
                url: `/clientes/${idupdate}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
        deleteCliente: builder.mutation({
            query:(id) => ({
                url: `clientes/${id}`,
                method: 'DELETE'

           }),
        }),
     }),
});

export const {
    useGetClientesQuery,
    useGetClienteByIdQuery,
    useCreateClienteMutation,
    useUpdateClienteMutation,
    useDeleteClienteMutation
} = apiCliente


