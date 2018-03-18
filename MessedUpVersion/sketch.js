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

let squareOrder = [];

let userArray = [];

let runOrder = false;

let userTry = false;

let checkAnswer = false;

let isShuffled = false;

let match = true;


function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;

}

function draw() {
  if (state === 1) {
    background(128, 128, 128);
    startScreen();

    runOrder = false;
    userTry = false;
    checkAnswer = false;
    match = true;
    isShuffled = false;

    userArray = [];
    squareOrder = [];

  }

  else if (state === 2) {

    playMode();
    returnToStart();
    if (runOrder === true) {
      if (isShuffled === false) {
        squareOrder = [1, 2, 3, 4, ];
        squareOrder = shuffle(squareOrder);
        isShuffled = true;
      }
      squareOrderFnc(squareOrder);
    }
  }

  else if (state === 3) {
    playMode();
    returnToStart();

    if (runOrder === true) {
      if (isShuffled === false) {
        let firstHalf = shuffle([1, 2, 3, 4, ]);
        let secondHalf = shuffle([1, 2, 3, 4, ]);
        while (firstHalf[3] === secondHalf[0]) {
          firstHalf = shuffle([1, 2, 3, 4, ]);
        }
        squareOrder = concat(firstHalf, secondHalf);
        isShuffled = true;
      }
      squareOrderFnc(squareOrder);
    }
  }

      // if (squareOrder.length === 0) {
      //   for (let i = 0; i < 8; i++ ) {
      //     squareOrder.push(floor(random(1, 5))); //floor eliminates decimals by rounding down
  //       }
  //     }
  //     squareOrderFnc(squareOrder);
  //   }
  // }

  if (userTry === true) {
    userSelection(userArray);

  }
  if (checkAnswer === true) {
    isUserCorrect(squareOrder, userArray);
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
  let instructions = "To Play: \n Select a difficulty level and follow \n the instructions on the page. ";

  textStyle(BOLD);
  textSize(30);
  textAlign(CENTER);
  text(instructions, width / 2, 80);
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


function playMode() {
  background(0);

  basicDesign();

}

function keyPressed() {
  if (key === " ") {
    runOrder = true;
    return false;
  }
}


function squareOrderFnc (array) {

  if (orderCounter % 60 === 0) {
    arrayCounter += 1;
  }


  if (array[arrayCounter] === 1) {
    //red tint
    fill(255, 179, 179);
    rect(width/2 - 100, height/2 - 100, 100, 100);
  }
  else if (array[arrayCounter] === 2) {
    //green tint
    fill(179, 255, 179);
    rect(width/2 - 100, height/2 + 20, 100, 100);
  }
  else if (array[arrayCounter] === 3) {
    //blue tint
    fill(179, 179, 255);
    rect(width/2 + 20, height/2 - 100, 100, 100);
  }
  else if (array[arrayCounter] === 4) {
    //yellow tint
    fill(255, 255, 204);
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


function userSelection (userArray) {
  if (mouseX >= (width/2 - 100) && mouseX <= width/2) {
    if (mouseY >= (height/2 - 100) && mouseY <= height/2) {
      fill(255, 179, 179); //red
      rect(width/2 - 100, height/2 - 100, 100, 100);
      if (mouseIsPressed) {
        userArray.push(1);
        mouseIsPressed = false;
      }
    }
  }

  if (mouseX >= (width/2 - 100) && mouseX <= width/2) {
    if (mouseY >= (height/2 + 20) && mouseY <= height/2 + 120) {
      fill(179, 255, 179); //green
      rect(width/2 - 100, height/2 + 20, 100, 100);
      if (mouseIsPressed) {
        userArray.push(2);
        mouseIsPressed = false;
      }
    }
  }
  if (mouseX >= (width/2 + 20) && mouseX <= width/2 + 120) {
    if (mouseY >= (height/2 - 100) && mouseY <= height/2) {
      fill(179, 179, 255); //blue
      rect(width/2 + 20, height/2 - 100, 100, 100);
      if (mouseIsPressed) {
        userArray.push(3);
        mouseIsPressed = false;
      }
    }
  }
  if (mouseX >= (width/2 + 20) && mouseX <= width/2 + 120) {
    if (mouseY >= (height/2 + 20) && mouseY <= height/2 + 120) {
      fill(255, 255, 204); //yellow
      rect(width/2 + 20, height/2 + 20, 100, 100);
      if (mouseIsPressed) {
        userArray.push(4);
        mouseIsPressed = false;
      }
    }
  }

  if (userArray.length === squareOrder.length) {
    checkAnswer = true;
    userTry = false;
  }
}

function isUserCorrect (computerArray, userArray) {
  for (let i = 0; i < computerArray.length; i++) {
    if (!(computerArray[i] === userArray[i])) {
      match = false;
    }
  }

  textSize(30);
  fill(255);
  textAlign(CENTER, CENTER);



  if (match) {
    text("Correct!", width/2 + 10, height/5);
  }
  else {
    text("You're Bad!", width/2 + 10, height/5);
  }
}
