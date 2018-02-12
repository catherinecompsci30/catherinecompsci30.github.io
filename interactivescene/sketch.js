// Interactive Scene
// Catherine Liu
// Feb 9, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);
  noStroke();
  drawRainbow();
}

function drawRainbow() {
  x = 600
  y = 450
  fill(colour1, 0, 0);
  arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
  fill(colour1 + random(20, 100), colour2 + random(20, 100), colour3 + random(20, 100));
  arc(width / 2, height / 2, x-50, y-50, Math.PI, Math.PI, true);
  fill(colour1 + random(20, 100), colour2 + random(20, 100), colour3 + random(20, 100));
  arc(width / 2, height / 2, x-100, y-100, Math.PI, Math.PI, true);
  fill(colour1 + random(20, 100), colour2 + random(20, 100), colour3 + random(20, 100));
  arc(width / 2, height / 2, x-150, y-150, Math.PI, Math.PI, true);
  fill(colour1 + random(20, 100), colour2 + random(20, 100), colour3 + random(20, 100));
  arc(width / 2, height / 2, x-200, y-200, Math.PI, Math.PI, true);
  fill(colour1 + random(20, 100), colour2 + random(20, 100), colour3 + random(20, 100));
  arc(width / 2, height / 2, x-250, y-250, Math.PI, Math.PI, true);
  fill(colour1 + random(20, 100), colour2 + random(20, 100), colour3 + random(20, 100));
  arc(width / 2, height / 2, x-300, y-300, Math.PI, Math.PI, true);
  fill(255);
  arc(width / 2, height / 2, x-350, y-350, Math.PI, Math.PI, true); //pick random from that colour
}

let colour1 = 20;
let colour2 = 10;
let colour3 = 10;

function mouseDragged() {
  colour1 += 3;
  colour2 += 7;
  colour3 += 9;
  if (colour1 > 255) {
    colour1 = 50
  }
  if (colour2 > 250) {
    colour2 = 0
  }
  if (colour3 > 250) {
    colour3 = 0
  }
}
