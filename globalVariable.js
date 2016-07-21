var Controller = (function () {

  var button = document.getElementById("translate");
  button.addEventListener('click', chooseLanguage)

  var toTranslate = document.getElementById("toTranslate");
  var inputText = toTranslate.toLowerCase.split(" ");

  var latin = document.getElementById("latin");
  var french = document.getElementById("french");
  var german = document.getElementById("german");

  console.log(inputText);
  console.log(toTranslate);


  function chooseLanguage {
    if (inputText !== " " && latin.selected) {
      return //Run latin program somehow
    } else if (inputText !== " " && french.selected) {
      return //Run French program somehow
    } else if (inputText !== " " && german.selected) {
      return //Run German Program Somehow
    } else {
      alert("Please select a language and put in text")
    }
  }
}
)()
