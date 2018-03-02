// Chessboard
// Catherine Liu
// Mar. 2, 2018

let boxSize;
let isFilled;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas (windowWidth, windowWidth);
  }
  else {
    createCanvas (windowHeight, windowHeight);
  }
  boxSize = width / 8;
  isFilled = false;
}

function draw() {
  background(255);
  drawBoard();
}

function drawBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (isFilled) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(boxSize *j, boxSize * i, boxSize, boxSize);
      isFilled = !isFilled;
    }
    isFilled = !isFilled; //fix for the next row
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
