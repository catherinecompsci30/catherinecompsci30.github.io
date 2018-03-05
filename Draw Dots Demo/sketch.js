// Chessboard
// Catherine Liu
// Mar. 2, 2018

let boxSize;
let isFilled;

function setup() {
  createCanvas (windowWidth, windowWidth);
  noCursor();
}

function draw() {
  background(0);
  displayDots();
}

function displayDots() {
  let pointSpacing = 150;
  for (let x = pointSpacing; x < width; x += pointSpacing) {
    for (let y = pointSpacing; y < height; y += pointSpacing) {
      fill(255);
      ellipse(x, y, 5, 5);
      stroke(255, 120);
      line(x, y, mouseX, mouseY);


    }
  }
}





// function draw() {
//   background (255);
//   for (i = 0; i < 400; i += 50) {
//     for (j = 0; j < 400; j += 50) {
//       if (i % 100 === 50 && j % 100 === 50) {
//         fill(255);
//         rect(i, j, 50, 50);
//       }
//       else if (i % 100 === 0 && j % 100 === 0){
//         fill(255);
//         rect(i, j, 50, 50);
//       }
//       else {
//         fill(0);
//         rect(i, j, 50, 50);
//       }
//     }
//   }
// }
