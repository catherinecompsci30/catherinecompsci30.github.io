//Traffic Light
//Catherine Liu
//Feb 28, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.

let state;
let redLightDuration, yellowLightDuration, greenLightDuration;
let lastTimeLightChanged;

function setup() {
  createCanvas(600, 600);
  state = 1;
  redLightDuration = 3000;
  yellowLightDuration = 500;
  greenLightDuration = 3000;
  lastTimeLightChanged = millis();
}


function draw() {
  background(255);
  drawOutlineOfLights();
  checkIfLightSwitched();
  displayCorrectLight();
}

function checkIfLightSwitched () {
  if (state === 1) { //green
    if (millis() > lastTimeLightChanged + greenLightDuration) {
      state = 2;
      lastTimeLightChanged = millis();
    }
  }
  if (state ===2) { //yellow
    if (millis() > lastTimeLightChanged + yellowLightDuration) {
      state = 3;
      lastTimeLightChanged = millis();
    }
  }
  else if (state === 3) { //red
    if (millis() > lastTimeLightChanged + redLightDuration) {
      state = 1;
      lastTimeLightChanged = millis();
    }
  }
}

function displayCorrectLight() {
  if (state ===1) {
    drawGreenLight();
  }
  else if (state === 2) {
    drawYellowLight();
  }
  else if (state === 3) {
    drawRedLight();
  }
}

function drawGreenLight() {
  fill(0, 255, 0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function drawYellowLight() {
  fill(255, 255, 0);
  ellipse(width/2, height/2, 50, 50); //middle
}

function drawRedLight () {
  fill(255, 0, 0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
