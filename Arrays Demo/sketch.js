// Arrays Demo
// Catherine Liu
// March 8, 2018

//all commented stuff is option 1, current stuff is option 2

// let xBallCoords = [50];
// let yBallCoords = [200];

let ballCoords = [[50, 200]];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  for (let i = 0; i < ballCoords.length; i++) {
    // ellipse(xBallCoords[i], yBallCoords[i], 50, 50);
    ellipse(ballCoords[i][0], ballCoords[i][1], 50, 50);
  }
}

function mousePressed() {
  // xBallCoords.push(mouseX);
  // yBallCoords.push(mouseY);
  ballCoords.push([mouseX, mouseY]);
}
