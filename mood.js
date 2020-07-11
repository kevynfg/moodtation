    var i = 0,
    contadorHeight = 75,
    b = 101,
    // progressBar = document.getElementById('bar'),
    secundo = document.getElementById('audio2'),
    terceiro = document.getElementById('audio3'),
    imergir = document.getElementById('imergir'),
    equalizador = document.getElementById('eq'),
    parar = document.getElementById('parar'),
    sliderdiv = document.getElementById('sliderdiv'),
    bodychange = document.body,
    container = document.getElementById('container'),
    ondas = document.getElementsByClassName('waves'),
    paragrafo = document.getElementById('setaBaixo'),
    rodar = document.getElementById('rodar'),
    sectionOndas = document.getElementById('section'),
    circuloPorcentagem = document.getElementById('circuloPorcentagem'),
    player,
    timevol2,
    timeoutNumbers,
    timeoutMudar,
    timeout,
    timeoutOndas,
    timeoutImagens;


    // function countNumbers(){ // FUNCTION PARA PROGREDIR A BARRA, ATIVAR O ÁUDIO E CHAMAR A FUNCTION DE PASSAR IMAGENS
        
    //     if(i < 100){  
    //         i++                  
    //         // progressBar.style.width = `${i}%`
    //         // progressBar.innerHTML = `${i}%`

    //         if (i >= 100){
    //             girarImgs()
    //             parar.style.webkitTransition = 'opacity 3s ease-in-out'
    //             parar.style.opacity = 1
    //             parar.style.visibility = 'visible'
    //             equalizador.style.visibility = 'visible'
    //             equalizador.style.webkitTransition = 'opacity 3s ease-in-out'
    //             equalizador.style.opacity = 0.5
    //             return true
    //         } 
            
    //     } 
        
    //     timeout = setTimeout("countNumbers()", 300); 
    // };



    // function voltarNumbers(){ // RETROCEDER A PORCENTAGEM DA BARRA      
    //     if (b != 100) {
    //         b--
    //         bodychange.style.backgroundSize = `${b}%` 
    //         progressBar.style.width = `${i}%`
    //         progressBar.innerHTML = `${i}%`
    //         i--
    //     } else  {
    //         return true
    //     }
    //     timeoutNumbers = setTimeout("voltarNumbers()", 50); 
    // };
        
    var indexImgs = 0; // FUNCTION DE PASSAR AS IMAGENS DE FUNDO
    function girarImgs(){
        var imgs = document.getElementsByClassName('mySlides')
        for (var posicao1 = 0; posicao1 < imgs.length; posicao1++){
            imgs[posicao1].style.display = "none";
        }

        indexImgs++;

        if (indexImgs > imgs.length) {indexImgs = 1}
        imgs[indexImgs-1].style.display = "block";
        timeoutImagens = setTimeout(girarImgs, 8000);
    }

    // var startTempo2;
    // imergir.addEventListener('click', function() { // BOTÃO PRINCIPAL QUE INICIA O ÁUDIO E CHAMA OUTAS VALIDAÇÕES
        
    //     if (slider.value < 1){
    //         countNumbers()
    //         aumentarvolprim()
    //         // birds.play()
    //         audioMood.play();
    //         this.disabled = true
    //         h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
    //         h1pergunta.style.opacity = '0'
            
            
            
             
    //     } else if (slider.value == 1){
    //         secundo.volume = 0.1
    //         countNumbers()
    //         aumentarvolsegundo()
    //         //birds.play()
    //         this.disabled = true
    //         h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
    //         h1pergunta.style.opacity = '0'
    //         startTempo2 = setTimeout("secundo.play()", 7000)
            
    //     } else {
    //         terceiro.play()
    //         terceiro.volume = 0.1
    //         countNumbers()
    //         aumentarvolterceiro()
    //         this.disabled = true
    //         h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
    //         h1pergunta.style.opacity = '0'
    //         window.alert('entrou')
    //     }
           
    // });

    
    // var startTempo
    // var startTempo3
    // var count = 0
    // var rotacao = 11
    // function aumentarvolprim(){ // LOOP PARA AUMENTO CONTÍNUO DO VOLUME
    //     count++;
    //     birds.volume = birds.volume + 0.1
    //     if (count != rotacao){
    //         startTempo = setTimeout(function(){
    //             aumentarvolprim()
    //         }, 1200)
    //     }
        
    // };

    // function aumentarvolsegundo(){ // LOOP PARA AUMENTO CONTÍNUO DO VOLUME
    //     count++;
    //     secundo.volume = secundo.volume + 0.1
    //     if (count != rotacao){
    //         startTempo2 = setTimeout(function(){
    //             aumentarvolsegundo()
    //         }, 1200)
    //     }
        
    // };

    // function aumentarvolterceiro(){ // LOOP PARA AUMENTO CONTÍNUO DO VOLUME
    //     count++;
    //     terceiro.volume = terceiro.volume + 0.1
    //     if (count != rotacao){
    //         startTempo3 = setTimeout(function(){
    //             aumentarvolterceiro()
    //         }, 1200)
    //     }
        
    // };
    
    // parar.addEventListener('click', function() { // BOTÃO QUE CHAMA O RESET
    //     cabou();
    //     birds.volume = 0.0
    //     secundo.volume = 0.0
    //     parar.style.webkitTransition = 'opacity 3s ease-in-out'
    //     parar.style.opacity = 0
    //     parar.style.visibility = 'hidden'
    //     equalizador.style.webkitTransition = 'opacity 3s ease-in-out'
    //     equalizador.style.opacity = 0
    //     equalizador.style.visibility = 'hidden'
    //     voltarNumbers()
    // });

    

    // function Verificar(){ // VERIFICAR MUDANÇA DO SLIDER
    //     if (output != 1) {
    //         h1pergunta.style.opacity = '1'
    //         // window.alert('Espero que tenhamos ajudado você!')
    //         return true
    //     } else {
    //         h1pergunta.style.opacity = '0'
    //         return false
    //     }
        
    // }

    function limparIntervals(){ // LIMPAR OS TIMERS DOS AUDIOS
        clearInterval(timeout)
        clearInterval(timeoutNumbers)
        clearInterval(timeoutImagens)
        clearInterval(timeoutMudar)
    }
    


     function cabou(){ // PARAR SONS E RESETAR TUDO
         equalizador.style.visibility = 'hidden'
        limparIntervals()
        // progressBar.style.width = 0
        // progressBar.setAttribute('aria-valuenow', 0)
        // progressBar.innerHTML = '0%'
        imergir.disabled = false
        buscarBlock = document.getElementsByClassName('mySlides')
            for(let k = 0; k < buscarBlock.length; k++ ){
                if (buscarBlock[k].style.display != 'none'){
                buscarBlock[k].style.display = 'none'
                }
            } 
    
        
    }

    var slider = document.getElementById('alegrometro')
    var output = document.getElementById('valor')
    var emoji = document.querySelector('.emoji')
    var spantriste = document.getElementById('triste')
    var spanalegre = document.getElementById('alegre')
    var h1pergunta = document.getElementById('comoesta')
    var labelnuvem = document.getElementById('lblnuvem')
    const emojis = ['😩', '😶', '😄']
    //output.innerHTML = slider.value
    


    // const sliderinput1 = slider.oninput = function(){ // CONTROLADOR DO SLIDER E CHAMADA DE FUNCTIONS COM VALIDAÇÕES
        
        
    //     var x = slider.value
    //     emoji.textContent = emojis[x]

    //     if (x <= 1){
    //         imergir.style.visibility = 'visible'
    //         slider.style.background = `linear-gradient(90deg, rgb(117,252,117)50%, rgb(214,214,214)50%)`;
    //         cabou()
    //         alegre.style.color = 'white'
    //         triste.style.color = 'white'
    //         //h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
    //         //h1pergunta.style.opacity = '0'
    //         // voltarNumbers()
    //         sliderdiv.style.visibility = 'visible'
    //     } 
    //     if (x > 1) {
    //         slider.style.background = `linear-gradient(90deg, rgb(117,252,117)100%, rgb(214,214,214)100%)`;
    //         cabou()
    //         // Verificar()
    //         alegre.style.color = 'rgb(117,252,117)'
    //         triste.style.color = 'white'
    //         imergir.style.visibility = 'visible'
    //         //parar.style.visibility = 'visible'
    //         // voltarNumbers()
    //         sliderdiv.style.visibility = 'visible'
    //     } else if (x == 0) {
    //         slider.style.background = `linear-gradient(90deg, rgb(117,252,117)0%, rgb(214,214,214)0%)`;
    //         cabou()
    //         //Verificar()
    //         triste.style.color = 'rgb(55, 94, 53)'
    //         alegre.style.color = 'white'
    //         // voltarNumbers()
    //         sliderdiv.style.visibility = 'visible'
    //     } 
    //     else {
    //         h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
    //         h1pergunta.style.opacity = '1'
    //     }

      

    // } //TENTAR TROCAR ISTO POR SWITCH


    //Variáveis e função de controle do range
    //com mudança de background color
    var slider2 = document.getElementById('ansiometro')
    var emoji2 = document.getElementById('emojis2')
    var emojis2 = ['😰', '🙄' , '😌']

    // const sliderinput2 = slider2.oninput = function(){
        
    //     var v = slider2.value
    //     emoji2.textContent = emojis2[v]

    //     if (v <= 1){
           
    //         slider2.style.background = `linear-gradient(90deg, rgb(117,252,117)50%, rgb(214,214,214)50%)`;
    //     } 
    //     if (v > 1) {
    //         slider2.style.background = `linear-gradient(90deg, rgb(153, 255, 187)100%, rgb(214,214,214)100%)`;
            
    //     } else if (v == 0) {
    //         slider2.style.background = `linear-gradient(90deg, rgb(117,252,117)0%, rgb(214,214,214)0%)`;
            
    //     } 
    // }

    // JQUERY
    //Variáveis que controlam quando a função ativa ou desativa
    var timer_rolou = 0, timer_progress = 0;

    $(document).ready(function(){
        $("#imergir").on('click', function(){   
            //Evento de click que faz a transição da página para
            //os efeitos de ondas com timer, de 10000 para fim de transição
                
                $('html, body').animate({
                    scrollTop: $("#section").offset().top
                }, 15000);

                container.style.webkitTransition = 'opacity 2s ease-in-out'
                container.style.opacity = 0;            
                
                //Este timeout ativa duas funções com timer de 8 segs
                //e desabilita visibilidade do container
                setTimeout(function(){
                    container.style.visibility = 'hidden';                  
                    // setTimeout(ComecaContar(), 0);
                    // setTimeout(ComecaProgress(),0)

                    window.player.start();

                    sectionOndas.style.webkitTransition = 'opacity 2s ease-in-out'
                    sectionOndas.style.opacity = 0;
                    setTimeout(() => {
                        sectionOndas.style.visibility = 'hidden'
                    }, 2000)
                    document.body.style.background = "url('./imgs/meditationpage.jpg')";
                    document.body.style.backgroundRepeat = "no repeat";
                    document.body.style.backgroundPosition = "center";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.backgroundAttachment = "fixed";
                }, 15000);      
                
                

                function ComecaContar(){
                    if (!timer_rolou){
                        timer_rolou = 1;
                        ondaTimer();
                    }
                }
                function ComecaProgress(){
                    if (!timer_progress){
                        timer_progress = 1;
                        timerProgress();
                    }
                }
                // ComecaContar();
        });

       
        // $("i").click(comecar())
        
    });


    var tempo_func_onda, tempo_func_progress;

    //função com timer de 2 milisegundos que decrementa o css
    //do elemento de efeito das ondas
    //e ao final verifica se alcançou o esperado e desativa o loop
    //da função
    function ondaTimer(){
        // document.getElementById('ondasPos').style.top = `${contadorHeight}vh`
        contadorHeight--
        tempo_func_onda = setTimeout(ondaTimer, 0)
        if(contadorHeight <= 0){
            clearTimeout(tempo_func_onda);
            timer_rolou = 0;
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
            sectionOndas.style.display = "none";
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

 //ALTERANDO O CIRCLE PROGRESS

 
//  var tempoSegundo = Math.floor(secundo.currentTime)
//  var tempoPrimeiro = Math.floor(secundo.duration)
//  console.log((tempoSegundo / tempoPrimeiro) * 100)


// var containerPaleta = document.querySelector(".grid-container");

// document.body.onload = () => {
//     for(t = 1; t <= 5; t++){

//         var divPaleta = document.createElement("div");
//         divPaleta.setAttribute("id",`id${t}`)
//         divPaleta.innerHTML = '🙄';
//         containerPaleta.appendChild(divPaleta);
        
//     }
// }

//TESTE DE ERRO

// var mood = 0;
// containerPaleta.addEventListener('click', e => {
    
//     switch (mood){
//         case 1: mood = 1;
//         break;
//         default: console.log("deu ruim");
//     }
//     console.log(mood);
// } )

//DEU CERTO


const sliderinput1 = slider.oninput = function(){ // CONTROLADOR DO SLIDER E CHAMADA DE FUNCTIONS COM VALIDAÇÕES
        
        
    var x = slider.value
    emoji.textContent = emojis[x]

    switch (x) {
        
        case '0': 
        player.audioData = window.audiosTenso;
        console.log(x);
        break;

        case '1': 
        player.audioData = window.audios;
        console.log(x);
        break;

        case '2': console.log(x);
        break;

        default: console.log("deu ruim");
    }

}