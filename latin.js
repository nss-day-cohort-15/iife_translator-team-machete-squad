Controller = (function (translateToLatin) {

	translateToLatin.toLatin = function(inputText) {

  var latinLexicon = {
    "merry"     : "hilarus",
    "christmas" : "christus",
    "and"       : "et",
    "happy"     : "beatus",
    "new"       : "novus",
    "year"      : "anno"
  };

  var translatedText = "";

  for (i=0; i < inputText.length; i++) {
	 translatedText +=
	 (latinLexicon[inputText[i]] || inputText[i]) + " ";
	 }

	   return translatedText
	 }

	 return translateToLatin;
})(Controller)
