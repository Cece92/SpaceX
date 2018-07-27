let question1 = document.querySelector(".question1")
let answer1 = document.querySelector(".answer1")
let question2 = document.querySelector(".question2")
let answer2 = document.querySelector(".answer2")
let question3 = document.querySelector(".question3")
let answer3 = document.querySelector(".answer3")
let isActive = 0

question1.addEventListener(
  'click',
  function(){
    answer1.style.display = "block"
  }, false
);

question2.addEventListener(
  'click',
  function(){
    answer2.style.display = "block"
  }, false
);

question3.addEventListener(
  'click',
  function(){
    answer3.style.display = "block"
  }, false
);
