// Ball OOP
// Catherine Liu
// Apr. 16, 2018

let myBall;
let anotherBall;
let thirdBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(300, 400);
  anotherBall = new Ball(100, 200);
  thirdBall = new Ball(600, 200);
}

function draw() {
  background(255);

  myBall.jiggle();

  myBall.display();
  anotherBall.display();
  thirdBall.display();
}

function mousePressed() {
  thirdBall.goTo(mouseX, mouseY);
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;
  }

  display() {
    fill(0);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  jiggle() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  goTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
