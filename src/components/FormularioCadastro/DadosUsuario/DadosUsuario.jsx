import React, { useState, useContext } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../../contexts/ValidacoesCadastro";
import useErros from "../../../hooks/useErros";

function DadosUsuario({ enviarDados }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, handleInputBlur, possoEnviar] = useErros(validacoes);

  function handleFormSubmit(evento) {
    evento.preventDefault();
    enviarDados({ email, senha });
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
