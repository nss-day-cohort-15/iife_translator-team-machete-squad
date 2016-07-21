Controller = (function (translateToGerman) {

  var germanLexicon = {
    "merry" : "fröhlich",
    "Christmas" : "Weihnachten",
    "and" : "und",
    "happy" : "glücklich",
    "new" : "neu",
    "year" : "jahr"
};

var translatedText = "";

for (i=0; i < Controller.toTranslate.length; i++) {
    translatedText +=
    (germanLexicon[Controller.toTranslate[i]] || Controller.toTranslate[i]) + " ";
    }
      return translatedText
})(Controller)