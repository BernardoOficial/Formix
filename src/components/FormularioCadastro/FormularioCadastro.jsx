import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel'

function FormularioCadastro() {

    return (
        <Container maxWidth="sm">
            <form>
                <TextField
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    id="outlined-basic"
                    label="Sobrenome"
                    variant="outlined"
                    fullWidth
                    my="20px"
                />

                <TextField
                    id="outlined-basic"
                    label="CPF"
                    variant="outlined"
                    fullWidth
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

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Cadastrar
            </Button>
            </form>
        </Container>
    )
}

export default FormularioCadastro;