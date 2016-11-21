// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Derek'));

// var person = {
//   name: 'Derek',
//   greet: function() {
//       names.forEach((name) => {
//         console.log(this.name + ' says hi to ' + name);
//       });
//   }
// };
//
// person.greet();

// Vanilla JS
function add (a,b) {
  return a + b;
}
// ES6 Statement
var addStatement = (a,b) => {
  return a + b;
};

// ES6 Expression
var addExpresion = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));
console.log(addStatement(4,7));
console.log(addStatement(5,1));
console.log(addExpresion(3,-2));
console.log(addExpresion(99,4));
