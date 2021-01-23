import Button from '@material-ui/core/Button'

function FormularioCadastro() {

    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />

            <label htmlFor="sobrenome">Sobrenome</label>
            <input type="text" id="sobrenome" />

            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />

            <label htmlFor="promocoes">Promoções</label>
            <input type="checkbox" id="promocoes" />

            <label htmlFor="novidades">Novidades</label>
            <input type="checkbox" id="novidades" />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;