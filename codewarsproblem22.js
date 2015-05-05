// The goal of this exercise is to convert a string to a new string where each
// character in the new string is '(' if that character appears only once in the
// original string, or ')' if that character appears more than once in the original
// string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

function duplicateEncode(word) {
  var encode = word.toLowerCase(), dict = {}, end = [];
  for (var i = 0; i < encode.length; i++) {
    dict[encode[i]] = !!dict[encode[i]] ? ")" : "(";
  }
  for (var j = 0; j < encode.length; j++) {
    end[j] = dict[encode[j]];
  }
  return end.join("");
}
