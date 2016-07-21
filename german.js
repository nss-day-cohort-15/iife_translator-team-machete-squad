Controller = (function (translateToGerman) {
  translateToGerman.toGerman = function(inputText) {

  var germanLexicon = {
    "merry" : "fröhlich",
    "christmas" : "Weihnachten",
    "and" : "und",
    "happy" : "glücklich",
    "new" : "neu",
    "year" : "jahr"
};

  var translatedText = "";

  for (i=0; i < inputText.length; i++) {
      translatedText +=
      (germanLexicon[inputText[i]] || inputText[i]) + " ";
      }
        return translatedText
      }

      return translateToGerman;
  })( { })
