var Controller = (function () {
  var textToTranslate = document.getElementById("toTranslate");
  var german = document.getElementById("");
  return {
    translateTo : { function () {
      if (textToTranslate != " " && .selected) {
        return
      }
    }
  }
}









/*

var counter = (function () {
  var i = 0;
  return {
    getI: function () {
      return i
    },
    setI: function (newI) {
      i = newI
    }
  }
}())

counter = (function (newCounter) {
  // var newCoutner = arguments[0] (oldCounter)
  newCounter.increment = function () {
    newCounter.setI(newCounter.getI() + 1)
  }
  return newCounter
}(counter))


console.log(`The value of i is: ${counter.getI()}`)
console.log(`The value of i is: ${counter.getI()}`)