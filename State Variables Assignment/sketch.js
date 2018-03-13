// State Variables Assignment
// Catherine Liu
// March 16, 2018

let state;
let red = [255, 0, 0,];
let green = [0, 179, 0,];
let blue = [26, 26, 255,];
let yellow = [255, 255, 0,];

let blockColours = [red, green, blue, yellow,];



function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;

}

function draw() {
  background(128, 128, 128);
  startScreen();

  if (state === 2) {
    easyMode();
    returnToStart();
  }
  else if (state === 3) {
    hardMode();
    returnToStart();
  }
}

function startScreen() {
  //Easy mode button
  easyButton();
  hardButton();
  gameInstructions();

}

function easyButton() {
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
  text(instructions, width / 2, 60);
}

function easyMode() {
  background(0);

  let squareNumber = 0;

  for (let i = width / 2 - 100; i < 700; i += 120) {
    for (let j = height / 2 - 100; j < 320; j += 120) {
      fill(blockColours[squareNumber][0], blockColours[squareNumber][1], blockColours[squareNumber][2]);
      rect(i, j, 100, 100);
      squareNumber += 1;

    }
  }


}

function hardMode() {
  background(0);

  let squareNumber = 0;

  for (let i = width / 2 - 100; i < 700; i += 120) {
    for (let j = height / 2 - 100; j < 320; j += 120) {
      fill(blockColours[squareNumber][0], blockColours[squareNumber][1], blockColours[squareNumber][2]);
      rect(i, j, 100, 100);
      squareNumber += 1;
    }
  }

}

function returnToStart() {
  let buttonWidth = 100;
  let buttonHeight = 30;
  let leftSide = width - (buttonWidth + 30);
  let topSide = 30 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(204, 102, 153);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(223, 159, 191);
    if (mouseIsPressed) {
      state = 1;
    }
  }

  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);

  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Return", leftSide + 0.5 * buttonWidth, topSide + 0.5 * buttonHeight);
}


function isUserCorrect() {

}
