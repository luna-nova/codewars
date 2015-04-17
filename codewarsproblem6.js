//Create a class Ghost

//Ghost objects are instantiated without any arguments.

//Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

//ghost = new Ghost();
//ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function() {
  var colorPicker = Math.floor((Math.random() * 4) + 1);
  return colorPicker === 1 ? this.color = "white" :
  colorPicker === 2 ? this.color = "yellow" :
  colorPicker === 3 ? this.color = "purple" : this.color = "red";
};
