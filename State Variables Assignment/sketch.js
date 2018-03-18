// State Variables Assignment
// Catherine Liu
// March 15, 2018

//I used state variables to switch between the three different 'modes' of the game -- start, easy, and hard.
//I also used many booleans to help keep track of the state of the game at particular instances. For example,
//the 'userTry' variable turns true when the computer has finished displaying the pattern, indicating that
//it should now be prepared to keep track of the input from the user.
//
//I did not have enough time to figure out a way to 'loop' the game, so in this version, you have to click
//the 'Return' button and go back to the start screen to play again.
//
//Extra for Experts:
//  - Used complex array structures such as nested arrays and the shuffle() function to rearrange values.
//  - Made functions so that the computer checks if the user's response is correct (kind of AI).
//  - The pattern displayed by squares is different each time a mode is selected.
//
//***I helped Will with his project by explaining to him the structure I used for my nested arrays.
//***Csaba helped me figure out how to not have the same colour flash twice in a row and explained
//   some of the logic begind using booleans to check when certain functions should run.


//Global Variables

let state;

//button size for the level selection buttons.
let buttonWidth = 300;
let buttonHeight = 100;

// array of the rgb values of the four squares.
let red = [255, 0, 0, ];
let green = [0, 179, 0, ];
let blue = [26, 26, 255, ];
let yellow = [255, 255, 0, ];
let blockColours = [red, green, blue, yellow, ];

//counters used
let arrayCounter = -1;
let orderCounter = 0;

//arrays that keep track of the computer colour choices and the user's choices.
let squareOrder = [];
let userArray = [];

//displays the computer colour choices when true.
let runOrder = false;

//determines when the user is allowed to respond.
let userTry = false;

//compares the computer choice with the user's response
let checkAnswer = false;
let match = true;

//determines if the order of flashing colours is rearranged.
let isShuffled = false;

let popSound;




function preload() {
  popSound = loadSound("assets/pop.mp3");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
}



function draw() {

  //state 1 is the start screen.
  if (state === 1) {
    background(204, 217, 255);
    startScreen();

    runOrder = false;
    userTry = false;
    checkAnswer = false;
    match = true;
    isShuffled = false;

    userArray = [];
    squareOrder = [];

  }

  //state 2 is the 'Easy Mode'.
  else if (state === 2) {

    playMode();
    returnToStart();
    if (runOrder === true) {
      //if the order of flashing colours has not yet been shuffled, it will shuffle
      //it and then set 'isShuffled' to be false so it doesn't keep shuffling.
      if (isShuffled === false) {
        squareOrder = [1, 2, 3, 4, ];
        squareOrder = shuffle(squareOrder);
        isShuffled = true;
      }
      squareOrderFxn(squareOrder);
    }
  }

  //this is the 'Hard Mode'.
  else if (state === 3) {
    playMode();
    returnToStart();

    if (runOrder === true) {
      //if the order of flashing colours has not yet been shuffled, it will seperately
      //shuffle two arrays and check that the same colour doesn't appear twice in a row,
      //and then combine the two arrays into one.
      if (isShuffled === false) {
        let firstHalf = shuffle([1, 2, 3, 4, ]);
        let secondHalf = shuffle([1, 2, 3, 4, ]);
        while (firstHalf[3] === secondHalf[0]) {
          firstHalf = shuffle([1, 2, 3, 4, ]);
        }
        squareOrder = concat(firstHalf, secondHalf);
        isShuffled = true;
      }
      squareOrderFxn(squareOrder);
    }
  }

  //records the user's response into an array with numbers 1, 2, 3, and 4 -- each
  //corresponding to a seperate square.
  if (userTry === true) {
    userSelection(userArray);
  }

  //compares the user's response with the original display.
  if (checkAnswer === true) {
    isUserCorrect(squareOrder, userArray);
  }
}



function startScreen() {
  //Easy Mode button
  easyButton();
  //Hard Mode Button
  hardButton();
  gameInstructions();

}



