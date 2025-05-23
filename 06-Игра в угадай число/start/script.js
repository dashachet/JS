"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/



let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highScore = 0


console.log(secretNumber);

let check = document.querySelector('.check')

const displayMessage = function  (message) {
        document.querySelector('.message').textContent = message
}



check.addEventListener("click", function () {
  let number = Number(document.querySelector(".guess").value);
  console.log(number);
  if (!number) {
    displayMessage("Вы не ввели число");
  } else if (secretNumber === number) {
    displayMessage("Вы победили!");
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (secretNumber !== number) {
    if (score > 1) {
      if (secretNumber > number) {
        displayMessage("Число больше");
      } else {
        displayMessage("Число меньше");
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Вы проиграли");
      document.querySelector("body").style.background = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
    let secretNumber = Math.trunc(Math.random() * 20 + 1);
    let score = 20;
  displayMessage("Начните угадывать");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "black";
})
// document.querySelector('.nav')
// document.querySelectorAll('li')

// Element.innerHTML = 'я меняю все что находится внутри меня'
// el.outerHTML = , el.textContent = '' ,
// document.createElement('h1')
//
