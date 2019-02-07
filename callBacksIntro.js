// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //loop through the length of each element in the array  
  for (var i = 0; i < arr.length; i++) {
    // execute the callback if the string index of the array = "waldo"
    if (arr[i] === "Waldo") {
      // execute callback
      found(i);
    }
  }
}
  
function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
