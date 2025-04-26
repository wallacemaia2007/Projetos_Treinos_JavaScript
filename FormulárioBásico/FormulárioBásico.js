
// Aqui criei um array para salvar todos os retornos de cada campo de imput 

function para_enviar() { 
    const validacoes = [
        nome(),
        gmail(),
        gmail2n(),
        senha(),
        cpf(),
        Sexo(),
        cep(),
        idade()
    ];

    for (let contador = 0; contador < validacoes.length; contador++) {
        if (!validacoes[contador]) { // Este contador irá analizar cada valor na array acima para verificar se é true ou false
            return false; 
        }
    }
    return true; // Caso todos respondam true ele irá retornar para a função para_enviar() o valor de true
}



// Caso a função para_enviar() seja true irá mandar um alerta dizendo que foi cadastrado com sucesso

function enviarFormulario() { 
    if (para_enviar()) {
        alert("✅ Cadastrado com sucesso!");
    }
}


// Aqui é uma função de mensagem de erro, e seus valores recebem parametros para as outras funcoes deixarem suas mensagens


function MensagemError(mensagem, corfundo) { 
    Toastify({
        text: mensagem,
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor: corfundo,
        close: true,
        style: {
            width: "100px",
            height: "30px",
            textAlign: "center",
        }
    }).showToast();
}


//FUNÇÕES DOS INPUTS PARA VALIDA-LOS 


function nome() {
    const nome = document.querySelector('#Nome').value;
    if (nome === '') {
        MensagemError('Nome Inválido', 'red');
        return false;
    }
    return true;
}

function gmail() {
    const gmail = document.querySelector('#Gmail').value;
    if (gmail === '') {
        MensagemError('Gmail Inválido', 'red');
        return false;
    }
    return true;
}

function gmail2n() {
    const gmail = document.querySelector('#Gmail').value;
    const gmailn2 = document.querySelector('#Gmailn2').value;
    if (gmailn2 !== gmail) {
        MensagemError('Os gmails são diferentes', 'red');
        return false;
    }
    return true;
}

function senha() {
    const senha = document.querySelector('#Senha').value;
    if (senha === '') {
        MensagemError('Senha Inválida', 'red');
        return false;
    }
    return true;
}

function cpf() {
    const cpf = document.querySelector('#CPF').value;
    if (cpf === '') {
        MensagemError('CPF Inválido', 'red');
        return false;
    }
    return true;
}

function Sexo() {
    const selecionado = document.querySelector('input[name="sexo"]:checked');
    if (!selecionado) {
        MensagemError('Sexo Inválido', 'red');
        return false;
    }
    return true;
}

function cep() {
    const cep = document.querySelector('#Cep').value;
    if (cep === '') {
        MensagemError('CEP Inválido', 'red');
        return false;
    }
    return true;
}

function idade() {
    const idade = document.querySelector('#idade').value;
    if (idade === '') {
        MensagemError('Idade Inválida', 'red');
        return false;
    }
    return true;
}
