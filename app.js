'use strict';

var userName = prompt('What is your name?');

alert('Hi, ' + userName + ' it\'s nice to meet you. Answer these questions for a cookie.');

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
