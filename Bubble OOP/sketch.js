// Moving Square
// Catherine Liu
// Feb 26, 2018

let myBubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBubble = new Bubble();
}

function draw() {
  background(255);
  myBubble.move();
  myBubble.stop();
}

class Bubble {
  constructor() {
    this.radius = 100;
    this.xPos = random(width);
    this.yPos = height - this.radius;
  }

  move() {
    if (this.yPos + this.radius <= 0) {
      this.yPos = 0 + this.radius;
      this.xPos -= random(-20, 20);
    }
    else {
      this.yPos -= random(3, 6);
      this.xPos -= random(-20, 20);
      ellipse(this.xPos, this.yPos, this.radius, this.radius);
    }
  }
}
