import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';

function DadosUsuario({ uptadeEtapa }) {

    function handleFormSubmit(evento) {
        evento.preventDefault();
        uptadeEtapa();
    }

    return(
        <form 
            onSubmit={handleFormSubmit}
        >
            <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                autoFocus={true}
                fullWidth
                margin="normal"
            />

            <TextField
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Box mt={5}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Próxima Etapa
                </Button>
            </Box>
        </form>
    );
}

export default DadosUsuario;