// OOP Challenge
// Catherine Liu
// April 19, 2018

let myWalker;
let newMove;
let catherine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myWalker = new Walker(width/2, height/2);
  catherine = new Walker (width/2, height/2 , 0, 0, 255);
}

function draw() {
  myWalker.display();
  myWalker.move();

  catherine.display();
  catherine.move();
}

class Walker {
  constructor(x, y, r = 255, g = 0, b = 0) {
    this.distance = 4;
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.color = color(r, g, b);
  }

  display() {
    stroke(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  move() {
    let newMove = floor(random(1, 5));
    if (newMove === 1) {
      this.x += this.distance;
    }
    else if (newMove === 2) {
      this.x -= this.distance;
    }
    else if (newMove === 3) {
      this.y += this.distance;
    }
    else {
      this.y -= this.distance;
    }
  }
}
