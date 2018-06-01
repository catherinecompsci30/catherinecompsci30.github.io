// Moving Square
// Catherine Liu
// Feb 26, 2018

let someList = [5, 15, 3, 8, 9, 1, 20, 7];
let newArray = [];
let didSwap;

function setup() {
  someList = bubbleSort(someList);
  selectionSort(someList);
  // print(someList);
}


function bubbleSort(aList) {
  let swapRequired = true;

  while (swapRequired) {
    swapRequired = false;

    for (let i = 1; i < aList.length - 1; i++) {
      if (aList[i] > aList[i+1]) {
        //swap
        let temp = aList[i];
        aList[i] = aList[i+1];
        aList[i+1] = temp;
        swapRequired = true;
      }
    }
    return aList;
  }
}


function selectionSort(aList) {
  let swapLocation = 0;

  while (swapLocation < aList.length) {
    let smallestLocation = swapLocation;

    // one pass
    for (let i = swapLocation; i < aList.length; i++) {
      if (aList[i] < aList[smallestLocation]) {
        smallestLocation = i;
      }
    }
    //swap
    let temp = aList[swapLocation];
    aList[swapLocation] = aList[smallestLocation];
    aList[smallestLocation] = temp;

    swapLocation ++;
    print(aList);
  }
  return aList;
}
// function selectionSort(aList) {
//   for (let i = 0; i < aList.length - 1; i++) {
//     let smallest = Math.min(aList);
//     newArray.push(smallest);
//     aList.splice(smallest);
//   }
//   return newArray;
// }
