// Interactive Scene
// Catherine Liu
// Feb 9, 2018

let mode;
let redColour;
let orangeColour;
let yellowColour;
let greenColour;
let blueColour;
let indigoColour;
let violetColour;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mode = 1;

  redColour = random(0, 64);
  orangeColour = random(128, 191);
  yellowColour = random(191, 255);
  greenColour = random(0, 190);
  blueColour = random(0, 255);
  indigoColour = random(64, 130);
  violetColour = random(130, 255);
  greyScale = random(0, 255);

}


function draw() {
  background(255);
  noStroke();

  if (mode === 1) {
    changeColour();
  }

  if (mode === 2) {
    uniqueRainbow();
  }
}

function changeColour() {
  x = 600
  y = 450

  if (mouseX < width / 2) {
    //red layer
    fill(255, redColour, 0);
    arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
    //orange layer
    fill(255, orangeColour, 0);
    arc(width / 2, height / 2, x-50, y-50, Math.PI, Math.PI, true);
    //yellow layer
    fill(yellowColour, 255, 0);
    arc(width / 2, height / 2, x-100, y-100, Math.PI, Math.PI, true);
    //green layer
    fill(greenColour, 255, 0);
    arc(width / 2, height / 2, x-150, y-150, Math.PI, Math.PI, true);
    //blue layer
    fill(0, blueColour, 255);
    arc(width / 2, height / 2, x-200, y-200, Math.PI, Math.PI, true);
    //indigo layer
    fill(indigoColour, 0, 255);
    arc(width / 2, height / 2, x-250, y-250, Math.PI, Math.PI, true);
    //violet layer
    fill(violetColour, 0, 255);
    arc(width / 2, height / 2, x-300, y-300, Math.PI, Math.PI, true);

    //extra white space underneath rainbow
    fill(255);
    arc(width / 2, height / 2, x-350, y-350, Math.PI, Math.PI, true); //pick random from that colour
  }

  //
  // else if (mouseX > width / 2) {
  //   for (let arcX = x; arcX > 299; arc - 50) {
  //     for (let arcY = y; arcY > 149; arcY - 50) {
  //
  //     }
  //   }
  else if (mouseX > width / 2) {
    fill(random(0, 255));
    arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
    fill(random(0, 255));
    arc(width / 2, height / 2, x-50, y-50, Math.PI, Math.PI, true);
    fill(random(0, 255));
    arc(width / 2, height / 2, x-100, y-100, Math.PI, Math.PI, true);
    fill(random(0, 255));
    arc(width / 2, height / 2, x-150, y-150, Math.PI, Math.PI, true);
    fill(random(0, 255));
    arc(width / 2, height / 2, x-200, y-200, Math.PI, Math.PI, true);
    fill(random(0, 255));
    arc(width / 2, height / 2, x-250, y-250, Math.PI, Math.PI, true);
    fill(random(0, 255));
    arc(width / 2, height / 2, x-300, y-300, Math.PI, Math.PI, true);

    //extra white space underneath rainbow
    fill(255);
    arc(width / 2, height / 2, x-350, y-350, Math.PI, Math.PI, true); //pick random from that colour
  }
}

function uniqueRainbow() {
    background(255);
    stroke(80);
    fill(255);
    arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
    arc(width / 2, height / 2, x-50, y-50, Math.PI, Math.PI, true);
    arc(width / 2, height / 2, x-100, y-100, Math.PI, Math.PI, true);
    arc(width / 2, height / 2, x-150, y-150, Math.PI, Math.PI, true);
    arc(width / 2, height / 2, x-200, y-200, Math.PI, Math.PI, true);
    arc(width / 2, height / 2, x-250, y-250, Math.PI, Math.PI, true);
    arc(width / 2, height / 2, x-300, y-300, Math.PI, Math.PI, true);

    //extra white space underneath rainbow
    fill(255);
    arc(width / 2, height / 2, x-350, y-350, Math.PI, Math.PI, true); //pick random from that colour
}

function keyTyped() {
  if (key === "1") {
    mode = 1;
  }
  else if (key === "2") {
    mode = 2;
  }
}


// - make the colours static in black and white rainbow
// - typing a letter changes the colours i.e. "r" makes first layer red