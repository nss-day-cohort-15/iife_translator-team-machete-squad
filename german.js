Controller = (function (translateToGerman) {
  translateToGerman.toGerman = function(inputText) {

    console.log("Your German has run?");

  var germanLexicon = {
    "merry" : "fröhlich",
    "Christmas" : "Weihnachten",
    "and" : "und",
    "happy" : "glücklich",
    "new" : "neu",
    "year" : "jahr"
};

  var translatedText = "";
  console.log(translatedText);
  console.log(Controller);

  for (i=0; i < inputText.length; i++) {
      translatedText +=
      (germanLexicon[inputText[i]] || inputText[i]) + " ";
      }
        console.log(translatedText);
        return translatedText
      }

      return translateToGerman;
  })( {} )