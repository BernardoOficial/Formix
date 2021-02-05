import React, { useEffect } from "react";

function CadastroConcluido({ enviarDados, dadosColetados }) {
    
  useEffect(() => {
    enviarDados(dadosColetados);
  });

  return <h1>Cadastro Concluido!</h1>;
}

export default CadastroConcluido;
