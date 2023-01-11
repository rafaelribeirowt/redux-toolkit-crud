import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import {useGetClienteByIdQuery} from "../../../../app/api/apiSlice"
import {useUpdateClienteMutation} from "../../../../app/api/apiSlice"
import { Link } from "react-router-dom";

const DetalhesCliente = () => {

    
    const { id } = useParams()

    
    
    const {data, isSuccess , isLoading, isError, error} =  useGetClienteByIdQuery({id}.id)

    const [update, {isSuccessUpdate, isLoadingUpdate, isErrorUpdate}] = useUpdateClienteMutation();


    const [mensagem, setMensagem] = useState('');

    const [nome, setNome] = useState('');
    const [revendaa, setRevenda] = useState('');
   

    const handleUpdate = e => {
      e.preventDefault();
      update(dataUpdate); 
  console.log({mensagem})
    }


    const dataUpdate = { 
     id,
     nome
    }

    useEffect(()=> {

      if(isLoadingUpdate){
        setMensagem("Carregando.....")
        }else if(isSuccessUpdate){
        setMensagem("Alterado com Sucesso.....")
        }else if(isErrorUpdate) { 
          setMensagem("Error")
        }
        }, [isLoadingUpdate, isSuccessUpdate, isErrorUpdate])

  let content;
   
  if(isLoading){
    content = <>Loading.....</>
  }else if(isError){
    content = <>{error.status}</>
  }else if(isSuccess){
    

    content = <>

    <h3>Nome: {data.nome}</h3>

            <input 
            
        type="text"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}/>


            <div> 
            <h3>Email: {data.email}</h3>
            <h3>CPF: {data.cpf_cnpj}</h3>
            <h3>Saldo: R${data.saldo}</h3>


            <label>Revenda</label>


            <input 
            type="radio" 
            id="true" 
            name="revenda" 
            value="Revenda" 
            onChange={(event) => {
            setRevenda(event.target.value)
            }}/>

            <label>Logista</label> 
            <input 
            type="radio" 
            id="false" 
            name="revenda" 
            value="Logista" 
            onChange={(event) => {
              setRevenda(event.target.value)
              }}/>

            <h3>Tipo Cliente: {revendaa}</h3>

            <button onClick={handleUpdate}>Editar</button>
            <button >Deletar</button></div></>
        
            }
    return (
    
    <div> 
        
        <h1>Detalhes do Cliente</h1>

        <div>{content}</div>

        <br></br>
        <p>{mensagem}</p>
        <br></br>

        <Link to="/listaCadastro">Voltar</Link>
        
        
        </div>
        
    )
};

export default DetalhesCliente