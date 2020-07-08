window.this = {
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    start() {
        this.update();
        this.audio.onended = () => this.next();
    },
    next() {

        this.currentPlaying++
        if (this.currentPlaying == this.audioData.length) this.restart();
        this.update();
        },
    update(){
    this.currentAudio = this.audioData[this.currentPlaying];
    this.audio.src = path(this.currentAudio.file);
    },
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
    
};
