// Pair Programming Terrain
// Catherine Liu & Csaba Nemeth
// May 2, 2018

let amp;
let stretch;
let angle;
let inc = (Math.PI)*2 / 80.0;
let heightsArray = [];
let transferArray = [];

function setup() {
  createCanvas (1200, 600);
  amp = 40;

  generateWaveHeights(5);

}

function draw() {
  background(255);
  strokeWeight(3);
  drawSinWave();
}

function generateWaveHeights(stretch) {
  angle = 0;
  for (let i = 0; i < 80; i++) {
    heightsArray.push([i *  stretch, height/1.3 - 2*(sin(angle) * amp)]);
    angle += inc;
  }
  return heightsArray;
}


function drawSinWave() {
  for (let i = 0; i < heightsArray.length; i++) {
    if (i === heightsArray.length - 1) {
      point(heightsArray[i][0], heightsArray[i][1]);
    }
    else {
      line(heightsArray[i][0], heightsArray[i][1],heightsArray[i+1][0], heightsArray[i+1][1] );
    }
    // heightsArray[i][0] += 1;
  }
}
