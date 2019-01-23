$(document).ready(function(){
  $("#formOne").submit(function(event) {

    var inputText = $("input#text").val();
    var outputText = "";
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

    for (var index = 0; index < inputText.length; index ++) {
      var inputChar = inputText[index];
      for (var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex ++) {
        if (inputChar === vowels[vowelsIndex]) {
          inputChar = "_";
        }
      }
      outputText = outputText + inputChar;
    }
    $("#result").text(outputText);



    event.preventDefault();

  });
});
