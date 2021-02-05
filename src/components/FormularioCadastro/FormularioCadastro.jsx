import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import CadastroConcluido from "./CadastroConcluido";

import { StepLabel, Step, Stepper } from "@material-ui/core";

function FormularioCadastro({ enviarDados, validacoes }) {
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
    <DadosUsuario enviarDados={coletarDados} validacoes={validacoes} />,
    <DadosPessoais
      enviarDados={coletarDados}
      validacoes={validacoes}
      voltarEtapa={voltarEtapa}
    />,
    <DadosEntrega
      enviarDados={coletarDados}
      voltarEtapa={voltarEtapa}
      validacoes={validacoes}
    />,
    <CadastroConcluido
      enviarDados={enviarDados}
      voltarEtapa={voltarEtapa}
      validacoes={validacoes}
      dadosColetados={dadosColetados}
    />,
  ];

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
