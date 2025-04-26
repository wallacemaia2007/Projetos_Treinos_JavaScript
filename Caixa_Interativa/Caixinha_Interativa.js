function cor_do_fundo(){
    var fundo = document.getElementById('cor_de_fundo').value
    document.body.style.backgroundColor = fundo
    }
    function cor_das_letras(){
        var letra = document.getElementById('cor_das_letras').value
        document.body.style.color = letra
    }
    function clique_em_min()  {
        window.location.href = "https://github.com/wallacemaia2007"
    }
    function em_cima_de_min(){
        document.querySelector('#clique').style.backgroundColor = 'white'
        document.querySelector('#clique').style.color = 'black'
    }
    function saiu_de_min(){
        document.querySelector('#clique').style.backgroundColor =  document.body.style.backgroundColor
        document.querySelector('#clique').style.color = 'white'
    }
    document.querySelector('.caixinha').addEventListener('click',clicar)
    
    function clicar(){
        document.querySelector('.caixinha').style.backgroundColor = 'red'
    }
    document.querySelector('.caixinha').addEventListener('mouseenter',entrou)

    function entrou(){
        document.querySelector('.caixinha').innerText = 'Entrou!'
        document.querySelector('.caixinha').style.backgroundColor = 'green'
    }
    document.querySelector('.caixinha').addEventListener('mouseout',saiu)

    function saiu(){
        document.querySelector('.caixinha').innerText = 'Saiu!'
        document.querySelector('.caixinha').style.backgroundColor = 'red'
    }
