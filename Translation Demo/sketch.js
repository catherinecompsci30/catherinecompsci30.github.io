// Moving Square
// Catherine Liu
// Feb 26, 2018

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   background(255);
//
//   fill(255, 0, 0);
//   rect(100, 100, 300, 50);
//
//   fill(0);
//   translate(100, 100);
//   rotate(millis() / 1000);
//   rect(0, 0, 300, 50);
// }


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  strokeWeight(5);
  ellipse(width / 2, height / 2, 400, 400);

  angleMode(DEGREES);
  for (let i = 0, i < 360, i += 6) {
    line (width/2, height/2, )
  }


}
