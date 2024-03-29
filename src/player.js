window.player = {
  audio: document.querySelector('audio'),
  audioData: {},
  currentAudio: {},
  currentPlaying: 0,
  isPlaying: false,
  preload() {
    this.currentAudio = this.audioData[this.currentPlaying];
    this.audio.src = path(this.currentAudio.file);
  },
  start() {
    this.update();
    // this.audio.play();
    // this.audio.onended = () => this.next();
  },
  play() {
    this.isPlaying = true;
    this.audio.play();
  },
  pause() {
    this.isPlaying = false;
    this.audio.pause();
  },
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },
  next() {
    this.currentPlaying++;
    if (this.currentPlaying == this.audioData.length) this.restart();
    this.update();
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying];
    this.audio.src = path(this.currentAudio.file);
    // this.audio.play();
    // this.audio.loop = true;
  },
  restart() {
    this.currentPlaying = 0;
    // this.isPlaying = false;
    this.update();
  },
};
