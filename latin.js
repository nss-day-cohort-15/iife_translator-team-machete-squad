Controller = (function (translateToLatin) {

console.log("Your Latin has run?");

  var latinLexicon = {
    "merry"     : "hilarus",
    "christmas" : "christus",
    "and"       : "et",
    "happy"     : "beatus",
    "new"       : "novus",
    "year"      : "anno"
  };

  var translatedText = "";
  console.log(translatedText);
  console.log(Controller);

  for (i=0; i < Controller.inputText.length; i++) {
	 translatedText +=
	 (latinLexicon[Controller.inputText[i]] || Controller.inputText[i]) + " ";
	 }

	   return translatedText
	   console.log(translatedText)
})(Controller)
