// Draw Dots
// Catherine Liu
// Mar. 5, 2018

function setup() {
  createCanvas (windowWidth, windowWidth);
  noCursor();
}

function draw() {
  background(0);
  displayDots();
}

function displayDots() {
  let pointSpacing = 150;
  for (let x = pointSpacing; x < width; x += pointSpacing) {
    for (let y = pointSpacing; y < height; y += pointSpacing) {
      fill(255);
      ellipse(x, y, 5, 5);
      stroke(255, 120);
      line(x, y, mouseX, mouseY);
    }
  }
}
