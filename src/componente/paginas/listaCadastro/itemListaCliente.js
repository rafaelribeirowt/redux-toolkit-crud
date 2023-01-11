import React from "react";
import { Link } from 'react-router-dom';


const ItemListaCliente = (props) => {

         
  return(
          props.data.clientes.map(clientes => {
            return (
                
                <tr ClassName="tr" key={clientes.id}>
                    <td className="show992">{clientes.id}</td>
                    <td className="show576">{clientes.nome}</td>
                    <td className="show576">{clientes.email}</td>
                    <td className="saldo">R$ {clientes.saldo}</td>
                    <Link to={`/detalhesCliente/${clientes.id}`} >Detalhes</Link>   
                </tr> )})
  )

    
}

export default ItemListaCliente;