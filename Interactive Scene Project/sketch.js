// Interactive Scene
// Catherine Liu
// Feb , 2018

let mode;
let x, y;
let button1, button2, button3, button4, button5, button6, button7;
let redColour, orangeColour, yellowColour, greenColour, blueColour, indigoColour, violetColour;
let grayScale = [0, 40, 80, 120, 160, 200, 240, 255];
let arc1, arc2, arc3, arc4, arc5, arc6, arc7;
let counter = 0
let trigger = false

arc1 = [255, 255, 255];
arc2 = [255, 255, 255];
arc3 = [255, 255, 255];
arc4 = [255, 255, 255];
arc5 = [255, 255, 255];
arc6 = [255, 255, 255];
arc7 = [255, 255, 255];

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

}


function draw() {
  background(255);
  noStroke();

  if (mode === 1) {
    changeColour();
    counter = 0
    arc1 = [255, 255, 255];
    arc2 = [255, 255, 255];
    arc3 = [255, 255, 255];
    arc4 = [255, 255, 255];
    arc5 = [255, 255, 255];
    arc6 = [255, 255, 255];
    arc7 = [255, 255, 255];

    if (trigger === true) {
      button1 = 0;
    }

  }

  if (mode === 2) {
    buttons();
    uniqueRainbow();
    trigger = true;
  }
}

function changeColour() {
  x = 600;
  y = 450;

  if (mouseX < width / 2) {
    //red layer
    fill(255, redColour, 0);
    arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
    //orange layer
    fill(255, orangeColour, 0);
    arc(width / 2, height / 2, x - 50, y - 50, Math.PI, Math.PI, true);
    //yellow layer
    fill(yellowColour, 255, 0);
    arc(width / 2, height / 2, x - 100, y - 100, Math.PI, Math.PI, true);
    //green layer
    fill(greenColour, 255, 0);
    arc(width / 2, height / 2, x - 150, y - 150, Math.PI, Math.PI, true);
    //blue layer
    fill(0, blueColour, 255);
    arc(width / 2, height / 2, x - 200, y - 200, Math.PI, Math.PI, true);
    //indigo layer
    fill(indigoColour, 0, 255);
    arc(width / 2, height / 2, x - 250, y - 250, Math.PI, Math.PI, true);
    //violet layer
    fill(violetColour, 0, 255);
    arc(width / 2, height / 2, x - 300, y - 300, Math.PI, Math.PI, true);

    //extra white space underneath rainbow
    fill(255);
    arc(width / 2, height / 2, x - 350, y - 350, Math.PI, Math.PI, true); //pick random from that colour
  }

  else {
    for (let shade = 0; shade < grayScale.length; shade++) {
      fill(grayScale[shade]);
      arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
      x -= 50;
      y -= 50;
    }
  }
}

function uniqueRainbow() {
  background(255);
  stroke(80);
  x = 600;
  y = 450;
  fill(arc1[0], arc1[1], arc1[2]);
  arc(width / 2, height / 2, x, y, Math.PI, Math.PI, true);
  fill(arc2[0], arc2[1], arc2[2]);
  arc(width / 2, height / 2, x - 50, y - 50, Math.PI, Math.PI, true);
  fill(arc3[0], arc3[1], arc3[2]);
  arc(width / 2, height / 2, x - 100, y - 100, Math.PI, Math.PI, true);
  fill(arc4[0], arc4[1], arc4[2]);
  arc(width / 2, height / 2, x - 150, y - 150, Math.PI, Math.PI, true);
  fill(arc5[0], arc5[1], arc5[2]);
  arc(width / 2, height / 2, x - 200, y - 200, Math.PI, Math.PI, true);
  fill(arc6[0], arc6[1], arc6[2]);
  arc(width / 2, height / 2, x - 250, y - 250, Math.PI, Math.PI, true);
  fill(arc7[0], arc7[1], arc7[2]);
  arc(width / 2, height / 2, x - 300, y - 300, Math.PI, Math.PI, true);

  //extra white space underneath rainbow
  fill(255);
  arc(width / 2, height / 2, x - 350, y - 350, Math.PI, Math.PI, true);
}

function buttons() {
  button1 = createButton("Red");
  button1.position(windowWidth / 7 - 100, 500);
  button1.mouseReleased(function() {
    defineColour(255, 0, 0);
  });

  button2 = createButton("Orange");
  button2.position(windowWidth / 7 * 2 - 100, 500);
  button2.mouseReleased(function() {
    defineColour(255, 102, 0);
  });

  button3 = createButton("Yellow");
  button3.position(windowWidth / 7 * 3 - 100, 500);
  button3.mouseReleased(function() {
    defineColour(255, 255, 0);
  });

  button4 = createButton("Green");
  button4.position(windowWidth / 7 * 4 - 100, 500);
  button4.mouseReleased(function() {
    defineColour(0, 205, 0);
  });

  button5 = createButton("Blue");
  button5.position(windowWidth / 7 * 5 - 100, 500);
  button5.mouseReleased(function() {
    defineColour(0, 102, 255);
  });

  button6 = createButton("Indigo");
  button6.position(windowWidth / 7 * 6 - 100, 500);
  button6.mouseReleased(function() {
    defineColour(153, 0, 255);
  });

  button7 = createButton("Violet");
  button7.position(windowWidth / 7 * 7 - 100, 500);
  button7.mouseReleased(function() {
    defineColour(204, 0, 204);
  });

}

function defineColour(colour1, colour2, colour3) {
  counter += 1;

  if (counter === 1) {
    arc1[0] = colour1;
    arc1[1] = colour2;
    arc1[2] = colour3;

  }

  else if (counter === 2) {
    arc2[0] = colour1;
    arc2[1] = colour2;
    arc2[2] = colour3;
  }

  else if (counter === 3) {
    arc3[0] = colour1;
    arc3[1] = colour2;
    arc3[2] = colour3;
  }

  else if (counter === 4) {
    arc4[0] = colour1;
    arc4[1] = colour2;
    arc4[2] = colour3;
  }

  else if (counter === 5) {
    arc5[0] = colour1;
    arc5[1] = colour2;
    arc5[2] = colour3;
  }

  else if (counter === 6) {
    arc6[0] = colour1;
    arc6[1] = colour2;
    arc6[2] = colour3;
  }

  else if (counter === 7) {
    arc7[0] = colour1;
    arc7[1] = colour2;
    arc7[2] = colour3;
  }

}

function keyTyped() {
  if (key === "1") {
    mode = 1;
  }
  else if (key === "2") {
    mode = 2;
  }
}
