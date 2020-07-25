    var i = 0,
    contadorHeight = 75,
    imergir = document.getElementById('imergir'),
    bodychange = document.body,
    container = document.getElementById('container'),
    ondas = document.getElementsByClassName('waves'),
    sectionOndas = document.getElementById('section'),
    player

    // var indexImgs = 0; // FUNCTION DE PASSAR AS IMAGENS DE FUNDO
    // function girarImgs(){
    //     var imgs = document.getElementsByClassName('mySlides')
    //     for (var posicao1 = 0; posicao1 < imgs.length; posicao1++){
    //         imgs[posicao1].style.display = "none";
    //     }

    //     indexImgs++;

    //     if (indexImgs > imgs.length) {indexImgs = 1}
    //     imgs[indexImgs-1].style.display = "block";
    //     timeoutImagens = setTimeout(girarImgs, 8000);
    // }
    
    //Objetos que guardam imagens de fundo do app
    const imagensTenso = [
        {
            triste: "url('./imgs/rangeTenso.jpg')"
        },
        {
            triste: "url('./imgs/rangeTenso2.jpg')"
        },
        {
            triste: "url('./imgs/rangeTenso3.jpg')"
        }
    ];
    
    const imagensNeutral = [
        {
            neutral: "url('./imgs/rangeNeutral.jpg')"
        },
        {
            neutral: "url('./imgs/rangeNeutral2.jpg')"
        },
        {
            neutral: "url('./imgs/rangeNeutral3.jpg')"
        },
        {
            neutral: "url('./imgs/rangeNeutral4.jpg')"
        }
    ];
    
    var checkbox = document.getElementById('alegrometro')
    var emoji = document.querySelector('.emoji')
    const emojis = ['😄', '😩']
    var RandomizarImagens;

    //Começa uma função que chama diferentes açoes baseadas no valor do range checkbox
    var checkboxinput1 = checkbox.onchange = function(){ // CONTROLADOR DO checkbox E CHAMADA DE FUNCTIONS COM VALIDAÇÕES
        console.log(checkbox.checked);
        if(checkbox.checked) {
            //Caso 0, vai tocar áudios específicos e muda o background
            player.audioData = window.audiosTenso;
            RandomizarImagens = imagensTenso[Math.floor(Math.random() * imagensTenso.length)];
            document.body.style.background = RandomizarImagens.triste;
            document.body.style.backgroundRepeat = "no repeat";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
            emoji.textContent = emojis[0]
            }
            else { 
            player.audioData = window.audios;
            RandomizarImagens = imagensNeutral[Math.floor(Math.random() * imagensNeutral.length)];
            document.body.style.background = RandomizarImagens.neutral;
            document.body.style.backgroundRepeat = "no repeat";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
            emoji.textContent = emojis[1]
            
            }
    }


    // JQUERY
    //Variáveis que controlam quando a função ativa ou desativa
    var timer_rolou = 0, timer_progress = 0;
    var meuRange = document.getElementById('playerRange');
    var clickPlay = document.getElementById('buttonM');
    var playerGongo = document.getElementById("playerGongo");
    var secao3 = document.getElementById('secao3')
    console.log(playerGongo.src)
    $(document).ready(function(){
        $("#imergir").on('click', function(){   
            //Evento de click que faz a transição da página para
            //os efeitos de ondas com timer, de 10000 para fim de transição
                
                $('html, body').animate({
                    scrollTop: $("#section").offset().top
                }, 1000);

                //playerGongo é o inicio da meditação quando sobe a onda
                playerGongo.play()
                container.style.webkitTransition = 'opacity 2s ease-in-out'
                container.style.opacity = 0;       
                
                //Este timeout ativa duas funções com timer de 8 segs
                //e desabilita visibilidade do container
                setTimeout(function(){
                    container.style.visibility = 'hidden';                  
                    setTimeout(() => {

                        sectionOndas.style.webkitTransition = 'opacity 2s ease-in-out'
                        sectionOndas.style.opacity = 0;

                        setTimeout(() => {
                            sectionOndas.style.visibility = 'hidden'
                        }, 15000)
                        ativarPlayer()
                        secao3.style.webkitTransition = 'opacity 2s ease-in-out'
                        secao3.style.opacity = '1'
                        secao3.style.visibility = 'visible'
                        window.player.start()
                        Meditar()
                    }, 15000)

                    

                }, 1000);
        });   
    });

//Variáveis de teste
var mudar = document.querySelector(".buttonM")
var proximaMeditacao = document.getElementById('NextMeditation')
var inputRange = document.querySelector(".inputRange");
var root = document.documentElement;
var valor = 1;
var tempo_falta_transition;

//Cria o player com Jquery que rola o timer
function ativarPlayer() {
    $("#playerRange").roundSlider({
        sliderType: "range",
        min: 1,
        max: 240,
        value: valor,
        startValue: 1,
        showTooltip: false,
        radius: 70,
        width: 10,
        svgMode: true,
        sliderType: "range",
        rangeColor: "rgb(17, 91, 228)",
        pathColor: "#B6174B",
        borderWidth: 0,
        readOnly: true,
        keyboardAction: false
        
    });
}

var contadorPlayer = 0
var controladorPlayer = false;

//AO CLICAR NO BTN PLAY/PAUSE
mudar.addEventListener('click', Meditar, false);

