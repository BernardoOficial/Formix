import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ enviarDados, validarCPF }) {

    const [etapaAtual, setEtapaAtual] = useState(0);

    function uptadeEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    function selecionarFormulario(etapa) {
        
        switch(etapa) {
            case 0:
                return <DadosUsuario uptadeEtapa={uptadeEtapa} />
            case 1:
                return <DadosPessoais enviarDados={enviarDados} validarCPF={validarCPF} />
            case 2:
                return <DadosEntrega />
            default:
                console.error("Falha ao selecionar o Formulário");
        }
    }

    return (
        <>
            {selecionarFormulario(etapaAtual)}
        </>
    )
}

export default FormularioCadastro;