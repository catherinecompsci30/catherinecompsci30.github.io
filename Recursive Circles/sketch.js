// Recursive Circles
// Catherine Liu
// May 7, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255);
  let theLevel = int(map(mouseX, 0, width, 1, 8));
  drawCircle(width/2, width/2, theLevel);
}

function drawCircle(x, radius, level) {
  let fillColour = 125 * level/4;
  fill(fillColour, 200);
  ellipse(x, height/2, radius * 2, radius * 2);

  if (level > 1) {
    level -= 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}
