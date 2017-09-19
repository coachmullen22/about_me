'use strict';

var userName = prompt('What is your name?');

alert('Hi, ' + userName + ' thank you for checking out my bio page!');

//Question 1

var answer1 = prompt('Do I have for cats?').toLowerCase();
console.log('answer 1 is', answer1);

if (answer1 === 'n' || answer1 === 'no') {
  // Tell the user they are correct
  alert('You are correct!');
} else {
    // Tell the user they are wrong
  alert('You\'re very wrong');
}

var answer2 = prompt('Do I like the Mariners?').toLowerCase();
console.log('answer2 is', answer2);

if (answer2 === 'n' || answer2 === 'no') {
  alert('It may be hard to believe but I love my Mariners!');
} else {
  alert('I can\'t help myself. The Mariners have put me through too much misery for me to give up on them now...')
}
