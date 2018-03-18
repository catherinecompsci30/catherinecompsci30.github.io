// State Variables Assignment
// Catherine Liu
// March 16, 2018

let state;
let red = [255, 0, 0, ];
let green = [0, 179, 0, ];
let blue = [26, 26, 255, ];
let yellow = [255, 255, 0, ];

let arrayCounter = -1;
let orderCounter = 0;

let blockColours = [red, green, blue, yellow, ];

let squareOrder = [1, 2, 3, 4, ];
let userArray = [];

let runOrder = false;

let userTry = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;

}

function draw() {
  if (state === 1) {
    background(128, 128, 128);
    startScreen();
    runOrder = false;
  }

  else if (state === 2) {
    easyMode();
    if (runOrder === true) {
      squareOrderFnc(squareOrder);
    }
    if (userTry === true) {
      isUserCorrect();
    }
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

function basicDesign() {
  let squareNumber = 0;

  for (let i = width / 2 - 100; i < (width / 2) + 30; i += 120) {
    for (let j = height / 2 - 100; j < (height / 2) + 30; j += 120) {
      fill(blockColours[squareNumber][0], blockColours[squareNumber][1], blockColours[squareNumber][2]);
      rect(i, j, 100, 100);
      squareNumber += 1;

    }
  }
}

function displayCountdown() {

}



function easyMode() {
  background(0);

  basicDesign();

}

function keyPressed() {
  if (key === " ") {
    runOrder = true;
    return false;
  }
}

function hardMode() {
  background(0);

  basicDesign();

}



function squareOrderFnc (array) {

  if (orderCounter % 60 === 0) {
    arrayCounter += 1;
  }


  if (array[arrayCounter] === 1) {
    //red tint
    fill(255, 102, 102);
    rect(width/2 - 100, height/2 - 100, 100, 100);
  }
  else if (array[arrayCounter] === 2) {
    //green tint
    fill(26, 255, 102);
    rect(width/2 - 100, height/2 + 20, 100, 100);
  }
  else if (array[arrayCounter] === 3) {
    //blue tint
    fill(128, 128, 255);
    rect(width/2 + 20, height/2 - 100, 100, 100);
  }
  else if (array[arrayCounter] === 4) {
    //yellow tint
    fill(255, 255, 153);
    rect(width/2 + 20, height/2 + 20, 100, 100);
  }
  if (arrayCounter < array.length) {
    orderCounter += 1;
  }

  else {
    userTry = true;
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
      orderCounter = 0;
      arrayCounter = -1;
      runOrder = false;
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

function isUserCorrect () {
  if ()
}
