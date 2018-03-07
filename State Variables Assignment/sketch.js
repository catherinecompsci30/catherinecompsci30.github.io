// State Variables Assignment
// Catherine Liu
// March 6, 2018

let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(128, 128, 128);
  startScreen();
}

function startScreen() {
  //Easy mode button
  easyButton();
  hardButton();

  //Hard mode button
  // fill(153, 153, 255);
  // rectMode(CENTER);
  // noStroke();
  // rect (width/2, height/2 + 80, 300, 80);
  // fill(0);
  // textSize(36);
  // text("Hard Mode", width/2 - 90, height/2 + 90);
}

function easyButton (){
  let buttonWidth = 300;
  let buttonHeight = 100;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2 - 80;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(153, 153, 255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(128);
    print(leftSide, rightSide, topSide, bottomSide);
  }

  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);

  textStyle(BOLD);
  textSize(36);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Easy Mode", leftSide + 0.5 * buttonWidth, topSide + 0.5 * buttonHeight);
}

function hardButton() {
  let buttonWidth = 300;
  let buttonHeight = 100;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2 + 80;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(153, 153, 255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(128);
  }

  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);

  textStyle(BOLD);
  textSize(36);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Hard Mode", leftSide + 0.5 * buttonWidth, topSide + 0.5 * buttonHeight);

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
