
export  default class AudioTrack {
  audio: HTMLAudioElement;
  constructor(url: string) {
    this.audio = new Audio(url);
  }
 async   playOn() {
    this.audio.pause();
  await  this.audio.play();
  }
   stop() {
    this.audio.pause();
  }
}

