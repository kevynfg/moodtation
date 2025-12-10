var imergir = document.getElementById("imergir"),
  bodychange = document.body,
  container = document.getElementById("container"),
  ondas = document.getElementsByClassName("waves"),
  sectionOndas = document.getElementById("section"),
  player,
  checkbox = document.getElementById("alegrometro"),
  emoji = document.querySelector(".emoji"),
  emoji2 = document.querySelector(".emoji2"),
  perguntaNext = document.querySelector("#perguntaNext"),
  perguntaFim = document.querySelector("#perguntaFim"),
  meuRange = document.getElementById("playerRange"),
  clickPlay = document.getElementById("buttonM"),
  playerGongo = document.getElementById("playerGongo"),
  secao3 = document.getElementById("secao3"),
  mudar = document.querySelector(".meditar"),
  btnNext = document.getElementById("btnProxima"),
  btnContinuar = document.getElementById("btnContinuar"),
  btnSair = document.getElementById("btnSair"),
  btnVoltar = document.getElementById("btnVoltar"),
  textoBoasVindas = document.getElementById("comoesta"),
  textoBoasVindas2 = document.getElementById("comoesta2"),
  contadorPlayer = 0,
  tempo_maximo_player = 0,
  i,
  timeout_loadingPlayer,
  tempo_do_contador;

//btn play/pause
mudar.addEventListener("click", Meditar, false);

//btn next song
btnNext.addEventListener("click", nextSong, false);

//btn Continuar meditação
btnContinuar.addEventListener(
  "click",
  () => {
    nextSong();
    window.player.next(); //próxima meditação
    Meditar(); //inicia nova meditação
    perguntaFim.classList.add("hiddenElement");
    // toggleClass(perguntaFim, perguntaNext, 'hiddenElement');
    btnVoltar.classList.add("hiddenElement");
    btnContinuar.classList.add("hiddenElement");
  },
  false
);

//btn Voltar para home
btnVoltar.addEventListener(
  "click",
  () => {
    location.reload();
  },
  false
);

//btn Voltar para home
btnSair.addEventListener(
  "click",
  () => {
    location.reload();
    btnSair.classList.add("hiddenElement");
  },
  false
);

//chk humor
checkbox.addEventListener("change", function () {
  let root = document.documentElement;
  if (checkbox.checked == false) {
    //triste
    player.audioData = window.audiosNatureza;
    // emoji.textContent = '😩';
    textoBoasVindas.style.display = "block";
    textoBoasVindas2.style.display = "none";
    novoFavicon = faviconTemplate`${emoji.textContent}`;
    linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${novoFavicon}`);
    root.style.setProperty("--rangeAlegreCor", "#77B2C5");
    root.style.setProperty("--perguntaNextAlegre", "#192F5E");
    secao3.style.backgroundImage = "url('./imgs/imagemTriste.jpg')";
    emoji2.style.opacity = "0.2";
    emoji.style.opacity = "1";
    console.log(checkbox.checked);
  } else if (checkbox.checked == true) {
    //feliz
    player.audioData = window.audiosMeditativos;
    // emoji.textContent = '😄';
    textoBoasVindas.style.display = "none";
    textoBoasVindas2.style.display = "block";
    novoFavicon = faviconTemplate`${emoji2.textContent}`;
    linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${novoFavicon}`);
    root.style.setProperty("--rangeAlegreCor", "#4C82B4");
    root.style.setProperty("--perguntaNextAlegre", "#77B2C5");
    secao3.style.backgroundImage = "url('./imgs/imagemAlegre.jpg')";
    emoji.style.opacity = "0.2";
    emoji2.style.opacity = "1";
    console.log(checkbox.checked);
  }
});