//changes to state 2 when clicked and runs the easy level of the game.
function easyButton() {
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2 - 80;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(153, 153, 255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(179, 102, 255);
    if (mouseIsPressed) {
      popSound.play();
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



//changes to state 3 when clicked and runs the hard level of the game.
function hardButton() {
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2 + 80;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(153, 153, 255);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(179, 102, 255);
    if (mouseIsPressed) {
      popSound.play();
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



//displayed at the top of the start screen.
function gameInstructions() {
  let instructions = [""
    ,"To Play: \n\n"
    ,"Choose a level and press the SPACE BAR to begin. \n"
    ,"The computer will display a random pattern of squares lighting up. \n"
    ,"Your goal is to remember the order and click the corresponding squares afterwards."
  ].join("");

  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER);
  text(instructions, width / 2, 80);
}



//the layout of the screen and the squares at the beginning of both levels before
//the user clicks the space bar to begin.
function playMode() {
  background(0);

  let squareNumber = 0;

  for (let i = width / 2 - 100; i < (width / 2) + 30; i += 120) {
    for (let j = height / 2 - 100; j < (height / 2) + 30; j += 120) {
      fill(blockColours[squareNumber][0], blockColours[squareNumber][1], blockColours[squareNumber][2]);
      rect(i, j, 100, 100);
      squareNumber += 1;
    }
  }
}



//a button which returns to the start screen when clicked.
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
      popSound.play();
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


//displays the computer selected order of colours when the space bar is pressed.
function keyPressed() {
  if (key === " ") {
    runOrder = true;
    return false;
  }
}



//takes in the array generated by the computer to determine the order of colours,
//and then displays the corresponding squares for one second each. Once it has
//cycled through all of the values, it allows the user to respond.
function squareOrderFxn (array) {

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



//tints the squares when the mouse hovers overtop and keeps track of the squares
//the user has clicked. If a square is clicked, it sends a value between 1 and 4
//to a new array depending on the square.
function userSelection (userArray) {
  if (mouseX >= (width/2 - 100) && mouseX <= width/2) {
    if (mouseY >= (height/2 - 100) && mouseY <= height/2) {
      fill(255, 179, 179); //red tint
      rect(width/2 - 100, height/2 - 100, 100, 100);
      if (mouseIsPressed) {
        popSound.play();
        userArray.push(1);
        mouseIsPressed = false;
      }
    }
  }

  if (mouseX >= (width/2 - 100) && mouseX <= width/2) {
    if (mouseY >= (height/2 + 20) && mouseY <= height/2 + 120) {
      fill(179, 255, 179); //green tint
      rect(width/2 - 100, height/2 + 20, 100, 100);
      if (mouseIsPressed) {
        popSound.play();
        userArray.push(2);
        mouseIsPressed = false;
      }
    }
  }

  if (mouseX >= (width/2 + 20) && mouseX <= width/2 + 120) {
    if (mouseY >= (height/2 - 100) && mouseY <= height/2) {
      fill(179, 179, 255); //blue tint
      rect(width/2 + 20, height/2 - 100, 100, 100);
      if (mouseIsPressed) {
        popSound.play();
        userArray.push(3);
        mouseIsPressed = false;
      }
    }
  }

  if (mouseX >= (width/2 + 20) && mouseX <= width/2 + 120) {
    if (mouseY >= (height/2 + 20) && mouseY <= height/2 + 120) {
      fill(255, 255, 204); //yellow tint
      rect(width/2 + 20, height/2 + 20, 100, 100);
      if (mouseIsPressed) {
        popSound.play();
        userArray.push(4);
        mouseIsPressed = false;
      }
    }
  }

  //once the array containing the user's choices becomes the same length as the
  //original array, the computer will check to see if the two arrays match.
  if (userArray.length === squareOrder.length) {
    checkAnswer = true;
    userTry = false;
  }
}



//determines whether the user is correct by comparing each value of the user's array
//with the original. If they are the same, the screen displays "Correct!", and if
//they are not, the screen displays "Nope!".
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
    text("Nope!", width/2 + 10, height/5);
  }
}
