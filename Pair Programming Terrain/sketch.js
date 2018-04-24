// Pair Programming Terrain
// Catherine Liu & Csaba Nemeth
// May 2, 2018

let amp;
let stretch;
let angle;
let inc = (Math.PI)*2 / 80.0;
let heightsArray = [];

function setup() {
  createCanvas (1200, 600);
  amp = 40;
  stretch = 4;
}

function draw() {
  background(255);
  oneTerrainChunk();
}

function oneTerrainChunk() {
  strokeWeight(1);
  smooth();
  angle = 0;
  for (let i = 0; i < 80; i++) {
    line(i * stretch, height, i *  stretch, height/1.3 - 2*(sin(angle) * amp));
    heightsArray.push([i *  stretch, height/1.3 - 2*(sin(angle) * amp)]);
    angle += inc;
  }
}
