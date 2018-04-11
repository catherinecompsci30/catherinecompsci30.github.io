// Memory
// Catherine Liu
// , 2018

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
// - 


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
  displayGrid();
}

function displayGrid() {
  translate(width / 2 - (cellSize * rows) / 2, height / 2 - (cellSize * cols) / 2 );
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      fill(255);
      strokeWeight(5);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}
