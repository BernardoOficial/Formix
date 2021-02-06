import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./index.css"

function CadastroConcluido({ enviarDados, dadosColetados }) {

  useEffect(() => {
    enviarDados(dadosColetados);
  });

  return (
    <>
      <h1 className="cadastro__title">Cadastro Concluido!</h1>
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_KnLkdc.json"
        background="transparent"
        speed="1"
        style={{width: '300px', height: '300px'}}
        autoplay
      >
      </Player>
    </>
  );
}

export default CadastroConcluido;
