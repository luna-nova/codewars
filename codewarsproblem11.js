// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
  var letters = {};
  var string = str.toLowerCase();
  for(var i = 0; i < string.length; i++) {
    if (!letters[string[i]]){
      letters[string[i]] = "true";
    } else {
      return false;
    }
  }
  return true;
}
