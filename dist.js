(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=howLongBetween,exports.howLongUntilJavaScriptBreaks=howLongUntilJavaScriptBreaks;function isValidDate(a){return"Invalid Date"!==new Date(a).toString()}function howLongBetween(a,b){var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=b.getFullYear()-a.getFullYear(),k=new Date(a);1<j&&(i=j-1,k.setFullYear(k.getFullYear()+i));for(var l,m=0;l=new Date(k),0<m?(l.setDate(l.getDate()+m),m=0):(l.setMonth(l.getMonth()+1),m=k.getDate()-l.getDate()),isValidDate(l)&&l<=b;)++h,k=l;for(;;){var n=new Date(k);if(n.setDate(n.getDate()+1),isValidDate(n)&&n<=b)++g,k=n;else break}for(;;){var o=new Date(k);if(o.setHours(o.getHours()+1),isValidDate(o)&&o<=b)++f,k=o;else break}for(;;){var p=new Date(k);if(p.setMinutes(p.getMinutes()+1),isValidDate(p)&&p<=b)++e,k=p;else break}for(;;){var q=new Date(k);if(q.setSeconds(q.getSeconds()+1),isValidDate(q)&&q<=b)++d,k=q;else break}for(;;){var r=new Date(k);if(r.setMilliseconds(r.getMilliseconds()+1),isValidDate(r)&&r<=b)++c,k=r;else break}return 12<=h&&(++i,h%=12),{milliseconds:c,seconds:d,minutes:e,hours:f,days:g,months:h,years:i}}function howLongUntilJavaScriptBreaks(){return howLongBetween(new Date,new Date(864e13))}
},{}],2:[function(require,module,exports){
(function () {
  var howLongBetween = require("how-long-between");
  var yearEl = document.getElementById("years");
  var monthEl = document.getElementById("months");
  var dayEl = document.getElementById("days");
  var hourEl = document.getElementById("hours");
  var minEl = document.getElementById("minutes");
  var secEl = document.getElementById("seconds");
  function updateUI(time) {
    yearEl.innerText = time.years;
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

},{"how-long-between":1}]},{},[2]);
