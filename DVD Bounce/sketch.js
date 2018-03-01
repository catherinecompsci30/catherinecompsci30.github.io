// DVD Bounce - The Office Shoutout
// Catherine Liu
// Feb 15, 2018


// global variables
let state;
let x, y, radius;
let dx, dy;
let dvd, dvdColor;

function preload() {
  dvd = loadImage("images/logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(5, 10);
  dy = random(5, 10);
  dvdColor = color(0);
}

function draw() {
  background(255);
  if (state === 1) {
    startScreen();
    switchScreen();
  }
  if (state === 2) {
    background(255);
    moveThing();
    displayThing();
  }
}

function moveThing() {
  x += dx;
  y += dy;

  //check if bounce required
  if (y + dvd.height/2 >= height || y - dvd.height/2 <= 0) {
    dy = dy * -1;
    dvdColor = color(random(255), random(255));
  }

  if (x + dvd.width/2 >= width || x - dvd.width/2 <= 0) {
    dx = dx * -1;
    dvdColor = color(random(255), random(255));
  }
}

function displayThing() {
  fill(0);
  // ellipse(x, y, radius * 2, radius * 2);
  imageMode(CENTER);
  tint(dvdColor);
  image(dvd, x, y);
}

function startScreen() {
  fill(255, 0, 0);
  rectMode(CENTER);
  rect (width/2, height/2, 200, 100);
  fill(0);
  textSize(32);
  text("PLAY", width/2 - 40, height/2 + 10);
}

function switchScreen() {
  if (mouseX >= width/2 - 100 && mouseX <= width/2 + 100 && (mouseY > height/2 - 50 && mouseY < height/2 + 50)) {
    if (mouseIsPressed) {
      state = 2;
    }

  }
}
