var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'

  return animal
}

function add2(n) {
  var two = 2;
  var n = 102;
  return n + two

}


function funkyFunction(theFunk) {
var funk = "FUNKY!"

return function innerFunk(){
  funk
}

  return innerFunk
}

funkyFunction();

var theFunk = funkyFunction();





// var funkyFunction = function() {
//   return function() {
//     return "FUNKY!"
//   }
// }
