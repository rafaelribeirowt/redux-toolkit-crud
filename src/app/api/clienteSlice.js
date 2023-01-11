import { createSlice } from "@reduxjs/toolkit";

const clienteSlice = createSlice({
    name: 'clientes',
    initialState:{
        data:[],
        isLoading:false,
        erro:null,
    },
    reducers:{
        Cliente: (state, action) =>{
        state.data.push(action.payload)  
    },        
},

})

export const {createCliente} = clienteSlice.actions

export const clientesReducer = clienteSlice.reducer