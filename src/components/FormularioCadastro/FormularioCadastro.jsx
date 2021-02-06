import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import CadastroConcluido from "./CadastroConcluido";

import { StepLabel, Step, Stepper } from "@material-ui/core";
import { Player } from '@lottiefiles/react-lottie-player';

function FormularioCadastro({ enviarDados }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  const [loader, setLoader] = useState(false);

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    uptadeEtapa();
  }

  function uptadeEtapa() {
    setEtapaAtual(etapaAtual + 1);
    setLoader(true);

    setInterval(() => {
      setLoader(false);
    }, 2000)
  }

  function voltarEtapa() {
    setEtapaAtual(etapaAtual - 1);
  }

  const formularios = [
    <DadosUsuario enviarDados={coletarDados} />,
    <DadosPessoais
      enviarDados={coletarDados}
      voltarEtapa={voltarEtapa}
    />,
    <DadosEntrega
      enviarDados={coletarDados}
      voltarEtapa={voltarEtapa}
    />,
    <CadastroConcluido
      enviarDados={enviarDados}
      voltarEtapa={voltarEtapa}
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
      {loader || formularios[etapaAtual]}
      {loader && (
        <Player
          src="https://assets9.lottiefiles.com/packages/lf20_uwR49r.json"
          background="transparent"
          speed="1"
          style={{width: '300px', height: '300px'}}
          loop
          autoplay
        />
      )}
    </>
  );
}

export default FormularioCadastro;
