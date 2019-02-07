// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //receive the element of an array and the index in the array
  arr.forEach(function(ele, i) {
    // execute the callback if element of the array = "waldo"
    if (ele === "Waldo") {
      // execute callback pushing the index to it
      found(i);
    }
  });
}
  
function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}
    
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);