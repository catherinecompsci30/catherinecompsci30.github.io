// Many Moving Balls
// Dan Schellenberg
// March 22, 2018

// global variables
let theBalls = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  moveBalls();
  displayBalls();

  if (mouseIsPressed) {
    spawnBall();
  }
}

function moveBalls() {
  for (let i=0; i<theBalls.length; i++) {
    theBalls[i].x += theBalls[i].dx;
    theBalls[i].y += theBalls[i].dy;

    //somewhat hacky
    let r = red(theBalls[i].color);
    let g = green(theBalls[i].color);
    let b = blue(theBalls[i].color);
    let a = alpha(theBalls[i].color);
    a = a - 3;

    theBalls[i].color = color(r, g, b, a);

    if (a < 0) {
      theBalls.shift();
    }

    // if (theBalls[i].y < 0) {
    //   theBalls[i].y = height;
    // }
    // else if (theBalls[i].y > height) {
    //   theBalls[i].y = 0;
    // }
    //
    // if (theBalls[i].x < 0) {
    //   theBalls[i].x = width;
    // }
    // else if (theBalls[i].x > width) {
    //   theBalls[i].x = 0;
    // }
  }

  print(theBalls.length);
}

function displayBalls() {
  for (let i=0; i<theBalls.length; i++) {
    fill(theBalls[i].color);
    noStroke();
    ellipse(theBalls[i].x, theBalls[i].y, theBalls[i].size, theBalls[i].size);
  }
}

function spawnBall() {
  let aBall = {
    x: mouseX,
    y: mouseY,
    size: 10,
    color: color(random(255), random(255), random(255), 255),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  theBalls.push(aBall);
}

// function mouseClicked() {
//   let aBall = {
//     x: mouseX,
//     y: mouseY,
//     size: random(10, 100),
//     color: color(random(255), random(255), random(255), random(255)),
//     dx: random(-5, 5),
//     dy: random(-5, 5),
//   };
//   theBalls.push(aBall);
// }
