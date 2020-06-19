
    var i = 0,
    b = 101,
    progressBar = document.getElementById('bar'),
    birds = document.getElementById('audio1'),
    secundo = document.getElementById('audio2'),
    terceiro = document.getElementById('audio3'),
    imergir = document.getElementById('imergir'),
    equalizador = document.getElementById('eq'),
    parar = document.getElementById('parar'),
    lapseNuvens = document.getElementsByName('optradio'),
    divjumbo = document.getElementById('jumbo'),
    svggif = document.getElementById('svggif'),
    sliderdiv = document.getElementById('sliderdiv'),
    bodychange = document.body,
    container = document.getElementById('container'),
    timevol,
    timevol2,
    timeoutNumbers,
    timeoutMudar,
    timeout,
    timeoutImagens;
    birds.volume = 0.0
    secundo.volume = 0.0
    terceiro.volume = 0.0
        
    function countNumbers(){ // FUNCTION PARA PROGREDIR A BARRA, ATIVAR O ÁUDIO E CHAMAR A FUNCTION DE PASSAR IMAGENS
        
        if(i < 100){  
            i++;                       
            progressBar.style.width = `${i}%`
            progressBar.innerHTML = `${i}%`
            bodychange.style.backgroundSize = `${b}%`
            b++;  
                                
            if (i >= 100){
                birds.loop = true
                birds.currentTime
                secundo.loop = true
                secundo.currentTime
                terceiro.loop = true
                terceiro.currentTime
                //gifmeditate()
                girarImgs()
                divjumbo.style.webkitTransition = 'opacity 3s ease-in-out'
                divjumbo.style.opacity = 0
                //parar.style.top = '1%'
                parar.style.webkitTransition = 'opacity 3s ease-in-out'
                parar.style.opacity = 1
                parar.style.visibility = 'visible'
                equalizador.style.visibility = 'visible'
                equalizador.style.webkitTransition = 'opacity 3s ease-in-out'
                equalizador.style.opacity = 0.5
                //divjumbo.setAttribute = ('display', none)
                //divjumbo.style.display = 'none'
                return true
            } 
            
        } 
        
        timeout = setTimeout("countNumbers()", 100); 
    };
        
    function voltarNumbers(){ // RETROCEDER A PORCENTAGEM DA BARRA      
        if (b != 100) {
            b--
            bodychange.style.backgroundSize = `${b}%` 
            progressBar.style.width = `${i}%`
            progressBar.innerHTML = `${i}%`
            i--
        } else  {
            return true
        }
        timeoutNumbers = setTimeout("voltarNumbers()", 50); 
    };
        
    var indexImgs = 0; // FUNCTION DE PASSAR AS IMAGENS DE FUNDO
    function girarImgs(){
        //var posicao1;
        var imgs = document.getElementsByClassName('mySlides')
        for (var posicao1 = 0; posicao1 < imgs.length; posicao1++){
            imgs[posicao1].style.display = "none";
        }

        indexImgs++;

        if (indexImgs > imgs.length) {indexImgs = 1}
        imgs[indexImgs-1].style.display = "block";
        timeoutImagens = setTimeout(girarImgs, 8000);
    }

     // FUNCTION QUE ATIVA VIDEO DE FUNDO
    var videoNuvens = document.getElementById('nuvemvideo')
    function chamarNuvens(){ 
        videoNuvens.playbackRate = 0.5
    if (lapseNuvens[0].checked) {
        videoNuvens.style.visibility = 'visible'
        
    } else {
        videoNuvens.style.visibility = 'hidden'
    }
    }

    function gifmeditate(){

        bodychange.style.background = 'none'
        bodychange.style.backgroundColor = '#000'
        svggif.style.visibility = 'visible'

    }   
    var startTempo2;
    imergir.addEventListener('click', function() { // BOTÃO PRINCIPAL QUE INICIA O ÁUDIO E CHAMA OUTAS VALIDAÇÕES
        
        if (slider.value < 1){
            countNumbers()
            aumentarvolprim()
            //document.body.style.backgroundSize = '101%'
            birds.play()
            this.disabled = true
            h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
            h1pergunta.style.opacity = '0'
            
            
            //equalizador.style.visibility = 'visible'
             
        } else if (slider.value == 1){
            secundo.volume = 0.1
            countNumbers()
            aumentarvolsegundo()
            //birds.play()
            this.disabled = true
            h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
            h1pergunta.style.opacity = '0'
            startTempo2 = setTimeout("secundo.play()", 7000)
            //equalizador.style.visibility = 'visible'
            
        } else {
            terceiro.play()
            terceiro.volume = 0.1
            countNumbers()
            aumentarvolterceiro()
            this.disabled = true
            h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
            h1pergunta.style.opacity = '0'
            window.alert('entrou')
        }
           
    });

    
    var startTempo
    var startTempo3
    var count = 0
    var rotacao = 11
    //var vaudio = document.getElementById('audio1');
    function aumentarvolprim(){ // LOOP PARA AUMENTO CONTÍNUO DO VOLUME
        count++;
        birds.volume = birds.volume + 0.1
        if (count != rotacao){
            startTempo = setTimeout(function(){
                aumentarvolprim()
            }, 1200)
        }
        
    };

    function aumentarvolsegundo(){ // LOOP PARA AUMENTO CONTÍNUO DO VOLUME
        count++;
        secundo.volume = secundo.volume + 0.1
        if (count != rotacao){
            startTempo2 = setTimeout(function(){
                aumentarvolsegundo()
            }, 1200)
        }
        
    };

    function aumentarvolterceiro(){ // LOOP PARA AUMENTO CONTÍNUO DO VOLUME
        count++;
        terceiro.volume = terceiro.volume + 0.1
        if (count != rotacao){
            startTempo3 = setTimeout(function(){
                aumentarvolterceiro()
            }, 1200)
        }
        
    };
    
    parar.addEventListener('click', function() { // BOTÃO QUE CHAMA O RESET
        cabou();
        birds.volume = 0.0
        secundo.volume = 0.0
        divjumbo.style.webkitTransition = 'opacity 3s ease-in-out'
        divjumbo.style.opacity = 1
        parar.style.webkitTransition = 'opacity 3s ease-in-out'
        parar.style.opacity = 0
        parar.style.visibility = 'hidden'
        equalizador.style.webkitTransition = 'opacity 3s ease-in-out'
        equalizador.style.opacity = 0
        equalizador.style.visibility = 'hidden'
        voltarNumbers()
        //document.body.style.backgroundSize = '201%'
    });

    

    function Verificar(){ // VERIFICAR MUDANÇA DO SLIDER
        if (output != 1) {
            h1pergunta.style.opacity = '1'
            window.alert('Espero que tenhamos ajudado você!')
            return true
        } else {
            h1pergunta.style.opacity = '0'
            return false
        }
        
    }

    function limparIntervals(){ // LIMPAR OS TIMERS DOS AUDIOS
        clearInterval(timeout)
        clearInterval(startTempo)
        clearInterval(startTempo2)
        clearInterval(timeoutNumbers)
        clearInterval(timeoutImagens)
        clearInterval(timeoutMudar)
        clearInterval(startTempo3)
    }
    
    function cabou(){ // PARAR E RESETAR TUDO
        //i = 0;
        birds.loop = false
        birds.currentTime = 0
        birds.pause()
        secundo.loop = false
        secundo.currentTime = 0
        secundo.pause()
        terceiro.loop = false
        terceiro.currentTime = 0
        terceiro.pause()
        equalizador.style.visibility = 'hidden'
        limparIntervals()
        progressBar.style.width = 0
        progressBar.setAttribute('aria-valuenow', 0)
        progressBar.innerHTML = '0%'
        imergir.disabled = false
        bodychange.style.visibility = 'visible'
        bodychange.style.backgroundImage = `url(imgs/rainforest5.jpg)`
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
    

    const sliderinput1 = slider.oninput = function(){ // CONTROLADOR DO SLIDER E CHAMADA DE FUNCTIONS COM VALIDAÇÕES
        
        //output.innerHTML = this.value
        var x = slider.value
        emoji.textContent = emojis[x]

        if (x <= 1){
            imergir.style.visibility = 'visible'
            slider.style.background = `linear-gradient(90deg, rgb(117,252,117)50%, rgb(214,214,214)50%)`;
            //parar.style.visibility = 'visible'
            //labelnuvem.style.visibility = 'visible'
            cabou()
            alegre.style.color = 'white'
            triste.style.color = 'white'
            //h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
            //h1pergunta.style.opacity = '0'
            voltarNumbers()
            divjumbo.style.visibility = 'visible'
            sliderdiv.style.visibility = 'visible'
        } 
        if (x > 1) {
            slider.style.background = `linear-gradient(90deg, rgb(117,252,117)100%, rgb(214,214,214)100%)`;
            cabou()
            Verificar()
            alegre.style.color = 'rgb(117,252,117)'
            triste.style.color = 'white'
            //h1pergunta.style.visibility = 'hidden'
            //h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
            //h1pergunta.style.opacity = '0'
            imergir.style.visibility = 'visible'
            //parar.style.visibility = 'visible'
            //labelnuvem.style.visibility = 'visible'
            voltarNumbers()
            divjumbo.style.visibility = 'visible'
            sliderdiv.style.visibility = 'visible'
        } else if (x == 0) {
            slider.style.background = `linear-gradient(90deg, rgb(117,252,117)0%, rgb(214,214,214)0%)`;
            cabou()
            //Verificar()
            triste.style.color = 'rgb(55, 94, 53)'
            alegre.style.color = 'white'
            //h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
            //h1pergunta.style.opacity = '0'
            window.alert('Não fique assim!')
            voltarNumbers()
            divjumbo.style.visibility = 'visible'
            sliderdiv.style.visibility = 'visible'
        } 
        else {
            h1pergunta.style.webkitTransition = 'opacity 2s ease-in-out'
            h1pergunta.style.opacity = '1'
            //divjumbo.style.visibility = 'hidden'
        }

      

    } //TENTAR TROCAR ISTO POR SWITCH

    var slider2 = document.getElementById('ansiometro')
    var emoji2 = document.getElementById('emojis2')
    var emojis2 = ['😰', '🙄' , '😌']

    const sliderinput2 = slider2.oninput = function(){
        
        var v = slider2.value
        emoji2.textContent = emojis2[v]

        if (v <= 1){
           
            slider2.style.background = `linear-gradient(90deg, rgb(117,252,117)50%, rgb(214,214,214)50%)`;
        } 
        if (v > 1) {
            slider2.style.background = `linear-gradient(90deg, rgb(153, 255, 187)100%, rgb(214,214,214)100%)`;
            
        } else if (v == 0) {
            slider2.style.background = `linear-gradient(90deg, rgb(117,252,117)0%, rgb(214,214,214)0%)`;
            
        } 
    }

    var slider3 = document.getElementById('sonometro')
    
        const sliderinput3 = slider3.oninput = function(){
        var s = slider3.value

        if (s <= 1){
            slider3.style.background = `linear-gradient(90deg, rgb(117,252,117)50%, rgb(214,214,214)50%)`;
            
        }
        if (s > 1){
            slider3.style.background = `linear-gradient(90deg, rgb(153, 255, 153)100%, rgb(214,214,214)100%)`;
            
        } else if (s == 0){
            slider3.style.background = `linear-gradient(90deg, rgb(0, 153, 0)0%, rgb(214,214,214)0%)`;
            
        }
        return s
    }

    // JQUERY
    
    $(document).ready(function(){
        var preencheu = false;
        $("i").on('click', function(){   
                $('html, body').animate({
                    scrollTop: $(".waves").offset().top
                }, 4000);
                preencheu = true;
                container.style.webkitTransition = 'opacity 2s ease-in-out'
                container.style.opacity = 0; 
                if(preencheu){
                   setTimeout(function(){
                    container.style.visibility = 'hidden'
                   }, 2000);
                }
        });
        
    });
