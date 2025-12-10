const path = function (file) {
  return `./sounds/${file}`;
};

window.addEventListener("load", () => {
  player.audioData = audiosMeditativos;
  player.preload();
});
