// Interactive Scene
// Catherine Liu
// Feb 9, 2018

x = width/2;
y = height/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(115, 136, 207);
  drawRainbow(x, y);

}

let value = 0;
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
}

function drawRainbow(x, y) {
  noStroke();
  fill(value);
  arc(x, y, 600, 450 , Math.PI, Math.PI, false);
}
