$(document).ready(function(){
    var contador = 0;

    $("div").mouseenter(function(){
        $("div#caixa").css("background", "green");
    })

    $("div#caixa").mouseleave(function () { 
        $("div#caixa").css("background", "red");
    });

    $("div#caixa").click(function (e) { 
        e.preventDefault();
        $("div#caixa").css("background","blue");
    });
    $("div#caixa").dblclick(function (){
        $("div#caixa").slideUp();
        if(contador == 0){
            $("#botao").after('<button id="botaoClique">Clique Aqui!</button>');
            contador++;
        }
    });
    $(document).on("click", "#botaoClique", function(){
        $("div#caixa").fadeIn();

    });
});