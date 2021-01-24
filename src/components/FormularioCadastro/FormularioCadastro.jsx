import React, { useState } from 'react';
import { Box, Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function FormularioCadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");

    function handleInputChange(evento) {
        const nomeInserido = evento.target.form.nome.value;
        const sobrenomeInserido = evento.target.form.sobrenome.value;
        const cpfInserido = evento.target.form.cpf.value;

        setNome(nomeInserido);
        setSobrenome(sobrenomeInserido);
        setCPF(cpfInserido);
    }

    function enviarDados(evento) {
        evento.preventDefault();
        console.log(nome, sobrenome, cpf);
    }

    return (
        <form onSubmit={enviarDados}>
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
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        name="promocoes"
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name="novidades"
                        color="primary"
                    />
                }
            />

            <Box mt={5}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Cadastrar
                </Button>
            </Box>
        </form>
    )
}

export default FormularioCadastro;