class Ball {
  constructor() {

    this.x = 200;
    this.y = 20;
    this.prevY = this.y;
    this.radius = 2;

    this.yVelocity = 0;
    this.gravity = 0.2;

    this.lowerRange;

    this.contact = false;
    this.hit = false;
  }

  //displays ball.
  display() {
    fill(255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  //completes all calculations neccesary for the motion of the ball.
  move() {
    //uses the map() function to variate radius and gravitational strength based
    //on the height of the ball.
    this.radius = map(this.y, 0, windowHeight, 5, 70);
    this.gravity = map(this.y, 0, windowHeight, 0.2, 1);

    //applies gravitational force to ball.
    this.yVelocity += this.gravity;
    this.y += this.yVelocity;

    //controls ball behaviour at boundary of sin waves to remain on terrain and
    //calculates ball velocity based on slope of each 'hill'.
    if (this.y >= this.lowerRange) {
      //locks position to hill.
      this.y = this.lowerRange;

      //if this is the first contact...
      if (!this.contact) {
        //if the ball makes contact with a section of a hill with positive slope
        //and is travelling above a certain x velocity, the ball will lose momentum,
        //and you could potentially die.
        if (heightsArray[this.index][1] > heightsArray[this.index + 1][1] + 4  && this.yVelocity > 18) {
          if (moveLength >= 13) {
            state = 3;
          }
          this.hit = true;
          // moveLength -= 1;
        }
        this.contact = true;
      }
      else {
        this.contact = false;
      }
    }

    //calcualtes current y velocity by looking at the change in pixels in one frame.
    this.yVelocity = this.y - this.prevY;
    //sets limitation on maximum velocity.
    if (this.yVelocity < -16) {
      this.yVelocity = -16;
    }
    if (this.hit) {
      this.yVelocity = 60;
      this.hit = false;
    }
    //holds information about the previous position of the ball.
    this.prevY = this.y;

  }
}
