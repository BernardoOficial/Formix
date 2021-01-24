import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro';

import Container from '@material-ui/core/Container'

import './App.css';

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1 className="form__title">Formulário de Cadastro</h1>
        <FormularioCadastro enviarDados={enviarDados} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function enviarDados(dados) {
  console.log(dados);
}

function validarCPF(cpf) {

  let temErro = false;
  let textoAjuda = "";

  if (cpf.length !== 11) {
    temErro = true;
    textoAjuda = "O CPF precisa ter 11 dígitos";
  }

  return {
    temErro,
    textoAjuda
  }
}

export default App;