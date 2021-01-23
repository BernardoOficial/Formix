import React, { Component, Fragment } from 'react'
import FormularioCadastro from './components/FormularioCadastro';

import Container from '@material-ui/core/Container'

import './App.css';

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1 className="form__title">Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;