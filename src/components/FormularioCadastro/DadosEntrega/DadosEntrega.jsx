import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';

function DadosEntrega() {
    
    return(
        <form>
            <TextField
                id="cep"
                name="cep"
                label="CEP"
                type="number"
                variant="outlined"
                autoFocus={true}
                fullWidth
                margin="normal"
            />

            <TextField
                id="endereco"
                name="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            
            <TextField
                id="numero"
                name="numero"
                label="Número"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                id="estado"
                name="estado"
                label="Estado"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            
            <TextField
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
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
                    Finalizar Cadastro
                </Button>
            </Box>
        </form>
    );
}

export default DadosEntrega