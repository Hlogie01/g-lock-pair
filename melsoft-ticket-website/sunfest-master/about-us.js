class Counter {
  constructor(element) { // this is a Constructor function to initialize the counter
    this.element = element;
    this.increment = 1;
    this.maxData = parseInt(this.element.getAttribute("max-data"));
    this.running = false;
  }

   // this is a Method to update the counter value
  update() {
    if (this.increment < this.maxData) {
      this.increment++;
      this.element.innerHTML = this.increment;
    } else {
      this.running = false;
    }
  }
}

// Initialize an array to store Counter objects
let counters = [];

let countElements = document.getElementsByClassName("count");

for (let i = 0; i < countElements.length; i++) {
  counters.push(new Counter(countElements[i]));
}

// a function to start all counters
function startCounters() {
  for (let i = 0; i < counters.length; i++) {
    counters[i].running = true;
    counters[i].increment = 1;
  }

   // Set an interval to update the counters every 10secon
  setInterval(() => {
    let allDone = true;      // Checking if all counters have finished running
    for (let i = 0; i < counters.length; i++) {
      if (counters[i].running) {
        counters[i].update();
      } else {
        allDone = false;   // if the is not running , then setting allDone flag to false
      }
    }
    if (allDone) {
      setTimeout(startCounters, 10000);
    }
  }, 100);
}

//starting the counter after 5 seconds
setTimeout(startCounters, 5000);


//defining a video class
class VideoPlayer {
  constructor() {
    this.videos = document.querySelectorAll('video');
  }

  muteAllVideos() {
    this.videos.forEach(video => {
      video.muted = true;
    });
  }

  //method to play all videos
  playAllVideos() {
    this.videos.forEach(video => {
      video.play();
    });
  }
}


const videoPlayer = new VideoPlayer();
videoPlayer.muteAllVideos(); //muting all videis
videoPlayer.playAllVideos();//playing all videos

