// Recursive Tree
// Catherine Liu
// May 7, 2018

// recursive tree
// Dan Schellenberg
// May 7, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeWeight(3);
}

function draw() {
  background(0);
  stroke(255);

  let theAngle = map(mouseX, 0, width, 0, 90);
  let theta = theAngle;
  let branchSize = height/3;

  // trunk
  translate(width/2, height);
  line(0, 0, 0, -branchSize);

  translate(0, -branchSize);

  // start recursive branching!!
  branch(branchSize, theta);
}

function branch(length, theta) {
  length *= 0.66;

  if (length > 3) {
    // right
    push();
    rotate(theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    branch(length, theta);
    pop();

    // left
    push();
    rotate(-theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    branch(length, theta);
    pop();
  }
}
