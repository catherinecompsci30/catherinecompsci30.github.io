// Pair Programming Terrain
// Catherine Liu & Csaba Nemeth
// May 2, 2018

let myBall;
let amp;
let stretch;
let angle;
let inc = Math.PI*2 / 80.0;
let heightsArray = [];
let moveLength = 2;

function setup() {
  createCanvas(1200, 600);
  amp = 40;
  myBall = new Ball();

  generateWaveHeights(4, 1200);
}

function draw() {
  background(0);
  strokeWeight(3);

  if (mouseIsPressed) {
    moveLength = 6;
  }
  else {
    moveLength = 4;
  }

  drawSinWave();
  myBall.display();
  myBall.move();

}

function generateWaveHeights(stretch, start) {
  angle = 0;
  for (let i = 0; i < 81; i++) {
    heightsArray.push([i *  stretch + start, height/1.3 - 2*(sin(angle) * amp)]);
    angle += inc;
  }
}

function drawSinWave() {
  for (let i = 0; i < heightsArray.length; i++) {
    stroke(255);
    strokeWeight(5);
    if (floor(heightsArray[i][0]) - 5 < myBall.x && floor(heightsArray[i][0]) + 5 > myBall.x) {
      stroke(255, 0, 0);
      strokeWeight(10);
      myBall.lowerRange = floor(heightsArray[i][1]) - 30;
    }


    point(heightsArray[i][0], heightsArray[i][1]);
    // if (i === heightsArray.length - 1) {
    //   point(heightsArray[i][0], heightsArray[i][1]);
    // }
    // else {
    //   line(heightsArray[i][0], heightsArray[i][1], heightsArray[i+1][0], heightsArray[i+1][1]);
    // }

    heightsArray[i][0] -= moveLength;
  }
  if (heightsArray[heightsArray.length-1][0] < 1200) {
    generateWaveHeights(floor(random(2, 10)), 1198);
  }
  if (heightsArray[80][0] < 0) {
    heightsArray.shift();
  }
}

class Ball {
  constructor() {

    this.x = 200;
    this.y = 20;

    this.velocity = 0;
    this.gravity;
    this.radius = 38;
    this.contact = false;

    this.division;
    this.lowerRange = 580;

  }
  display() {
    fill(255);
    this.radius = map(this.y, 0, windowHeight, 10, 38);
    this.gravity = map(this.y, 0, windowHeight, 0.06, 0.9);
    ellipse(this.x, this.y, this.radius, this.radius);

  }
  move() {
    if (mouseIsPressed) {
      this.velocity += 0.2;
    }
    if (this.contact) {
      this.y = this.lowerRange;
    }
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > this.lowerRange) {
      this.velocity = this.velocity * - 1;
      this.contact = true;
    }
  }
}
