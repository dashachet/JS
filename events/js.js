"use strict";






const elem = document.querySelector('.box_1')
const elems = document.querySelectorAll(".boxes__box");

for (let value of elems) {
  value.addEventListener('click', () => {
  value.classList.add("newStyle");
  audio.play();
  })

}

const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");

elem.addEventListener('click', function() {
  // elem.style.backgroundColor = 'red'
  // elem.nextElementSibling.after(elem)
  elem.classList.add('newStyle')
  audio.play()
})
































// const elem = document.querySelector(".box_1");
// const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");

// const elems = document.querySelectorAll(".boxes__box");

// for (let value of elems) {
//   value.addEventListener("click", () => {
//     value.classList.add("newStyle");
//     audio.play();
//   });
// }
