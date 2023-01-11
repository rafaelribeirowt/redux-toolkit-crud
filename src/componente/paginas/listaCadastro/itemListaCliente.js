import React from "react";
import { Link } from 'react-router-dom';
import { useGetClientesQuery } from "../../../app/api/apiSlice"




const ItemListaCliente = () => {

    const {data, 
        isLoading,
        isSuccess,
        isError
      } = useGetClientesQuery();
      
      let content;
      if(isLoading){
        content = <tr>Loading.....</tr>;
      }else if(isSuccess){
      
        content = data && data.clientes.map(clientes => {
            return (
                
                <tr ClassName="tr" key={clientes.id}>
                    <td className="show992">{clientes.id}</td>
                    <td className="show576">{clientes.nome}</td>
                    <td className="show576">{clientes.email}</td>
                    <td className="saldo">R$ {clientes.saldo}</td>
                    <Link to={`/detalhesCliente/${clientes.id}`} >Detalhes</Link>   
                </tr> )})
      
        
      }else if (isError){
        content =  <tr><td>error</td></tr>
      }



    return (
        
          content

    )
    
}

export default ItemListaCliente;