import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";

function DadosUsuario({ enviarDados }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
      />

      <Box mt={5}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Próxima Etapa
        </Button>
      </Box>
    </form>
  );
}

export default DadosUsuario;
