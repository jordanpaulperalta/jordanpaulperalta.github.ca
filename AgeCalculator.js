'use strict';

const dateObject = new Date();
const year = dateObject.getFullYear();
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', function(){
  const userAge = Number(prompt(`Enter your age: `))
    alert(`The year as of today is ${year}. 
    \nYou entered your age as ${userAge}.
    \nYou were born in the year ${year - userAge}.`)
})