'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let initialScore = 20;

//*****check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //wins
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    let currentScore = Number(document.querySelector('.score').textContent);

    let currentHighScore = Number(
      document.querySelector('.highscore').textContent
    );

    if (currentHighScore <= initialScore) {
      document.querySelector('.highscore').textContent = currentScore;
    }

    //guess too high
  } else if (guess > secretNumber) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent = 'too high!';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
      return initialScore;
    } else {
      document.querySelector('body').style.backgroundColor = '	#FF0000';
      document.querySelector('.message').textContent = 'you lost!';
      document.querySelector('.score').textContent = 0;
    }

    //guess too low
  } else if (guess < secretNumber) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent = 'too low!';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
      return initialScore;
    } else {
      document.querySelector('body').style.backgroundColor = '	#FF0000';
      document.querySelector('.message').textContent = 'you lost!';
      document.querySelector('.score').textContent = 0;
    }

    //no match
  } else {
    document.querySelector('.message').textContent = 'No match! Try again!';
  }
});

//*****again button
document.querySelector('.again').addEventListener('click', function () {
  //reset score
  initialScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = initialScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';
});
