// Interactive Scene
// Catherine Liu
// Feb. 26, 2018
//
//Press keys '1' and '2' to switch between two modes. The initial mode will always be Mode 1, which displays
//a coloured or grayscale rainbow depending on the location of the mouse. Mode 2 allows the user to choose
//the colour of each rainbow arc by clicking buttons to fill the rainbow in order from top to bottom.
//
//Extra for Experts:
// - used the random function so that the coloured rainbow has different hues of each colour
// - used different shapes not learned in class -- i.e. semi-circles/arcs
// - imported p5.dom.js to create buttons for the user to click
// - used arrays to make grayscale rainbow and keep track of RGB values for each arc of the
//   rainbow in mode 2.
//
//Note: I wasn't able to figure out how to remove the buttons when the user switches back to
//      mode 1, but it doesn't affect the functionality, just the aesthetics, perhaps.



//global variables
let mode;
let x, y;
let button1, button2, button3, button4, button5, button6, button7;
let redColour, orangeColour, yellowColour, greenColour, blueColour, indigoColour, violetColour;
let grayScale = [0, 40, 80, 120, 160, 200, 240, 255];
let arc1, arc2, arc3, arc4, arc5, arc6, arc7;

//is necessary for the 'defineColour' function to fill arcs of the rainbow in the correct order.
let counter = 0

//list for each RGB value for arc colours used in 'uniqueRainbow' function -- starting all with white.
arc1 = [255, 255, 255];
arc2 = [255, 255, 255];
arc3 = [255, 255, 255];
arc4 = [255, 255, 255];
arc5 = [255, 255, 255];
arc6 = [255, 255, 255];
arc7 = [255, 255, 255];



function setup() {
  createCanvas(windowWidth, windowHeight);
  //the page will automatically load mode 1 at the start.
  mode = 1;

  //assigns a random number value within a certain range to colour variables
  //to be used to draw a rainbow with randomly selected hues of each colour.
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

  //if it is mode 1,the screen will load a coloured rainbow when the mouse is
  //on the left side of the screen, and a grayscale rainbow when the mouse is
  //on the right side of the screen.
  if (mode === 1) {
    changeColour();

    //counter is set back to 0 to refresh mode 2.
    counter = 0

    //arc RGB colours are returned back to white to refresh mode 2.
    arc1 = [255, 255, 255];
    arc2 = [255, 255, 255];
    arc3 = [255, 255, 255];
    arc4 = [255, 255, 255];
    arc5 = [255, 255, 255];
    arc6 = [255, 255, 255];
    arc7 = [255, 255, 255];
  }

  //if it is mode 2, the screen will change to show the outline of a rainbow
  //without any colours.
  if (mode === 2) {
    //loads buttons for the user to click and choose colours.
    buttons();
    uniqueRainbow();
  }
}



//determines whether the rainbow displayed will be coloured or grayscale.
function changeColour() {
  //starting variables for the size of each arc.
  x = 600;
  y = 450;

  //if the mouse is on the left side of the screen, semi-circles will be drawn
  //in decreasing sizes and overlap on top of each other to look like arcs.
  if (mouseX < width / 2) {
    //'Math.PI' draws a semi-circle because a full circle is 2*PI in radians.

    //red layer.
    fill(255, redColour, 0);
    arc(width / 2, height / 2, x, y, Math.PI, Math.PI);
    //orange layer.
    fill(255, orangeColour, 0);
    arc(width / 2, height / 2, x - 50, y - 50, Math.PI, Math.PI);
    //yellow layer.
    fill(yellowColour, 255, 0);
    arc(width / 2, height / 2, x - 100, y - 100, Math.PI, Math.PI);
    //green layer.
    fill(greenColour, 255, 0);
    arc(width / 2, height / 2, x - 150, y - 150, Math.PI, Math.PI);
    //blue layer.
    fill(0, blueColour, 255);
    arc(width / 2, height / 2, x - 200, y - 200, Math.PI, Math.PI);
    //indigo layer.
    fill(indigoColour, 0, 255);
    arc(width / 2, height / 2, x - 250, y - 250, Math.PI, Math.PI);
    //violet layer.
    fill(violetColour, 0, 255);
    arc(width / 2, height / 2, x - 300, y - 300, Math.PI, Math.PI);

    //extra white space underneath rainbow.
    fill(255);
    arc(width / 2, height / 2, x - 350, y - 350, Math.PI, Math.PI);
  }

  //if the mouse is on the right side of the screen, a grayscale rainbow will
  //be drawn with each arc being assigned a colour from a pre-determined list.
  else {
    for (let shade = 0; shade < grayScale.length; shade++) {
      fill(grayScale[shade]);
      arc(width / 2, height / 2, x, y, Math.PI, Math.PI);
      x -= 50;
      y -= 50;
    }
  }
}



//allows the user to pick the colour of each arc of the rainbow.
function uniqueRainbow() {
  background(255);
  stroke(80);

  //starting variables for the size of each arc.
  x = 600;
  y = 450;

  //fills each arc with RGB values from corresponding array.

  //first arc.
  fill(arc1[0], arc1[1], arc1[2]);
  arc(width / 2, height / 2, x, y, Math.PI, Math.PI);
  //second arc.
  fill(arc2[0], arc2[1], arc2[2]);
  arc(width / 2, height / 2, x - 50, y - 50, Math.PI, Math.PI);
  //third arc.
  fill(arc3[0], arc3[1], arc3[2]);
  arc(width / 2, height / 2, x - 100, y - 100, Math.PI, Math.PI);
  //fourth arc.
  fill(arc4[0], arc4[1], arc4[2]);
  arc(width / 2, height / 2, x - 150, y - 150, Math.PI, Math.PI);
  //fifth arc.
  fill(arc5[0], arc5[1], arc5[2]);
  arc(width / 2, height / 2, x - 200, y - 200, Math.PI, Math.PI);
  //sixth arc.
  fill(arc6[0], arc6[1], arc6[2]);
  arc(width / 2, height / 2, x - 250, y - 250, Math.PI, Math.PI);
  //seventh arc.
  fill(arc7[0], arc7[1], arc7[2]);
  arc(width / 2, height / 2, x - 300, y - 300, Math.PI, Math.PI);

  //extra white space underneath rainbow.
  fill(255);
  arc(width / 2, height / 2, x - 350, y - 350, Math.PI, Math.PI);
}



//makes buttons for each colour so the user can choose what colour to fill each
//arc of the rainbow in order. Once a button is pressed, it calls the 'defineColour'
//function with RGB values as the argument.
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



//writes each RGB argument into the array based on the order that the buttons are
//clicked, determined by the counter.
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



//changes between two modes: if the user presses '1', it will be mode 1 and if
//the user presses '2', it will be mode 2.
function keyTyped() {
  if (key === "1") {
    mode = 1;
  }
  else if (key === "2") {
    mode = 2;
  }
}
