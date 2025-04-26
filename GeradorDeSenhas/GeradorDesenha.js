function CriarSenha() {
    let digitos = parseInt(document.getElementById('digitosSenha').value);
    
    if (isNaN(digitos) || digitos < 6 || digitos > 24) {
        alert("Número de dígitos incorreto!");
        document.getElementById('digitosSenha').focus()
        document.getElementById('digitosSenha').style.border = "2px solid red";
        return;
    }

    // Gerar uma senha fake (exemplo simples só pra teste)
    let senha = "Senha" + Math.floor(Math.random() * 10000);

    // Adicionar no select
    let lista = document.getElementById('Senhas');
    let option = document.createElement('option');
    option.text = senha;
    lista.add(option);

    // Só pra mostrar algo no <div id="res">
    document.getElementById('res').innerHTML = "Senha adicionada!";
}

