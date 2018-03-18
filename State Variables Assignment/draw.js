function draw() {

  //state 1 is the start screen.
  if (state === 1) {
    background(204, 217, 255);
    startScreen();

    runOrder = false;
    userTry = false;
    checkAnswer = false;
    match = true;
    isShuffled = false;

    userArray = [];
    squareOrder = [];

  }

  //state 2 is the 'Easy Mode'.
  else if (state === 2) {

    playMode();
    returnToStart();
    if (runOrder === true) {
      //if the order of flashing colours has not yet been shuffled, it will shuffle
      //it and then set 'isShuffled' to be false so it doesn't keep shuffling.
      if (isShuffled === false) {
        squareOrder = [1, 2, 3, 4, ];
        squareOrder = shuffle(squareOrder);
        isShuffled = true;
      }
      squareOrderFxn(squareOrder);
    }
  }

  //this is the 'Hard Mode'.
  else if (state === 3) {
    playMode();
    returnToStart();

    if (runOrder === true) {
      //if the order of flashing colours has not yet been shuffled, it will seperately
      //shuffle two arrays and check that the same colour doesn't appear twice in a row,
      //and then combine the two arrays into one.
      if (isShuffled === false) {
        let firstHalf = shuffle([1, 2, 3, 4, ]);
        let secondHalf = shuffle([1, 2, 3, 4, ]);
        while (firstHalf[3] === secondHalf[0]) {
          firstHalf = shuffle([1, 2, 3, 4, ]);
        }
        squareOrder = concat(firstHalf, secondHalf);
        isShuffled = true;
      }
      squareOrderFxn(squareOrder);
    }
  }

  //records the user's response into an array with numbers 1, 2, 3, and 4 -- each
  //corresponding to a seperate square.
  if (userTry === true) {
    userSelection(userArray);
  }

  //compares the user's response with the original display.
  if (checkAnswer === true) {
    isUserCorrect(squareOrder, userArray);
  }
}
