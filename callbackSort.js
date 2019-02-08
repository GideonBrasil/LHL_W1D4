// In this activity you will learn about how
// to sort collections and you'll get a chance
// to apply what you have learned about anonymous functions.

// write a sorting function that sorts the students array by name
// sort a list of students names in alphabetical order
// if students have the same name, priotitize the olderst (descending age)

// input the student names and ages
// store the students names
// sort the students names im aplhabetical order
// if the names are the same, sort by age
// output the sorted array

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 45 }

];

students.sort(function(compareName1, compareName2) {
  //store names  twicea
  var name1 = compareName1.name;
  var name2 = compareName2.name;
  // compare names by alphabetical number
  if (name1 < name2) {
    return -1;
  } else if (name2 < name1) {
    return 1;
    // compare names that are the same by age (oldest to youngest)
  } else if (name1 === name2) {
    return compareName2.age - compareName1.age;
  } else {
    return 0;
  }
});

console.log(students);