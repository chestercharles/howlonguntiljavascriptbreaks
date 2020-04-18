(function () {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  var howLongBetween = require("how-long-between");
  var yearEl = document.getElementById("years");
  var monthEl = document.getElementById("months");
  var dayEl = document.getElementById("days");
  var hourEl = document.getElementById("hours");
  var minEl = document.getElementById("minutes");
  var secEl = document.getElementById("seconds");
  function updateUI(time) {
    yearEl.innerText = numberWithCommas(time.years);
    monthEl.innerText = time.months;
    dayEl.innerText = time.days;
    hourEl.innerText = time.hours;
    minEl.innerText = time.minutes;
    secEl.innerText = time.seconds;
  }
  var time = howLongBetween.howLongUntilJavaScriptBreaks();
  updateUI(time);
  setInterval(function () {
    var time = howLongBetween.howLongUntilJavaScriptBreaks();
    updateUI(time);
  }, 1000);
})();
