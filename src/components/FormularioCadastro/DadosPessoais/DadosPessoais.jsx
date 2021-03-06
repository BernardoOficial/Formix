import React, { useContext, useState } from "react";
import ValidacoesCadastro from '../../../contexts/ValidacoesCadastro'
import useErros from "../../../hooks/useErros";
import {
  Box,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core";


function DadosPessoais({ enviarDados, voltarEtapa }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, handleInputBlur, possoEnviar] = useErros(validacoes);


  function handleInputChange(evento) {
    const nomeInserido = evento.target.form.nome.value;
    const sobrenomeInserido = evento.target.form.sobrenome.value;
    const cpfInserido = evento.target.form.cpf.value;
    const isCheckboxPromocoes = evento.target.form.promocoes.checked;
    const isCheckboxNovidades = evento.target.form.novidades.checked;

    setNome(nomeInserido);
    setSobrenome(sobrenomeInserido);
    setCPF(cpfInserido);
    setPromocoes(isCheckboxPromocoes);
    setNovidades(isCheckboxNovidades);
  }

  function handleFormSubmit(evento) {
    evento.preventDefault();
    enviarDados({ nome, sobrenome, cpf, promocoes, novidades });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        autoFocus={true}
        fullWidth
        margin="normal"
        value={nome}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        error={erros.nome.temErro}
        helperText={erros.nome.textoAjuda}
      />

      <TextField
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={handleInputChange}
      />

      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cpf}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        error={erros.cpf.temErro}
        helperText={erros.cpf.textoAjuda}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            color="primary"
            checked={promocoes}
            onChange={handleInputChange}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            checked={novidades}
            onChange={handleInputChange}
          />
        }
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

export default DadosPessoais;
