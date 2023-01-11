import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from "../paginas/paginaInicial";
import FormCadastro from "../paginas/cadastro";
import Lista from "../paginas/listaCadastro";
import Detalhe from "../paginas/listaCadastro/detalhesCliente"


const Rotas = () => (
    <BrowserRouter>
        <Routes>
      <Route exact path='/'   element={<PaginaInicial/>}/>
      <Route path='/cadastro' element={<FormCadastro/>}/>
      <Route path='/listaCadastro' element={<Lista/>}/>
      <Route path='/detalhesCliente/:id' element={<Detalhe/>}/>
      
    </Routes>
    </BrowserRouter>
);

export default Rotas;