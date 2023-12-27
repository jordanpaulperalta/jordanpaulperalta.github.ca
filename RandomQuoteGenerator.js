'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
const quotes = document.querySelector('.quotes');

const quote1 =
  'It does not matter how slowly you go as long as you do not stop.   - Confucius';
const quote2 =
  'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.    - Thomas Edison';
const quote3 =
  'When something is important enough, you do it even if the odds are not in your favor.    - Elon Musk';
const quote4 =
  'When you reach the end of your rope, tie a knot in it and hang on.   - Franklin D. Roosevelt';
const quote5 = 'Learning never exhausts the mind.   - Leonardo da Vinci';

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', function () {
  const quotesArray = [quote1, quote2, quote3, quote4, quote5];
  let randomQuote = Number(Math.trunc(Math.random() * 5));
  let showQuote = quotesArray[randomQuote];

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  quotes.textContent = showQuote;
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
