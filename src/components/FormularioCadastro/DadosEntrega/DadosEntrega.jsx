import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";

function DadosEntrega({ enviarDados, voltarEtapa }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  function handleFormSubmit(evento) {
    evento.preventDefault();
    enviarDados({ cep, endereco, numero, estado, cidade });
  }

  function handleInputChange(evento) {
    const cep = evento.target.form.cep.value;
    const endereco = evento.target.form.endereco.value;
    const numero = evento.target.form.numero.value;
    const estado = evento.target.form.estado.value;
    const cidade = evento.target.form.cidade.value;

    setCep(cep);
    setEndereco(endereco);
    setNumero(numero);
    setEstado(estado);
    setCidade(cidade);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        id="cep"
        name="cep"
        label="CEP"
        type="number"
        variant="outlined"
        autoFocus={true}
        fullWidth
        margin="normal"
        value={cep}
        onChange={handleInputChange}
      />

      <TextField
        id="endereco"
        name="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={endereco}
        onChange={handleInputChange}
      />

      <TextField
        id="numero"
        name="numero"
        label="Número"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={numero}
        onChange={handleInputChange}
      />

      <TextField
        id="estado"
        name="estado"
        label="Estado"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={estado}
        onChange={handleInputChange}
      />

      <TextField
        id="cidade"
        name="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cidade}
        onChange={handleInputChange}
      />

      <Box mt={5}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Finalizar Cadastro
        </Button>
      </Box>
      <Box mt={5}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          onClick={voltarEtapa}
        >
          Voltar Etapa
        </Button>
      </Box>
    </form>
  );
}

export default DadosEntrega;
