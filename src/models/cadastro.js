function validarCPF(cpf) {

  let temErro = false;
  let textoAjuda = "";

  if (cpf.length !== 11) {
    temErro = true;
    textoAjuda = "O CPF precisa ter 11 dígitos";
  }

  return {
    temErro,
    textoAjuda
  }
}

function validarSenha(senha) {

  let temErro = false;
  let textoAjuda = "";

  if (senha.length < 4 || senha.length > 72) {
    temErro = true;
    textoAjuda = "A senha precisa ter entre 4 e 72 dígitos";
  }

  return {
    temErro,
    textoAjuda
  }
}

function validarNome(nome) {

  let temErro = false;
  let textoAjuda = "";

  const semEspaços = nome.trim();
  const nomeLength = semEspaços.length;

  if (nomeLength < 10) {
    temErro = true;
    textoAjuda = "O nome precisa ter mais de 10 caracteres";
  }

  return {
    temErro,
    textoAjuda
  }
}

export { validarCPF, validarSenha, validarNome };