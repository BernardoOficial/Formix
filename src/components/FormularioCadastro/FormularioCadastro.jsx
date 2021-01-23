import React from 'react';
import { Box, Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function FormularioCadastro() {

    return (
        <form>
            <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                autoFocus={true}
                fullWidth
                margin="normal"
            />

            <TextField
                id="outlined-basic"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                id="outlined-basic"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
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