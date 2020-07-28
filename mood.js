var imergir = document.getElementById('imergir'),
bodychange = document.body,
container = document.getElementById('container'),
ondas = document.getElementsByClassName('waves'),
sectionOndas = document.getElementById('section'),
player,        
checkbox = document.getElementById('alegrometro'),
emoji = document.querySelector('.emoji'),
perguntaNext = document.getElementById('perguntaNext'),
meuRange = document.getElementById('playerRange'),
clickPlay = document.getElementById('buttonM'),
playerGongo = document.getElementById("playerGongo"),
secao3 = document.getElementById('secao3'),
mudar = document.querySelector(".buttonM"),
btnNext = document.getElementById('NextMeditation'),
contadorPlayer = 0,
controladorPlayer = false,
tempo_do_contador;

//btn play/pause
mudar.addEventListener('click', Meditar, false);

//btn next song
btnNext.addEventListener('click', nextSong, false);

//chk humor
checkbox.addEventListener('change', function(){
    if(checkbox.checked) {
        //feliz
        player.audioData = window.audiosMeditativos;
        emoji.textContent = '😄';
        novoFavicon = faviconTemplate`${emoji.textContent}`
        linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${novoFavicon}`);
    }
    else { 
        //triste
        player.audioData = window.audiosNatureza;
        emoji.textContent = '😩';
        novoFavicon = faviconTemplate`${emoji.textContent}`
        linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${novoFavicon}`);
    }
});

//btn imergir
imergir.addEventListener('click', function() {
    var speed = 5000;

    //playerGongo é o inicio da meditação quando sobe a onda
    playerGongo.play()

    //efeito de fadeout do container
    toggleClass(container, sectionOndas, 'hiddenElement');

    //animar section onda
    $('html, body').animate({
        scrollTop: $("#section").offset().top
    }, speed);

    setTimeout(() => {
        toggleClass(sectionOndas, secao3, 'hiddenElement');
        window.player.start(); //iniciar o player
        Meditar(); //meditação
    }, speed)
});

//player jQuery
function ativarPlayer() {
    $("#playerRange").roundSlider({
        sliderType: "range",
        min: 0,
        max: 30,
        value: contadorPlayer,
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


//meditar
function Meditar() {
    window.player.togglePlayPause();
    
     if(window.player.isPlaying) {
        //play
        ativarPlayer(); //animação player
        timerPlayer(); //controla o tempo
        
        mudar.innerHTML = `Pausar &#${10074}&#${10074}`;
    } else {
        //pause
        pausePlayer(); //parar controlador do player
        $("#playerRange").roundSlider("option", "value", contadorPlayer)
        ativarPlayer(); //animação do player
       
        mudar.innerHTML = `Play &#${9658}`;
    }
}

//próxima meditação
function nextSong() {
    contadorPlayer = 0 //zerar tempo
    $("#playerRange").roundSlider("option", "value", contadorPlayer);

    pausePlayer();
    playerGongo.play() //sinal final
    mudar.classList.add('hiddenElement');
    
    //aparecer mensagem
    toggleClass(btnNext, perguntaNext, 'hiddenElement')

    window.player.pause(); //Pausa o player

    //depois de 5s iniciar próxima meditação
    setTimeout(() => {
        window.player.next(); //próxima meditação
        Meditar(); //inicia nova meditação
        mudar.innerHTML = `Pausar &#${10074}&#${10074}`
    }, 5000);
    
}

//controlador do tempo
function timerPlayer() {
    //aparecer botão
    toggleClass(perguntaNext, btnNext, 'hiddenElement')
    mudar.classList.remove('hiddenElement');

    //Contador que verifica a posição do timing do player
    contadorPlayer++
    $("#playerRange").roundSlider("option", "value", contadorPlayer)

    //Tempo que roda em volta do player
    tempo_do_contador = setTimeout(timerPlayer, 500);

    //fim da meditação
    if(contadorPlayer == 30) {
        window.player.togglePlayPause();
        nextSong();        
    }    
};

//parar controlador
function pausePlayer(){
    clearTimeout(tempo_do_contador)
    mudar.innerHTML = `Play &#${9658}`
};

//show/hidden element
function toggleClass(add, remove, classe) {
    add.classList.add(classe)
    remove.classList.remove(classe)
}

//mudar favicon com emoji selecionado
const linkForFavicon = document.querySelector(
    `head > link[rel='icon']`
  );
  
  function faviconTemplate(string, icon) {
    return `
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${icon}
        </text>
      </svg>
    `.trim();
  };
  