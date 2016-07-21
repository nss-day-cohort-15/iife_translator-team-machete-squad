var Controller = (function (thing) {

  var button = document.getElementById("translate");
  button.addEventListener('click', chooseLanguage);

  var latin = document.getElementById("latin");
  var french = document.getElementById("french");
  var german = document.getElementById("german");

  function chooseLanguage (evt) {

    var toTranslate = document.getElementById("toTranslate").value;
    console.log(toTranslate);
    var inputText = toTranslate.toLowerCase().split(" ");

    if (inputText !== " " && latin.selected) {
      var answer = thing.toLatin(inputText)
      console.log("LOVE EM!", answer)
    } else if (inputText !== " " && french.selected) {
      thing.toFrench(inputText)
    } else if (inputText !== " " && german.selected) {
      thing.toGerman(inputText)
    } else {
      alert("Please select a language and put in text")
    }
  }
  console.log("test");

  return thing
}
)(Controller || {} )
