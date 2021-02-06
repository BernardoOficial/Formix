import { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function handleInputBlur(evento) {
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    // Verifica com some um condição se ao menos um campo tem erro,
    // se tem erro retorna true, se não retorna false
    // Para o button fica disabled={true ou false}
    return Object.keys(erros).some((erro) => erros[erro].temErro === true);
  }

  return [erros, handleInputBlur, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  Object.keys(validacoes).forEach(
    (campo) => (estadoInicial[campo] = { temErro: false, textoAjuda: "" })
  );
  return estadoInicial;
}

export default useErros;
