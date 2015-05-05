// There are two lists of different length. The first one consists of keys, the second
// one consists of values. Write a function createDict(keys, values) that returns a
// dictionary created from keys and values. If there are not enough values, the rest
// of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.
//
// Example 1:
//
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

function createDict(keys, values){
  var dict = {};
  for (var i = 0; i < keys.length; i++) {
    dict[keys[i]] = (values[i] === undefined ? null : values[i]);
  }
  return dict;
}
