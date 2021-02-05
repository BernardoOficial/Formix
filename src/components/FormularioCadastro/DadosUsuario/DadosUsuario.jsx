import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";

function DadosUsuario({ enviarDados, validacoes }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: {
      temErro: false,
      textoAjuda: "",
    },
  });

  function possoEnviar() {
    // Verifica com some um condição se ao menos um campo tem erro,
    // se tem erro retorna true, se não retorna false
    // Para o button fica disabled={true ou false}
    return Object.keys(erros)
      .some((erro) => erros[erro].temErro === true);
  }

  function handleFormSubmit(evento) {
    evento.preventDefault();
    enviarDados({ email, senha });
  }

  function handleInputBlur(evento) {
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function handleInputChange(evento) {
    const email = evento.target.form.email.value;
    const senha = evento.target.form.senha.value;

    setEmail(email);
    setSenha(senha);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        required
        autoFocus={true}
        fullWidth
        value={email}
        margin="normal"
        onChange={handleInputChange}
      />

      <TextField
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        required
        fullWidth
        value={senha}
        margin="normal"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        error={erros.senha.temErro}
        helperText={erros.senha.textoAjuda}
      />

      <Box mt={5}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={possoEnviar()}
        >
          Próxima Etapa
        </Button>
      </Box>
    </form>
  );
}

export default DadosUsuario;
