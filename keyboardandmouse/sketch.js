// Keyboard and Mouse
// Catherine Liu
// Feb 8, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {
}

function mousePressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      rect(mouseX, mouseY, random(50, 200), random(50, 200));
    }
    else if (mouseButton === RIGHT) {
      ellipse(mouseX, mouseY, random(50, 200), random(50, 200));
    }
  }
}

function keyPressed() {
  if (key === 'w'|| key === 'W') {
    background(0);
  }
  else if (key === 'b' || key === 'B') {
    background(255);
  }
}
