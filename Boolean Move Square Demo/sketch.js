// Moving Square
// Catherine Liu
// Feb 26, 2018


let x, y, speed, squareSize;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  speed = 15;
  squareSize = 50;
  state = 1;
}

function draw() {
  background (255);

  moveSquare();

  fill(0);
  rect(x, y, squareSize, squareSize);
}

function moveSquare() {
  if (state ===1) {
    x += speed;
    if (x > width - squareSize) {
      state = 2;
      x = width - squareSize;
    }
  }
  else if (state ===2) {
    y += speed;
    if (y > height - squareSize) {
      state = 3;
      y = height - squareSize;
    }
  }
  else if (state ===3) {
    x -= speed;
    if (x < 0) {
      state = 4;
      x = 0;
    }
  }
  else if (state === 4) {
    y -= speed;
    if (y < 0) {
      state = 1;
      x = 0;
    }
  }
}
