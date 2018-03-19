// Moving Square
// Catherine Liu
// Feb 26, 2018

let heights = [];
let numberOfRectangles = 10;

function setup() {
  createCanvas (windowWidth, windowHeight);
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
}

function generateInitialTerrain(numberOfRectangles) {
  for (let i = 0; i < numberOfRectangles; i++) {
    heights.push(random(200, 700));
  }
}

function displayTerrain() {
  rectMode(CORNERS);
  let rectWidth = width/numberOfRectangles;
  fill(0);
  stroke(255);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}
