var banner = ["./img/rpg.png", "./img/rpg2.png"];
var bannerAtual = o;

function validaBusca(){

    if(document.querySelector('#q').values==''){

        alert('não podia ter deixado em branco a busca!');
        return false;

    }
}
documento.querySelector('#form-busca').onsubmit = validabusca;

function trocaBanner(){
    document.querySelector('.destaque img rpg').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 1000);

var controle =document.querySelector('.pause');

controle.onclick = function() { 
    if (controle.className == 'pause') { 
        clearInterval(timer); 
        controle.className = 'play'; 
    } 
    else { 
        timer = setInterval(trocaBanner, 1000); 
        controle.className = 'pause'; 
    } 
    return false; 
}; 