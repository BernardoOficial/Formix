import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import CadastroConcluido from './CadastroConcluido';

import {StepLabel, Step, Stepper} from '@material-ui/core';

function FormularioCadastro({ enviarDados, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    uptadeEtapa();
  }

  function uptadeEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  function voltarEtapa() {
    setEtapaAtual(etapaAtual - 1);
  }

  const formularios = [
    <DadosUsuario enviarDados={coletarDados} />,
    <DadosPessoais
      enviarDados={coletarDados}
      validarCPF={validarCPF}
      voltarEtapa={voltarEtapa}
    />,
    <DadosEntrega enviarDados={coletarDados} voltarEtapa={voltarEtapa} />,
    <CadastroConcluido
      enviarDados={enviarDados}
      voltarEtapa={voltarEtapa}
      dadosColetados={dadosColetados}
    />,
  ];

  return(
      <>
      <Stepper activeStep={etapaAtual} >
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
      </>
  );;
}

export default FormularioCadastro;
