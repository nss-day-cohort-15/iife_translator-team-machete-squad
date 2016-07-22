var Controller = (function (thing) {

  var button = document.getElementById("translate");
  button.addEventListener('click', chooseLanguage);

  var latin = document.getElementById("latin");
  var french = document.getElementById("french");
  var german = document.getElementById("german");

  function chooseLanguage (evt) {

    var toTranslate = document.getElementById("toTranslate").value;

    if (!toTranslate) {
      return alert("Please select a language and put in text");
    }

    var inputText = toTranslate.toLowerCase().split(" ");
    var translated = document.getElementById("translatedText")

    if (inputText && latin.selected) {
        var answer = thing.toLatin(inputText)
        console.log(answer);
        translated.innerText = answer;
    } else if (inputText && french.selected) {
        var answer = thing.toFrench(inputText)
        console.log(answer);
        translated.innerText = answer;
    } else if (inputText && german.selected) {
        console.log(answer);
        var answer = thing.toGerman(inputText)
        translated.innerText = answer;
    }
  }

  return thing
}
)(Controller)
