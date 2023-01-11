import React, { useEffect, useState } from 'react';
import { useCreateClienteMutation } from '../../../app/api/apiSlice';
import { Link } from 'react-router-dom';


const FormCadastro = () => {

 
  const [addCliente, {isLoading, isSuccess, isError, error}] = useCreateClienteMutation();

  const [nome, setNome] = useState('');
  const [cpf_cnpj, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [revenda, setRevenda] = useState('');


const data = {
  nome,
  cpf_cnpj,
  email,
  senha,
  revenda
}

 const handleSubmit = e => {
  e.preventDefault();
  addCliente(data);
  
}


const [mensagem, setMensagem] = useState('Insira os dados');

useEffect(()=> {

  if(isLoading){
    setMensagem("Carregando.....")
    }else if(isSuccess){
    setMensagem("Cadastrado com Sucesso.....")
    }else if(isError) {
      if(error.data.mensagem){
        setMensagem (error.data.mensagem)
      }else
      setMensagem("Dados invalidos")
    
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isError, isLoading, isSuccess])


return (

    <form className="App" onSubmit={handleSubmit}>
    {" "}
    <div className="addUser">
      <input
        type="text"
        required 
        placeholder="Nome..."
        onChange={(event) => {
          setNome(event.target.value);
        }}
      /><br></br>
      <input
        type="text"
        required
        placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      /><br></br>
      <input
        type="text"
        required 
        placeholder="CPF..."
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      /><br></br>
      <input
        type="password"
        required
        placeholder="Senha..."
        onChange={(event) => {
          setSenha(event.target.value);
        }}
      /><br></br>
      <label>Revenda</label>
      <input
        type="checkbox"
        value= "false"
        placeholder="Revenda..."
        onChange={(event) => {
          if (event.target.checked){
            setRevenda("true");
          }else{
            setRevenda("false");
        }}}
      />
        <br></br>
        <p>{mensagem}</p>
        <br></br>

      <button type="submit">Cadastrar</button>
      
      <br></br>
      <Link to="/">Pagina inicial</Link>
      
      </div>
      </form>
   
);

}


export default FormCadastro;