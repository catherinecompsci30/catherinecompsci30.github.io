// Memory
// Catherine Liu
// April 16, 2018

//Memory game using elements from the periodic table


let state;
let rows = 4;
let cols = 4;
let grid;
let cellSize;
let makeGuess = true;

let allElements = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

let guessesMade = 0;
let guess = [];

let timeLeft;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = (height - 200) / rows;

  grid = elementLocations();

  timeLeft = 5;

  state = 1;
}

function draw() {
  if (state === 1) {
    background(255);

    displayGrid();
    gameInstructions();

    userGuess();
    countdownTimer();
  }
  else if (state === 2) {
    resetGame();

  }
}


function displayGrid() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      fill(255);
      strokeWeight(5);
      if (grid[x][y][2] === 0) {
        fill(102, 204, 255);
      }
      else if (grid[x][y][2] === 1) {
        fill(0, 255, 0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);

      let textToDisplay = "";

      if (grid[x][y][1] === 1) {
        textToDisplay = displayElement(grid[x][y][0]);
        fill(0);
        textSize(30);
        text(textToDisplay, x * cellSize + (cellSize / 2), y * cellSize + (cellSize / 2) + 10);
      }
    }
  }
}


function gameInstructions() {

  textStyle(BOLD);
  textSize(90);
  textAlign(CENTER);
  fill(63, 51, 255);
  text("Memory Match", (width / 2) + 200, 100);

  let instructions = [""
    ,"Click on a box to reveal a chemical element. \n"
    ,"Find two of the same element in order to have a match.  \n"
    ,"Press the SPACE BAR to make a new guess.  \n"
    ,"Find all matches before the time runs out!"
  ].join("");

  textSize(28);
  fill(0, 102, 153);
  text(instructions, (width / 2) + 200, 180);
}


//sets up where each element will be at the start of the game
function elementLocations() {
  let choice;
  let transferArray = [];
  let newShuffle = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      choice = floor(random(allElements.length - 1));
      transferArray.push([allElements[choice], 0, 0]);
      allElements.splice(choice, 1);
    }
    newShuffle.push(transferArray);
    transferArray = [];
  }
  return newShuffle;
}


function displayElement(element) {
  let newString = "";

  if (element === 1) {
    newString = "H";
  }

  else if (element === 2) {
    newString = "C";
  }

  else if (element === 3) {
    newString = "O";
  }

  else if (element === 4) {
    newString = "Cl";
  }

  else if (element === 5) {
    newString = "Fe";
  }

  else if (element === 6) {
    newString = "Hg";
  }

  else if (element === 7) {
    newString = "Cu";
  }

  else if (element === 8) {
    newString = "Pb";
  }

  return newString;
}


function userGuess() {
  if (makeGuess && guessesMade < 2) {
    let xPos = floor(mouseX / cellSize);
    let yPos = floor(mouseY / cellSize);

    if (mouseIsPressed) {
      if (mouseX < cellSize * rows && mouseY < cellSize * cols) {
        grid[xPos][yPos][1] = 1;
        guessesMade += 1;
        mouseIsPressed = false;

        guess.push([grid[xPos][yPos][0], xPos, yPos]);
      }
    }
  }

  if (guessesMade === 2) {
    compareUserGuess();
    if (compareUserGuess()) {
      grid[guess[0][1]][guess[0][2]][2] = 1;
      grid[guess[1][1]][guess[1][2]][2] = 1;
    }

  }
}


function compareUserGuess() {
  textSize(56);
  if (guess[0][0] === guess[1][0]) {
    fill(0, 255, 0);
    text("It's a match!", (cellSize * rows) / 2, (height / 5) * 4);
    return true;
  }
  else {
    fill(255, 0, 0);
    text("Nope!", (cellSize * rows) / 2, (height / 5) * 4);
    return false;
  }
}


function keyTyped() {
  if (state === 1) {
    if (key === " ") {
      guess = [];
      guessesMade = 0;

      for (let x=0; x<cols; x++) {
        for (let y=0; y<rows; y++) {
          grid[x][y][1] = 0;
        }
      }
    }
  }
  else if (state === 2) {
    if (key === " ") {
      guess = [];
      guessesMade = 0;
      state = 1;
    }
  }
}


function countdownTimer() {
  if (timeLeft >= 0) {
    if (frameCount % 60 !== 0) {
      textSize(20);
      fill(0);
      textAlign(CENTER);
      text('Time Remaining: ' + timeLeft + ' seconds', width / 2 + 200 , 380);
    }
    else {
      timeLeft -= 1;
    }
  }
  else {
    state = 2;
  }
}
//   startTime = 3;
//   timePassed = Math.round(floor(millis() / 1000));
//   timeLeft = startTime - timePassed;
//
//   if (state === 1) {
//     fill(0);
//     for (let seconds = startTime; seconds > 0; seconds--) {
//       textSize(20);
//       textAlign(CENTER);
//       text('Time Remaining: ' + timeLeft + ' seconds', width / 2 + 200 , 380);
//     }
//     if (timeLeft === 0) {
//       state = 2;
//     }
//   }
// }


function resetGame() {
  background(0);
  textStyle(BOLD);
  textSize(200);
  textAlign(CENTER);
  fill(255, 0, 0);
  text("GAME OVER", width/2, height/2);

  textSize(30);
  text("Press SPACE BAR to restart.", width/2, height/2 + 100);

  guess = [];
  guessesMade = 0;

  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      grid[x][y][1] = 0;
    }
  }

  elementLocations();

  timeLeft = 5;
}
