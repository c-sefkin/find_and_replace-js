var findReplace = function(sentence, findWord, replaceWord) {
  var re = new RegExp(findWord, "g");
  var newSentence = sentence.replace(re, replaceWord);
  return newSentence;
};

  $("document").ready(function(){

  $("#word-form").submit(function(event){

    var sentenceInput = $("#sentence").val();
    var findWordInput = $("#find").val();
    var replaceWordInput = $("#replace").val();

    var outputResult = findReplace(sentenceInput, findWordInput, replaceWordInput);

    $("#results").text(outputResult);
    $("#results-div").show();

    event.preventDefault();
  });
});
