var findReplace = function(sentence, findWord, replaceWord) {
  var newSentence = sentence;
  var pattern = /findWord/ig;
  newSentence.replace( pattern, replaceWord );
  return newSentence;

}
