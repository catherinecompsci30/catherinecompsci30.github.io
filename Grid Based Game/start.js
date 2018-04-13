// Memory
// Catherine Liu
// April 16, 2018

//Memory game using elements from the periodic table
// - Hydrogen (H)
// - Boron (B)
// - Carbon (C)
// - Oxygen (O)
// - Sodium (Na)
// - Aluminum (Al)
// - Chlorine (Cl)
// - Potassium (K)
// - Titanium (Ti)
// - Iron (Fe)
// - Copper (Cu)
// - Bromine (Br)
// - Yttrium (T)
// - Tin (Sn)
// - Antimony (Sb)
// - Lead (Pb)
// - Mercury (Hg)
// - Einsteinium (Es)


let rows = 4;
let cols = 4;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = (height - 200) / rows;
}

function draw() {
  background(255);
  displayGrid();
  gameInstructions();
  // startButton();
  setUpGame();
  elementLocations();

}


function displayGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      fill(255);
      strokeWeight(5);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}


function gameInstructions() {

  textStyle(BOLD);
  textSize(90);
  textAlign(CENTER);
  fill(63, 51, 255);
  text("Memory Match", 1050, 200);

  let instructions = [""
    ,"Click on a box to reveal a chemical element. \n"
    ,"Find two of the same element in order to have a match.  \n"
    ,"Find all matches before the time runs out!"
  ].join("");

  textSize(28);
  fill(0, 102, 153);
  text(instructions, 1050, 300);
}


// function startButton() {
//   let buttonWidth = 200;
//   let buttonHeight = 100;
//   let leftSide = 300;
//   let topSide = 400;
//   let rightSide = leftSide + buttonWidth;
//   let bottomSide = topSide + buttonHeight;
//
//   fill(128, 120, 241);
//   if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
//     fill(179, 102, 255);
//     if (mouseIsPressed) {
//       setUpElements();
//     }
//   }
//
//   noStroke();
//   rect(leftSide, topSide, buttonWidth, buttonHeight);
//
//   textStyle(BOLD);
//   textSize(26);
//   textAlign(CENTER, CENTER);
//   fill(0);
//   text("Start Game", leftSide + 0.5 * buttonWidth, topSide + 0.5 * buttonHeight);
// }


function setUpGame() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      strokeWeight(5);
      fill(102, 204, 255);
      rect(cellSize * x, cellSize * y, cellSize, cellSize);
    }
  }
}

//sets up where each element will be at the start of the game
function elementLocations() {
  let choice;
  let allElements = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  let transferArray = [];
  let newShuffle = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      choice = floor(random(allElements.length - 1));
      transferArray.push(allElements[choice]);
      allElements.splice(choice, 1);
    }
    newShuffle.push(transferArray);
    transferArray = [];
  }
  return newShuffle;
}
