import React from 'react'; 
import { Link } from 'react-router-dom';
import './style.css';


const PaginaInicial = () => (
  <div>
    <h1>Pagina Inicial</h1>

    <div className="conteudo-opcoes">
      <Link className="Cadastro" to='/cadastro'>Cadastro</Link>
      <Link className="ListaClientes" to='/listaCadastro'>Lista Clientes</Link>
      
    </div>
    
  </div>
);

export default PaginaInicial;