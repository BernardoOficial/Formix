import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";

import Container from "@material-ui/core/Container";
import { validarCPF, validarSenha, validarNome } from "./models/cadastro";

import "./App.css";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1 className="form__title">Formulário de Cadastro</h1>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarNome,
          }}
        >
          <FormularioCadastro enviarDados={enviarDados} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function enviarDados(dados) {
  console.log(dados);
}

export default App;
