// Memory Match
// Catherine Liu
// April 16, 2018

//Memory game using elements from the periodic table. The objective is to find all pairs
//before the time runs out. After clicking two boxes, press the SPACE BAR to make a new guess.
//
//Some funky things I didn't get time to foolproof:
// - Currently, if you click the same box twice, it will tell you that you have found a match --
//   so please click different boxes when making a guess.
// - Similarily, once a match has been found, the boxes turn green, but technically you can
//   still click on those boxes and it will tell you that you have found a match -- so also
//   please only click blue boxes.
//
//Extra for Experts:
// - Made a countdown timer and created different scenarios depending on whether the user found
//   all matches within the allotted time or whether they ran out of time.
// - Used state variables within arrays to keep track of which box has been clicked and
//   if it was time to respond to the user -- i.e. "It's a match!"


//Global variables
let state;
let rows = 4;
let cols = 4;
let grid;
let cellSize;

//Array used in later functions -- each number corresponds to an element
let allElements = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

//Variables used to keep track of the user's 'moves'
let makeGuess = true;
let guessesMade = 0;
let guess = [];

let timeLeft;

let counter;



function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = (height - 200) / rows;

  //sets up the grid
  grid = elementLocations();

  //user has 60 seconds to find all matches
  timeLeft = 60;

  counter = 0;

  state = 1;
}



function draw() {
  //State one is when the game is still running
  if (state === 1) {
    background(255);

    displayGrid();
    gameInstructions();
    userGuess();
    countdownTimer();
    if (counter === 8) {
      state = 2;
    }
  }
  //State two is if the user has found all the matches OR the time runs out
  else if (state === 2) {
    resetGame();
  }
}



//Determines where each element will be at the start of each game. Numbers
//are randomly grabbed from the allElements array and packaged in groups of
//four into the transferArray, which pushes itself to newShuffle.
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



//Uses the information returned by elementLocations() to assign each element
//a position on the grid. This prepares the game so that when the user clicks
//a box, the corresponding text will show up -- i.e. 'Cl'.
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



//Displays the game title and the instructions.
function gameInstructions() {

  textStyle(BOLD);
  textSize(90);
  textAlign(CENTER);
  fill(63, 51, 255);
  text("Memory Match", (width / 2 + 200), 100);

  let instructions = [""
    ,"Click on a box to reveal a chemical element. \n"
    ,"Find two of the same element in order to have a match.  \n"
    ,"Press the SPACE BAR to make a new guess.  \n"
    ,"Find all matches before the time runs out!"
  ].join("");

  textSize(28);
  fill(0, 102, 153);
  text(instructions, (width / 2 + 200), 180);
}



//Determines which chemical element corresponds to which number, and sends a
//string of the element abbreviation to displayGrid().
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



//Keeps track of which boxes the user has clicked. If the user has clicked
//two boxes consecutively, it calls the compareUserGuess() function to check
//whether the elements in the two boxes match.
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
      //changes the states of the boxes clicked
      grid[guess[0][1]][guess[0][2]][2] = 1;
      grid[guess[1][1]][guess[1][2]][2] = 1;
    }

  }
}



//Checks to see if the elements of the boxes clicked are the same and displays
//a message on the screen.
function compareUserGuess() {
  textSize(56);
  if (guess[0][0] === guess[1][0]) {
    fill(0, 255, 0);
    text("It's a match!", (cellSize * rows) / 2, height - 100);
    return true;
  }
  else {
    fill(255, 0, 0);
    text("Nope!", (cellSize * rows) / 2, height - 100);
    return false;
  }
}



//In state one, the space bar clears the user guess so they can make a new guess.
//In state two, the space bar resets the game.
function keyTyped() {
  if (state === 1) {
    if (key === " ") {
      if (compareUserGuess()) {
        counter += 1;
      }
      guess = [];
      guessesMade = 0;


      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          grid[x][y][1] = 0;
        }
      }
    }
  }
  else if (state === 2) {
    if (key === " ") {
      counter = 0;
      state = 1;
    }
  }
}



//Counts down from 60 seconds so the user knows how much time they have left.
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



//Displays a 'You Win!' or 'Game Over' screen depending on whether the counter reached 8.
//If it did, that means that the user has found all matches, otherwise, they ran out of time.
//This function also resets the game so that once the space bar is clicked, a new game can
//be played with the locations of the elements shuffled. 
function resetGame() {
  allElements = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  guess = [];
  guessesMade = 0;

  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      grid[x][y][1] = 0;
    }
  }

  grid = elementLocations();

  timeLeft = 60;

  if (counter === 8) {
    background(0);
    textStyle(BOLD);
    textSize(200);
    textAlign(CENTER);
    fill(0, 255, 0);
    text("YOU WIN!", width/2, height/2);

    textSize(30);
    text("Press SPACE BAR to restart.", width/2, height/2 + 100);

  }
  else {
    background(0);
    textStyle(BOLD);
    textSize(200);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("GAME OVER", width/2, height/2);

    textSize(30);
    text("Press SPACE BAR to restart.", width/2, height/2 + 100);
  }
}
