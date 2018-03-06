// State Variables Assignment
// Catherine Liu
// March 6, 2018

let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  startScreen();
}

function startScreen() {
  //Easy mode button
  fill(255, 0, 0);
  rectMode(CENTER);
  rect (width/2, height/2 - 50, 300, 80);
  fill(0);
  textStyle(BOLD);
  textSize(36);
  text("Easy Mode", width/2 - 90, height/2 - 40);

  //Hard mode button
  fill(255, 0, 0);
  rectMode(CENTER);
  rect (width/2, height/2 + 50, 300, 80);
  fill(0);
  textSize(36);
  text("Hard Mode", width/2 - 90, height/2 + 60);
}

function easyMode() {

}

function hardMode() {

}

function nextLevel() {

}

function notCorrect() {

}

function displayScore() {

}
