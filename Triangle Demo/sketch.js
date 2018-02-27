// Triangles Demo
// Catherine Liu
// Feb 27, 2018


let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  x = random(width);
  y = random(height);
  keyPressed();

}

function keyPressed() {
  if (key === "t" && mouseIsPressed) {
    fill(0);
    triangle(x, y, x - 50, y + 100, x + 50, y + 100);
  }
  else if (key === "x" || key === "z") {
    fill(255);
    ellipse(random(width), random(height), 50);
  }
}
