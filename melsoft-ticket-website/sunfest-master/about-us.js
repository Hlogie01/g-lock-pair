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

setInterval(intervalFunc, 85);

let countElements = document.getElementsByClassName("count");

for (let i = 0; i < countElements.length; i++) {
  counters.push(new Counter(countElements[i]));
}

const videos = document.querySelectorAll('.video');

for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener('loadedmetadata', () => {
    const width = videos[i].videoWidth;
    const height = videos[i].videoHeight;
    const aspectRatio = width / height;

    if (width > height) {
      videos[i].style.width = '33.33%';
      videos[i].style.height = 'auto';
    } else {
      videos[i].style.width = 'auto';
      videos[i].style.height = '33.33vh';
    }
  });
}