
function valor(numero){
    document.getElementById('tela').value += numero;
}
function resultado(){
    let conta =  document.getElementById('tela').value;
    try{
        document.getElementById('tela').value = eval(conta)
    }catch{
        document.getElementById('tela').value = 'Error'
    }
}
function limpar(){
    document.getElementById('tela').value = ''
}