function Meditar() {
    window.player.togglePlayPause();
    if(window.player.isPlaying) {
        console.log('animar');
        ativarPlayer();
        controladorSlider();
        mudar.innerHTML = `Pausar &#${10074}&#${10074}`;   
        // root.style.setProperty('--transition-duration', `${inputRange.value}s`);
        // if (tempo_falta_transition > 1) {
        //     root.style.setProperty('--transition-duration', `${0}s`);
        //     root.style.setProperty('--transition-duration', `${tempo_falta_transition}s`);
        // } 
        } else {
            // console.log(root.style.getPropertyValue('--transition-duration'));
            // tempo_falta_transition = 240 - valor;
            ResetarPlayer();
            clearTimeout(tempo_do_slider);
            setTimeout(() => {
                $("#playerRange").roundSlider("option", "value", valor)
            }, 0)
            ativarPlayer();
            mudar.innerHTML = `Play &#${9658}`;

        }
    if (contadorPlayer > 0){         
    } else {
        timerPlayer()
    }
}

proximaMeditacao.addEventListener('click', () => {
    //Começa a próxima meditação
    window.player.next();

    if(window.player.isPlaying) {
        clearTimeout(tempo_do_slider);
        valor = 1
        setTimeout(() => {
            $("#playerRange").roundSlider("option", "value", valor)
        }, 0);
        controladorSlider();
        ResetarPlayer();
        mudar.innerHTML = `Pausar &#${10074}&#${10074}`; 
    } else {
        window.player.togglePlayPause();
        // mudar.innerHTML = `Pausar &#${10074}&#${10074}`;        
        clearTimeout(tempo_do_slider);
        setTimeout(() => {
            $("#playerRange").roundSlider("option", "value", 1)
        }, 1000);
        controladorSlider();
        ResetarPlayer();
        ativarPlayer();
        mudar.innerHTML = `Pausar &#${10074}&#${10074}`;
    }
    if (contadorPlayer > 0){         
    } else {
        timerPlayer()
    }
})

//Variáveis de controle de tempo do Player
var tempo_do_slider   
var tempo_do_player

//Aumento contínuo do valor no Player
function controladorSlider() {
    valor++;
    $("#playerRange").roundSlider("option", "value", valor)
    tempo_do_slider = setTimeout(controladorSlider, 500);
    if (valor == 240){
        clearTimeout(tempo_do_slider);
        valor = 1;
    }
}

function timerPlayer() {
    //Contador que verifica a posição do timing do player
    contadorPlayer++
    //Tempo que roda em volta do player
    tempo_do_player = setTimeout(timerPlayer, 500);
    if(contadorPlayer >= 240) {
        //Reseta o player se o contador for igual o valor do input do usuário
        clearTimeout(tempo_do_player)
        // root.style.setProperty('--transition-duration', `${0}s`)
        contadorPlayer = 0
        setTimeout(() => {
            $("#playerRange").roundSlider("option", "value", 1)
        }, 1000)
        mudar.innerHTML = `Play &#${9658}`;
        playerGongo.play()
        console.log("timer player")
    }

}

function ResetarPlayer(){
    clearTimeout(tempo_do_player)
    // root.style.setProperty('--transition-duration', `${0}s`)
    contadorPlayer = 0
    mudar.innerHTML = `Play &#${9658}`
    console.log("Resetou")
}


    //*******ABAIXO DESTA LINHA SÃO COMANDOS NÃO UTILIZADOS NO APP*********

    var tempo_func_onda, tempo_func_progress

    //função com timer de 2 milisegundos que decrementa o css
    //do elemento de efeito das ondas
    //e ao final verifica se alcançou o esperado e desativa o loop
    //da função
    function ondaTimer(){
        // document.getElementById('ondasPos').style.top = `${contadorHeight}vh`
        contadorHeight--
        tempo_func_onda = setTimeout(ondaTimer, 0)
        if(contadorHeight <= 0){
            clearTimeout(tempo_func_onda)
            timer_rolou = 0
        }
    }
    
    //função parecida com a anterior, porém, incrementa o progressbar
    //e faz a verificação ao final
    function timerProgress(){
        i++                  
        // progressBar.style.width = `${i}%`
        // progressBar.innerHTML = `${i}%`
        tempo_func_progress = setTimeout(timerProgress, 1000)
        if (i >= 100){
            clearTimeout(tempo_func_progress);
            timer_progress = 0;
            sectionOndas.style.webkitTransition = 'opacity 3s ease-in-out';
            sectionOndas.style.opacity = 0;
            document.body.style.background.webkitTransition = 'opacity 3s ease-in-out';
            document.body.style.background.opacity = 0;
            setTimeout(() => {
            sectionOndas.style.display = "none"
            // document.body.style.display = "none";
            }, 3000)
        }
    };

//Troca de música por sequência de armazenagem em array
//Tirando sempre a primeira do array e ao final colocando as mesmas novamente

var musicas = [0, 1, 2, 3, 4];
var musicaTocada = [];

imergir.addEventListener('click' , () => {
    
    if(musicas.length <= 0){
        musicas = [...musicaTocada];
        console.log(musicas);
    } else {
        musicas.shift();
        console.log(musicas);
        }
       
    });
    
musicaTocada = [...musicas];

//  musica = musicas[Math.floor(Math.random() * musicas.length)];
//  var tempoSegundo = Math.floor(secundo.currentTime)
//  var tempoPrimeiro = Math.floor(secundo.duration)
//  console.log((tempoSegundo / tempoPrimeiro) * 100)

function func1() {
    return 2;
}

function func2() {
    return 3;
}
    
Promise.resolve().then(() => console.log(2));
console.log(1);

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log('você?'));
Promise.resolve().then(() => console.log('como')).then(() => console.log('vai'));
console.log('oi');
