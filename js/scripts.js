var findReplace = function(sentence, findWord, replaceWord) {
  var re = new RegExp(findWord, "g");
  var newSentence = sentence.replace(re, replaceWord)
  return newSentence
}



// var pattern = /findWord/ig;
// var finalSentence = sentence.replace(pattern, replaceWord);
// return finalSentence
