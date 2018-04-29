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
let moveLength = 6;

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

  stretch = floor(random(5, 10));
  generateWaveHeights(4, 1200);
}

function draw() {
  background(0);
  noTint();
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
      moveLength = 8;
    }
    else {
      moveLength = 6;
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
    if (myBall.y <= 300) {
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

    this.velocity = 0;
    this.gravity;
    this.radius = 20;
    this.contact = false;

    this.division;
    this.lowerRange = 580;

  }
  display() {
    noStroke();
    fill(255);
    //this.radius = map(this.y, 0, windowHeight, 10, 38);
    this.gravity = map(this.y, 0, windowHeight, 0.06, 0.9);
    ellipse(this.x, this.y, this.radius, this.radius);

  }
  move() {
    if (mouseIsPressed) {
      this.velocity += 0.2;
    }
    if (this.y > this.lowerRange) {
      this.velocity = this.velocity * - 1;
      this.contact = true;
    }
    if (this.contact) {
      this.y = this.lowerRange;
      if (mouseIsPressed) {
        this.velocity -= 0.2;
      }
      if (!mouseIsPressed) {
        this.contact = false;
      }
    }
    this.velocity += this.gravity;
    this.y += this.velocity;

  }
}
