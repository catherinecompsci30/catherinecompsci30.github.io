// DVD Bounce - The Office Shoutout
// Catherine Liu
// Apr. 16, 2018

// global variables

let myButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myButton = new Button(100, 50, 150, 75);
}

function draw() {
  background(255);
  myButton.display();
  if (myButton.isClicked()) {
    background(255, 0, 0);
  }
}

class Button {
  constructor(x, y, buttonWidth, buttonHeight) {
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.leftSide = x;
    this.topSide = y;
    this.rightSide = this.leftSide + this.buttonWidth;
    this.bottomSide = this.topSide + this.buttonHeight;
    // this.isClicked = false;
  }

  display() {
    fill(0);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(125);
    }
    rect(this.leftSide, this.topSide, this.buttonWidth, this.buttonHeight);
  }

  isClicked() {
    if (mouseIsPressed && mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      return true;
    }
    else {
      return false;
    }
  }
}
