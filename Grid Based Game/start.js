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
