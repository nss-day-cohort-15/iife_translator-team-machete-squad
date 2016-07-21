Controller = (function (translateToFrench) {

  translateToFrench.toFrench = function(inputText) {

  console.log("Your French has run?");

   var frenchLexicon = {
     "merry": "Joyeux",
     "christmas": "Noël",
     "and": "et",
     "happy": "heureuse",
     "new": "nouvelle",
     "year": "année"
   };

 var translatedText = "";

 for (i=0; i < inputText.length; i++) {
     translatedText +=
     (frenchLexicon[inputText[i]] || inputText[i]) + " ";
     }

       return translatedText
     }

     return translateToFrench;
})( {} )
