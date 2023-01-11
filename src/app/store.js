import {configureStore} from "@reduxjs/toolkit"
import { clientesReducer } from "./api/clienteSlice" 
import { apiCliente } from "./api/apiSlice"
import { setupListeners } from '@reduxjs/toolkit/query/react'


export const store = configureStore({
    reducer:{
        clientes: clientesReducer,
        [apiCliente.reducerPath]: apiCliente.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiCliente.middleware),
})

setupListeners(store.dispatch)

export{
    useGetClientesQuery,
    useGetClienteByIdQuery,
    useCreateClienteMutation,
    useUpdateClienteMutation,
    useDeleteClienteMutation
} from './api/apiSlice'