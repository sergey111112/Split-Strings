function splitString(str) {
  var result = [];
  
  for (var i = 0; i < str.length; i += 2) {
    var pair = str.slice(i, i + 2);
    if (pair.length < 2) {
      pair += '_';
    }
    result.push(pair);
  }
  
  return result;
}