//btn imergir
imergir.addEventListener("click", function () {
  var speed = 6000;
  playerGongo.play();

  //animar section onda
  $("body").animate(
    {
      scrollTop: $("#section").offset().top,
    },
    speed
  );

  //playerGongo é o inicio da meditação quando sobe a onda
  setTimeout(
    () => {
      toggleClass(sectionOndas, secao3, "hiddenElement");
    },
    speed,
    "linear",
    true
  );

  //efeito de fadeout do container
  toggleClass(container, sectionOndas, "hiddenElement");

  if (!checkbox.checked) {
    tempo_maximo_player = 180;
  } else {
    tempo_maximo_player = 360;
  }

  setTimeout(
    () => {
      window.player.start(); //iniciar o player
      Meditar(); //meditação
      btnSair.classList.remove("hiddenElement");
    },
    speed,
    true
  );
});

//player jQuery
function ativarPlayer() {
  $("#playerRange").roundSlider({
    sliderType: "range",
    min: 0,
    max: tempo_maximo_player,
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
    keyboardAction: false,
  });
}

function Meditar() {
  window.player.togglePlayPause();

  if (window.player.isPlaying) {
    ativarPlayer(); //animação player
    timerPlayer(); //controla o tempo
    mudar.innerHTML = `pause`;
  } else {
    //pause
    pausePlayer(); //parar controlador do player
    $("#playerRange").roundSlider("option", "value", contadorPlayer);
    ativarPlayer(); //animação do player
    mudar.innerHTML = `play_arrow`;
  }
}

//próxima meditação
function nextSong() {
  contadorPlayer = 0; //zerar tempo
  $("#playerRange").roundSlider("option", "value", contadorPlayer);

  pausePlayer();
  playerGongo.play(); //sinal final
  mudar.classList.add("hiddenElement");

  //aparecer mensagem
  toggleClass(btnNext, perguntaNext, "hiddenElement");

  window.player.pause(); //Pausa o player

  if (window.player.currentPlaying + 1 == window.player.audioData.length) {
    pausePlayer();
    window.player.pause();
    playerGongo.play(); //sinal final
    mudar.classList.add("hiddenElement");
    toggleClass(perguntaNext, perguntaFim, "hiddenElement");
    btnVoltar.classList.remove("hiddenElement");
    btnContinuar.classList.remove("hiddenElement");
  } else {
    setTimeout(() => {
      loadingPlayer();
    }, 1000);
  }
}

function loadingPlayer() {
  contadorPlayer++;
  const tempo_maximo_load = 10;
  $("#playerRange").roundSlider("option", "value", contadorPlayer);
  $("#playerRange").roundSlider("option", "max", tempo_maximo_load);
  timeout_loadingPlayer = setTimeout(loadingPlayer, 500);
  if (contadorPlayer == 10) {
    clearTimeout(timeout_loadingPlayer);
    contadorPlayer = 0;
    setTimeout(() => {
      window.player.next(); //próxima meditação
      Meditar(); //inicia nova meditação
      mudar.innerHTML = `pause`;
    }, 1000);
  }
}

//controlador do tempo
function timerPlayer() {
  //aparecer botão
  toggleClass(perguntaNext, btnNext, "hiddenElement");
  mudar.classList.remove("hiddenElement");

  //Contador que verifica a posição do timing do player
  contadorPlayer++;
  $("#playerRange").roundSlider("option", "value", contadorPlayer);

  //Tempo que roda em volta do player
  tempo_do_contador = setTimeout(timerPlayer, 500, true);

  //fim da meditação
  if (contadorPlayer == 180 && !checkbox.checked) {
    window.player.togglePlayPause();
    nextSong();
  } else if (contadorPlayer == 360 && checkbox.checked) {
    window.player.togglePlayPause();
    nextSong();
  }
}

//parar controlador
function pausePlayer() {
  clearTimeout(tempo_do_contador);
  mudar.innerHTML = `play_arrow`;
}

//show/hidden element
function toggleClass(add, remove, classe) {
  add.classList.add(classe);
  remove.classList.remove(classe);
}

//mudar favicon com emoji selecionado
const linkForFavicon = document.querySelector(`head > link[rel='icon']`);

function faviconTemplate(string, icon) {
  return `
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 110 110%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${icon}
        </text>
      </svg>
    `.trim();
}
