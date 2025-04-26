function adicionarOpcao(){
    const valor = document.getElementById('novoValor').value;
    if (valor === ''){
        alert('Digite um valor para enviar');
        document.getElementById('novoValor').focus();
        document.getElementById('novoValor').style.border = '1px solid red'
        return;
    }else{
        const novaopcao = document.createElement('option');
        const SelectCaixa = document.getElementById('Select');

        novaopcao.value = valor
        novaopcao.text = valor 

        SelectCaixa.appendChild(novaopcao);
        document.getElementById('novoValor').focus();
        document.getElementById('novoValor').value = ''
    }
}