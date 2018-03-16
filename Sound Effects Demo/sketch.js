// Sound Effects Demo
// Catherine Liu
// Mar. 15, 2018

let backgroundMusic;
let soundEffect;

function preload() {
  backgroundMusic = loadSound("assets/backgroundmusic.mp3");
  soundEffect = loadSound("assets/alarm.ogg");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
  soundEffect.setVolume(0.9);

}

function draw() {

}

function mousePressed() {
  fill(random(255), random(255), random(255), random(255));
  noStroke();
  ellipse(random(width), random(height), 50, 50);

  soundEffect.play();
}
