Controller = (function (translateToLatin) {

	translateToLatin.toLatin = function(inputText) {

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

  for (i=0; i < inputText.length; i++) {
	 translatedText +=
	 (latinLexicon[inputText[i]] || inputText[i]) + " ";
	 }

	   console.log(translatedText);
	   return translatedText
	 }

	 return translateToLatin;
})( {} )
