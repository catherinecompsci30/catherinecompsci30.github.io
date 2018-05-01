// Pair Programming Project
// Catherine Liu & Csaba Nemeth
// May 2, 2018


//Rules:
// - hold down the mouse to make the ball accelerate.
// - release the mouse for the ball to fly in the air.
// - fly high enough to score a point.
// - don't crash into the side of a hill or else your ball
//   will lose all momentum and die.
//
//Extra for Experts:
// - used the sin() funtion to generate the terrain.
// - used the map() function to assign points between values and to change
//   variables depending on other variables.
//
//Note: don't mind the choppy terrain (especially when the sin wave has a small stretch).
//
//Csaba:
// - ball class and movement.
// - logic of the game.
//Catherine:
// - generated terrain.
// - score display, start screen, sound effects.
//Together:
// - end screen, commenting, organization, trouble shooting.

let state;

//global variable for Ball class.
let myBall;

//global variables to draw sin waves.
let amp;
let stretch;
let angle;
let inc = Math.PI*2 / 80.0;
let lineSize;

//array containing heights of different sin waves.
let heightsArray = [];

//global variable that controls the speed of the terrain (x velocity of ball).
let moveLength = 8;

//global variables to keep track of score.
let passedHeight = false;
let counter;

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
  stretch = 6;

  myBall = new Ball();

  generateWaveHeights(4, 1200);
}



function draw() {
  //displays background image.
  imageMode(CORNER);
  image(backgroundImage, 0, 0, width, height);

  strokeWeight(3);
  drawSinWave();

  //before the user presses space bar to play.
  if (state === 1) {
    startScreen();
  }
  //after game begins.
  else if (state === 2) {
    myBall.display();
    myBall.move();

    scoreCount();

    //shifts the terrain to look like ball is moving with physical limitations.
    // - air resistance, friction, etc.
    if (mouseIsPressed) {
      moveLength += 0.1;
      myBall.yVelocity += 0.5;
      if (moveLength >= 22) {
        moveLength = 22;
      }
    }
    else {
      if (moveLength > 6 && moveLength < 0) {
        moveLength -= 0.09;
      }
    }
  }

  else if (state === 3) {
    background(255, 0, 0);
    endScreen();
  }
}



function keyTyped() {
  if (key === ' ') {
    if (state === 1) {
      state = 2;
    }
    else if (state === 3) {
      heightsArray = [];
      myBall = new Ball();
      generateWaveHeights(4, 1200);
      moveLength = 8;
      state = 1;
      counter = -1;
    }

  }

}



function scoreCount() {

  textSize(30);
  stroke(214, 135, 245);
  strokeWeight(4);
  fill(0);
  textAlign(CENTER);
  text('Score: ' + counter, 1080 , 30);

  //if the ball reaches a certain height approaching it from below, the user will
  //gain a point and a sound effect will play.
  if (passedHeight === false) {
    if (myBall.y <= 150) {
      passedHeight = true;
      counter += 1;
      if (counter > 0) {
        scoreSound.play();
      }
    }
  }
  if (myBall.y >= 150) {
    passedHeight = false;
  }
}



//game begins when user presses space bar.
function startScreen() {
  textStyle(BOLD);
  stroke(22, 224, 190);
  textSize(48);
  textAlign(CENTER);
  textFont('Courier New');
  strokeWeight(5);
  fill(0);
  text("PRESS SPACE BAR TO PLAY", 600, 150);
}


function endScreen() {
  textStyle(BOLD);
  stroke(0);
  textSize(56);
  textAlign(CENTER);
  textFont('Courier New');
  strokeWeight(1);
  text("PRESS SPACE BAR TO PLAY AGAIN", 600, 300);
  textSize(30);
  text("Score: " + counter, 600, 400);

}



//makes one period length of a sin wave with an input stretch and start position
//and pushes (x, y) coordinates of each generated point into an array.
function generateWaveHeights(stretch, start) {
  angle = 0;
  for (let i = 0; i < 80; i++) {
    heightsArray.push([i *  stretch + start, height/1.3 - 2*(sin(angle) * amp)]);
    angle += inc;
  }
}



//draws lines at each coordinate from heightsArray, pushes and removes new wave
//segments once a previous one is off-screen, translates sin waves to the left to
//imitate motion, and feeds information to Ball object.
function drawSinWave() {
  for (let i = 0; i < heightsArray.length; i++) {
    stroke(22, 224, 190);
    strokeWeight(3);

    //gives the y value of the sin coordinate to the Ball object at the x position of the ball.
    if (state === 2) {
      if (floor(heightsArray[i][0]) - 5 < myBall.x && floor(heightsArray[i][0]) + 5 > myBall.x) {
        myBall.lowerRange = floor(heightsArray[i][1]) - 35;
        myBall.index = i;
      }
    }

    //draws lines at coordinates to make terrain.
    line(heightsArray[i][0], heightsArray[i][1], heightsArray[i][0] + 20, heightsArray[i][1]);
    noStroke();

    //removes coordinate from heightsArray once off-screen.
    if (heightsArray[i][0] <= 0) {
      heightsArray.shift();
    }

    //translates x values of all coordinates to the left.
    heightsArray[i][0] -= moveLength;
  }

  //pushes (x, y) coordinates of a new sin wave with semi-random stretch to heightsArray
  //once all current coordinates are on screen.
  if (heightsArray[heightsArray.length-1][0] < 1200) {
    stretch = stretch + random(-2, 2);
    if (stretch < 4 || stretch > 9) {
      stretch = 5;
    }
    generateWaveHeights(stretch, 1200);
  }
}
