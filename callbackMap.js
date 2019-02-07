var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
// => bind the expression to a value, in this case z | use (x^2 + y^2)^(1/2) = z 
var result = input.map(z => Math.sqrt(Math.pow(z.x, 2) + Math.pow(z.y, 2)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

console.log(result);