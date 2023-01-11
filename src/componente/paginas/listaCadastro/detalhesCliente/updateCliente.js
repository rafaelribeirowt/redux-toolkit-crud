import React, { useEffect, useState } from 'react';
import {useUpdateClienteMutation} from "../../../../app/api/apiSlice"

const UpdateCliente = (id) =>{

    const idupdate = id.id;

    const [update, {isSuccess, isLoading, isError, error}] = useUpdateClienteMutation();


    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    

    const handleUpdate = e => {
      e.preventDefault();
      update(dataUpdate); 
      console.log(dataUpdate)
    }

    const dataUpdate = { 
     idupdate,
     nome
    }

    useEffect(()=> {

      if(isLoading){
        setMensagem("Carregando.....")
        }else if(isSuccess){
        setMensagem("Alterado com Sucesso.....")
        }else if(isError) { 
          setMensagem(error.status)
        }
        }, [isLoading, isSuccess, isError])

        return (
            <>
            <input           
            type="text"
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}/>

            <button
            onClick={handleUpdate}
            >Editar</button>
        
            <label> {mensagem}</label>
            </>
        )
}

export default UpdateCliente; 

