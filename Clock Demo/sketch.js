// Clock Demo
// Catherine Liu
// Mar. 13, 2018

let clockSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    clockSize = height * 0.9;
  }
  else {
    clockSize = width * 0.9;
  }
}

function draw() {
  background(255);
  angleMode(DEGREES);

  push(); // save current drawing state
  translate(width / 2, height / 2);


  // outer circle
  fill(255);
  strokeWeight(8);
  ellipse(0, 0, clockSize, clockSize);

  // little dot in the middle
  fill(0);
  ellipse(0, 0, 4, 4);

  // hour tick marks
  strokeWeight(10);
  strokeCap(SQUARE);

  for (let i = 0; i < 12; i++) {
    line(0, clockSize/2 * 0.95, 0, clockSize/2 * 0.75 );
    rotate(360/12);
  }

  //minute tick marks
  strokeWeight(4);
  strokeCap(SQUARE);

  for (let i = 0; i < 60; i++) {
    line(0, clockSize/2 * 0.95, 0, clockSize/2 * 0.80 );
    rotate(360/60);
  }


  pop(); // return to previous drawing state

}
