// Write a method sum (sum_array in python) that takes an array of
// numbers and returns the sum of the numbers. These may be integers
// or decimals for Ruby and any instance of Num for Haskell. The numbers
// can also be negative. If the array does not contain any numbers
// then you should return 0.

function sum(numbers) {
  if (!numbers[0])
    return 0;
  var sumNum = 0;
  for(var i = 0; i < numbers.length; i++){
    sumNum += numbers[i];
  }
  return sumNum;
}
