// Interactive Scene
// Catherine Liu
// Feb 9, 2018

let mode;


function setup() {
  createCanvas(windowWidth, windowHeight);
  mode = 1;
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
    fill(255, random(0, 64), 0);
    arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
    //orange layer
    fill(255, random(128, 191), 0);
    arc(width / 2, height / 2, x-50, y-50, Math.PI, Math.PI, true);
    //yellow layer
    fill(random(191, 255), 255, 0);
    arc(width / 2, height / 2, x-100, y-100, Math.PI, Math.PI, true);
    //green layer
    fill(random(0, 190), 255, 0);
    arc(width / 2, height / 2, x-150, y-150, Math.PI, Math.PI, true);
    //blue layer
    fill(0, random(0, 255) ,255);
    arc(width / 2, height / 2, x-200, y-200, Math.PI, Math.PI, true);
    //indigo layer
    fill(random(64, 130), 0, 255);
    arc(width / 2, height / 2, x-250, y-250, Math.PI, Math.PI, true);
    //violet layer
    fill(random(130, 255), 0, 255);
    arc(width / 2, height / 2, x-300, y-300, Math.PI, Math.PI, true);

    //extra white space underneath rainbow
    fill(255);
    arc(width / 2, height / 2, x-350, y-350, Math.PI, Math.PI, true); //pick random from that colour
  }


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


function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false
}


// To add:
// - make the colours static in rainbow
// - typing a letter changes the colours i.e. "r" makes first layer red
