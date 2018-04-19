// Terrain Demo
// Catherine Liu
// Mar. 20, 2018

let heights = [];
let numberOfRectangles = 2000;

let time = 0;
let dt = 0.0018;

let flag;

function preLoad() {
  flag = loadImage("images/flag.png");
}


function setup() {
  createCanvas (windowWidth, windowHeight);
  generateInitialTerrain(numberOfRectangles);
  numberOfRectangles = width;
}

function draw() {
  background(255);
  displayTerrain();
  plantFlag();
}

function generateInitialTerrain(numberOfRectangles) {

  for (let i = 0; i < numberOfRectangles; i++) {
    let currentHeight = noise(time) * 500;
    heights.push(currentHeight);
    time += dt;
  }
}

function displayTerrain() {
  rectMode(CORNERS);
  let rectWidth = width/numberOfRectangles;
  fill(0);
  stroke(0);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}

function plantFlag() {
  let highestPoint = 0;
  let highestX;
  let rectWidth = width/numberOfRectangles;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > highestPoint) {
      highestPoint = heights[i];
      highestX = i*rectWidth;
    }
  }
  let highestY = height - highestPoint;
  // fill(255, 0, 0);
  // ellipse(highestX, highestY, 50, 50);
  image(flag, highestX, highestY - flag.height);

}
