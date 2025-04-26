function enviar_horas(){
    let horas = document.getElementById('tempo').value
    if(horas > 23 || horas < 0){
        alert('Horas Inválidas')
    }
    else if(horas > 6 && horas <= 12){
        document.getElementById('res').innerHTML = '<h2>Bom dia!<h2>'
        document.getElementById("img").innerHTML = '<img src="Bom_dia.jpg" alt="Bom dia!" width:"400px" height="200px">';
        document.body.style.background = '#d2d323'
    }else if( horas > 12 && horas < 18){
        document.getElementById('res').innerHTML = '<h2>Boa Tarde!</h2>'
        document.getElementById("img").innerHTML = '<img src="Boa_tarde.jpg" alt="Bom dia!" width:"400px" height="200px">';
        document.body.style.background = 'orange'
    }else{
        document.getElementById('res').innerHTML = '<h2>Boa noite! <h2>'
        document.getElementById("img").innerHTML = '<img src="Boa_noite.jpg" alt="Bom dia!" width:"400px" height="200px">';
        document.body.style.background = '#13054f'

    }
}