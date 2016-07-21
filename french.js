Controller = (function (translateToFrench) {

    translateToFrench.toFrench = function(inputText) {

    console.log("Your French has run?");

 var frenchLexicon = {
   "Merry": "Joyeux",    .
   "Christmas": "Noël",
   "and": "et",
   "happy": "heureuse",
   "New": "nouvelle",
   "Year": "année"
 };

 var translatedText = "";
 console.log(translatedText);
 console.log(Controller);

 for (i=0; i < inputText.length; i++) {
     translatedText +=
     (frenchLexicon[inputText[i]] || inputText[i]) + " ";
     }

       console.log(translatedText);
       return translatedText
     }

     return translateToFrench;
})( {} )
