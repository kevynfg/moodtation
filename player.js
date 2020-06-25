window.player = {
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    start() {
        this.currentAudio = this.audioData[0];
        this.audio.src = path(this.currentAudio.file);

        this.audio.addEventListener("ended", () => {
            this.audio.src = path(this.audioData[1].file);
            this.audio.play();
        });
    }
};