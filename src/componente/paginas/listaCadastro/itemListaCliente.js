import React from "react";
import { Link } from 'react-router-dom';


const ItemListaCliente = (props) => {

    
      
      let content;
      if(props.isLoading){
        content = <tr>Loading.....</tr>;
      }else if(props.isSuccess){
      
        content = props.data && props.data.clientes.map(clientes => {
            return (
                
                <tr ClassName="tr" key={clientes.id}>
                    <td className="show992">{clientes.id}</td>
                    <td className="show576">{clientes.nome}</td>
                    <td className="show576">{clientes.email}</td>
                    <td className="saldo">R$ {clientes.saldo}</td>
                    <Link to={`/detalhesCliente/${clientes.id}`} >Detalhes</Link>   
                </tr> )})
      
        
      }else if (props.isError){
        content =  <tr><td>error</td></tr>
      }



    return (
        
          content

    )
    
}

export default ItemListaCliente;