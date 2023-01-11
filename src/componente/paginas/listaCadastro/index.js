import React from 'react';

import './style.css'
import ItemListaCliente from './itemListaCliente';

import { Link } from 'react-router-dom';

const List = () => {


 return  <div className="dsmeta-card">
 <h2 className="title">Lista de clientes</h2>
 <div>    
 </div>
 <div>
     <table className="table">
         <thead>
             <tr>
                 <th className="show992">Id</th>
                 <th className="show576">Nome</th>
                 <th className="show992">Email</th>
                 <th className="show992">Saldo</th>  
             </tr>
         </thead>
         <tbody>
        
         <ItemListaCliente />;
   
         </tbody>
         <Link to="/">Pagina Inicial</Link>
     </table>
    

































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































 </div>
</div >
}


 export default List 
  