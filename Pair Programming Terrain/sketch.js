// Pair Programming Terrain
// Catherine Liu & Csaba Nemeth
// May 2, 2018

let amp;
let stretch;
let angle = 0;
let inc = (Math.PI)*2 / 100.0;

function setup() {
  createCanvas (windowWidth, windowHeight);
  amp = 40;
  stretch = 4;
}

function draw() {
  background(255);
  oneTerrainChunk();
}

function oneTerrainChunk() {
  strokeWeight(5);
  strokeCap(ROUND);
  smooth();
  for (let i = 0; i < width; i++) {
    line(i * stretch, height, i *  stretch, height/1.3 - 2*(sin(angle) * amp));
    angle += inc;
  }
}
