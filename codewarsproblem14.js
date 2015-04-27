// Create a function which checks a number for three different properties.
//
// is the number prime?
// is the number even?
// is the number a multiple of 10?
// Each should return either true or false, which should be given as an array.
// Remark: The Haskell variant uses data Property.

function numberProperty(n){
  var prime = false;
  var even = false; 
  var multi10 = false;
  if (n === 0) return [false, true, true];
  if (n % 10 === 0) multi10 = true;
  if (n % 2 === 0) even = true;
  if (n < 0) return [prime, even, multi10];
  if (n === 2) prime = true;
  var d = n-1;
    while (d > 1){
      if ((n % d) == 0) return [prime, even, multi10];
      d--;
    }
    prime = true;
  return [prime, even, multi10];
}
