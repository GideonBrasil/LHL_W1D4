// Implement your own version of the built-in array map function
// the input will take in two arguments
// the first argument will be an array and the second a callback function
// the function will return (output) a new array based on the results of the callback function


var words = ["ground", "control", "to", "major", "tom"];

function mapFunction(array, callbackfun) {
    // create a new array
    var newArray = [];
    // get the elemnt word in an array
    for (var element of array) {
      // push that element into a new array
      newArray.push(callbackfun(element));
    }
    // return the elemnts into a new array
    return newArray;
  }
//function to count the length of the words
let wordLength = function(element) {
  return element.length;
};
//function to change all the words to upper case
let wordToUpper = function(element) {
  return element.toUpperCase();
};
//function to reverse all words in given array
let reverseString = function(element) {
  return element.split('').reverse().join('');
};

console.log(mapFunction(words, wordLength));
console.log(mapFunction(words, wordToUpper));
console.log(mapFunction(words, reverseString));