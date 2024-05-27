class Counter {
  constructor(element) {
    this.element = element;
    this.increment = 1;
    this.maxData = parseInt(this.element.getAttribute("max-data"));
  }

  update() {
    if (this.increment < this.maxData) {
      this.increment++;
      this.element.innerHTML = this.increment;
    }
  }
}

let counters = [];

function intervalFunc() {
  for (let i = 0; i < counters.length; i++) {
    counters[i].update();
  }
}

setInterval(intervalFunc, 300);

let countElements = document.getElementsByClassName("count");

for (let i = 0; i < countElements.length; i++) {
  counters.push(new Counter(countElements[i]));
}


class VideoPlayer {
  constructor() {
    this.videos = document.querySelectorAll('video');
  }

  muteAllVideos() {
    this.videos.forEach(video => {
      video.muted = true;
    });
  }

  playAllVideos() {
    this.videos.forEach(video => {
      video.play();
    });
  }
}

const videoPlayer = new VideoPlayer();
videoPlayer.muteAllVideos();
videoPlayer.playAllVideos();

