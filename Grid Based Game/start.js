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


let rows = 6;
let cols = 6;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = (height - 200) / rows;
}

function draw() {
  background(255);
  push();
  displayGrid();
  pop();
  gameInstructions();
  startButton();

}


function displayGrid() {
  translate(width / 2, height / 2 - (cellSize * cols) / 2 );
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
  text("Memory Match", 400, 200);

  let instructions = [""
    ,"Click on a box to reveal a chemical element. \n"
    ,"Find two of the same element in order to have a match.  \n"
    ,"Find all matches before the time runs out!"
  ].join("");

  textStyle(BOLD);
  textSize(28);
  textAlign(CENTER);
  fill(0, 102, 153);
  text(instructions, 400, 320);
}


function startButton() {
  let buttonWidth = 200;
  let buttonHeight = 100;
  let leftSide = 300;
  let topSide = 400;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(128, 120, 241);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(179, 102, 255);
    if (mouseIsPressed) {
      setUpElements();
    }
  }

  noStroke();
  rect(leftSide, topSide, buttonWidth, buttonHeight);

  textStyle(BOLD);
  textSize(26);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Start Game", leftSide + 0.5 * buttonWidth, topSide + 0.5 * buttonHeight);
}


function setUpElements() {

}
