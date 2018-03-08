// State Variables Assignment
// Catherine Liu
// March 6, 2018

let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
}

function draw() {
  background(128, 128, 128);
  startScreen();

  if (state === 2) {
    easyMode();
  }
  else if (state ===3) {
    hardMode() ;
  }
}

function startScreen() {
  //Easy mode button
  easyButton();
  hardButton();
  gameInstructions();

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
    fill(179, 102, 255);
    if (mouseIsPressed) {
      state = 2;
    }
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
    fill(179, 102, 255);
    if (mouseIsPressed) {
      state = 3;
    }
  }

  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);

  textStyle(BOLD);
  textSize(36);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Hard Mode", leftSide + 0.5 * buttonWidth, topSide + 0.5 * buttonHeight);
}

function gameInstructions() {
  let instructions = "To Play: \n (insert instructions here)";

  textStyle(BOLD);
  textSize(30);
  textAlign(CENTER);
  text(instructions, width/2 , 60);
}

function easyMode() {
  background(0);

  for (let i = 400; i < 500; i += 50) {
    for (let j = 400; j < 500; j += 50) {
      fill (255, 0, 0);
      rect(i, j, 50, 50);
    }
  }


}

function hardMode() {
  background(0);

}

function nextLevel() {

}

function notCorrect() {

}

function displayScore() {

}
