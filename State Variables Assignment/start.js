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
