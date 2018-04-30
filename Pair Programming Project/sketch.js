// Pair Programming Project
// Catherine Liu & Csaba Nemeth
// May 2, 2018


//Rules:
// - hold down the mouse to make the ball accelerate.
// - release the mouse for the ball to fly in the air.
// - don't crash into the side of a hill or else you will lose.
//
//Extra for Experts:
// - used the sin() funtion to generate the terrain.
// - used the map() function to assign points between values.

let state;

let counter;

let myBall;
let amp;
let stretch;
let angle;
let inc = Math.PI*2 / 80.0;
let heightsArray = [];
let moveLength = 8;

let passedHeight = false;

let backgroundImage;
let scoreSound;



function preload() {
  backgroundImage = loadImage("assets/space.jpg");
  scoreSound = loadSound("assets/ding.mp3");
}

function setup() {
  createCanvas(1200, 600);
  state = 1;
  amp = 40;
  counter = -1;
  myBall = new Ball();

  stretch = floor(random(7, 12));
  generateWaveHeights(4, 1200);
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(backgroundImage, 0, 0, width, height);
  strokeWeight(3);

  drawSinWave();

  if (state === 1) {
    startScreen();
  }

  else if (state === 2) {
    myBall.display();
    myBall.move();

    scoreCount();

    if (mouseIsPressed) {
      moveLength += 0.16;
      myBall.yvelocity += 0.2;
    }
    else {
      if (moveLength > 6) {
        moveLength -= 0.08;
      }
    }
  }
}


function keyTyped() {
  if (key === ' ') {
    state = 2;
  }
}


function scoreCount() {

  textSize(20);
  stroke(202, 73, 245);
  strokeWeight(2);
  fill(0);
  textAlign(CENTER);
  text('Score: ' + counter, 1100 , 30);

  if (passedHeight === false) {
    if (myBall.y <= 250) {
      passedHeight = true;
      counter += 1;
      if (counter > 0) {
        scoreSound.play();
      }
    }
  }
  if (myBall.y >= 300) {
    passedHeight = false;
  }
}


function startScreen() {
  textStyle(BOLD);
  textSize(48);
  textAlign(CENTER);
  textFont('Courier New');
  strokeWeight(5);
  fill(0);
  text("PRESS SPACE BAR TO PLAY", 600, 150);
}

function generateWaveHeights(stretch, start) {
  angle = 0;
  for (let i = 0; i < 81; i++) {
    heightsArray.push([i *  stretch + start, height/1.3 - 2*(sin(angle) * amp)]);
    angle += inc;
  }
  return stretch;
}



function drawSinWave() {
  for (let i = 0; i < heightsArray.length; i++) {
    stroke(45, 224, 52);
    strokeWeight(1);

    if (state === 2) {
      if (floor(heightsArray[i][0]) - 5 < myBall.x && floor(heightsArray[i][0]) + 5 > myBall.x) {
        stroke(255, 0, 0);
        strokeWeight(10);
        myBall.lowerRange = floor(heightsArray[i][1]) - 30;
        myBall.index = i;
      }
    }

    point(heightsArray[i][0], heightsArray[i][1]);
    line(heightsArray[i][0], heightsArray[i][1], heightsArray[i][0] + 50, heightsArray[i][1]);

    // if (i === heightsArray.length - 1) {
    //   point(heightsArray[i][0], heightsArray[i][1]);
    // }
    // else {
    //   line(heightsArray[i][0], heightsArray[i][1], heightsArray[i+1][0], heightsArray[i+1][1]);
    // }

    if (heightsArray[i][0] <= 0) {
      heightsArray.shift();
    }

    heightsArray[i][0] -= moveLength;
  }
  if (heightsArray[heightsArray.length-1][0] < 1200) {
    generateWaveHeights(random(stretch - 2, stretch + 2), 1198);
  }
  return stretch;
}



class Ball {
  constructor() {

    this.x = 200;
    this.y = 20;
    this.prevY = this.y;
    this.startHeight = 0;

    this.yVelocity = 0;

    this.gravity = 0.2;
    this.lowerRange;
    this.radius = 20;

    this.contact = false;
    this.upCounter = 0;

  }
  display() {

    fill(255);
    this.radius = map(this.y, 0, windowHeight, 5, 70);
    this.gravity = map(this.y, 0, windowHeight, 0.2, 1);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  move() {
    this.yVelocity += this.gravity;
    this.y += this.yVelocity;

    if (this.y >= this.lowerRange) {
      this.y = this.lowerRange;

      if (!this.contact) {
        if (heightsArray[this.index][1] > heightsArray[this.index + 1][1] + 2) {
          if (moveLength > 30) {
            text("DEAD",this.x, this.y);
          }
          this.yVelocity = this.yVelocity/2;
          moveLength -= 0.3;
        }
      }
      this.contact = true;
    }
    else {
      this.contact = false;
    }

    this.yVelocity = this.y - this.prevY;
    if (this.yVelocity < -16) {
      this.yVelocity = -16;
    }
    this.prevY = this.y;
  }
}
