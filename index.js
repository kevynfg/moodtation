


const path = function(file){
    
    return `./sounds/${file}`;
};


window.addEventListener("load" , () => {
    player.audioData = audios;
    player.preload()
});

//  window.addEventListener("click", player.start());