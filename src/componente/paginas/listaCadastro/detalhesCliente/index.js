import React from 'react';
import { useParams } from 'react-router-dom'
import {useGetClienteByIdQuery} from "../../../../app/api/apiSlice"
import { Link } from "react-router-dom";
import UpdateCliente from './updateCliente'

const DetalhesCliente = () => {

    
    const { id } = useParams()

    const {data, isSuccess , isLoading, isError, error} =  useGetClienteByIdQuery({id}.id)

  let content;
  if(isLoading){
    content = <>Loading.....</>
  }else if(isError){
    content = <>{error.status}</>
  }else if(isSuccess){   
    content = <>
    <h3>Nome: {data.nome}</h3>
           <UpdateCliente id={{id}.id} /> 
            <div> 
            <h3>Email: {data.email}</h3>
            <h3>CPF: {data.cpf_cnpj}</h3>
            <h3>Saldo: R${data.saldo}</h3>
            <button >Deletar
            </button></div></>
        
            }
    return (

    <div>  
        <h1>Detalhes do Cliente</h1>
        <div>{content}</div>
        <br></br>
  
        <Link to="/listaCadastro">Voltar</Link>    
        </div>
        
    )
};

export default DetalhesCliente