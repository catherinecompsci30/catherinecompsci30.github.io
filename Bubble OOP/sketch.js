// Moving Square
// Catherine Liu
// Feb 26, 2018

let myTimer;
let myBubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(3000);
  myBubble = new Bubble(random(width), height, 25);
}

function draw() {
  background(255);
  // if (myTimer.isDone()) {
  //   ellipse(random(width), random(height), random(25, 100), random(25, 100));
  //   myTimer.reset(1000);
  // }
  myBubble.move();
  myBubble.display();
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;

    this.timerIsDone = false;
  }

  start() {
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      this.timerIsDone = true;
    }
    return this.timerIsDone;
  }
}

class Bubble {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dy = random(-2, -1);
    this.bubbleTimer = new Timer(1000);
    this.topHasBeenTouched = false;
  }

  display() {
    if (!this.bubbleTimer.isDone()) {
      noStroke();
      fill(200, 100, 0, 100);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
    }
  }

  move() {
    if (this.y > 0 + this.radius) {
      this.y += this.dy;
    }
    else {
      if (this.topHasBeenTouched) {
        this.y = 0 + this.radius;
        this.bubbleTimer.start();
      }
      this.topHasBeenTouched = true;
    }
    this.x += random(-3, 3);
  }
}
