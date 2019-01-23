$(document).ready(function(){
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  var replaceVowel = function(char) {
    for (var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex ++) {
      if (char === vowels[vowelsIndex]) {
        char = "_";
      }
    }
    return char;
  }

  $("#formOne").submit(function(event) {

    var inputText = $("input#text").val();
    var outputText = "";

    for (var index = 0; index < inputText.length; index ++) {
      var inputChar = inputText[index];
      var replaced = replaceVowel(inputChar);

      outputText = outputText + replaced;
    }
    $("#result").text(outputText);

    event.preventDefault();

  });
});
