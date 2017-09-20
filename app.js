'use strict';

var userName = prompt('What is your name?');
console.log('Value of userName is', userName);

alert('Hi, ' + userName + ' thank you for visiting my bio page! To help you get to know me better, why don\'t we play a little Q&A game. I\'m going to ask you a series of questions and I\'ll keep track of how many you can guess correctly. Please answer "Yes" or "No" unless otherwise prompted. Good luck!');

//Question 1
var siblings = prompt('Here\'s the first question. Do you think I have any sisters?').toLowerCase();
console.log('Value of siblings is', siblings);

if (siblings === 'n' || siblings === 'no') {
  alert('I actually have three sisters. And although they were sometimes hard on me, I wouldn\'t have traded any one of them for a brother...most of the time...');
} else {
  alert('That\'s right. I have three amazing sisters. I\'m very lucky to have them!');
}

//Question 2
var spoiledNephews = prompt('I\'m also fortunate to have two little nephews. Do you think I\'m the type of uncle who would spoil them?').toLowerCase();
console.log('Value of spoiledNephews is', spoiledNephews);

if (spoiledNephews === 'n' || spoiledNephews === 'no') {
  alert('Well, my sister\'s don\'t like it very much, but I actually do spoil them. If you could see those two, you would do the same thing. They\'re the cutest little guys ever!');
} else {
  alert('Well, I only spoil them a little bit. Mostly I try to explore the world with them. It\'s fun seeing the world through their eyes.');
}

//Question 3
var hasHitStadium = prompt('Have I ever hit a baseball in a Major League stadium?').toLowerCase();
console.log('Value of hasHitStadium', hasHitStadium);

if (hasHitStadium === 'n' || hasHitStadium === 'no') {
  alert('Are you saying I don\'t look like a big-leaguer? Hmm, perhaps I don\'t. But I once coached a high school team that got invited to take batting practice in the Kingdome. Naturally, I took my turn at-bat, and one of my hits one-hopped over the fence. Sadly, I never had anything more than warning track power.');
} else {
  alert('You\'re right! I got to take batting practice in the Kingdome with a highschool team I coached.  I actually snuck into the Mariners locker room and sat in Ken Griffey Jr\'s fancy recliner chair. I\'m not sure why it was there, but he had a baseball card of Matt Sinatro pinned to his locker...that\'s right, Matt Sinatro.');
}

//Question 4
var marinersFan = prompt('Do I like the Mariners?').toLowerCase();
console.log('Value of marinersFan is', marinersFan);

if (marinersFan === 'n' || marinersFan === 'no') {
  alert(userName +', you are correct...sort of. I don\'t just like the Mariners, I love my Mariners!');
} else {
  alert('Of course I do! I grew up loving the Mariners. Even though they cause me great pain, there\'s no sense changing horses in mid-stream');
}

//Question 5
var birthPlace = prompt('Although I grew up rooting for the Mariners, I haven\'t always lived in Seattle. Do you think I was born in a state located west of the Mississippi River?').toLowerCase();
console.log('value of birthPlace is', birthPlace);

if (birthPlace === 'n' || birthPlace === 'no') {
  alert('You are correct, ' + userName + ', I was born in Jacksonville, Illinois. Jacksonville is the home of the Big Eli Ferris Wheel Company...and me.');
} else {
  alert('Close but no cigar. I was actually born just east of the Mississippi River in Jacksonville, Illinois. But I\'ve lived in Seattle since I was three, so I might as well be a native.');
}

//Questions 6 and 7 array
var statesNotVisited = ['Alaska', 'Hawaii', 'Utah', 'North Dakota', 'Kansas', 'Oklahoma', 'Minnesota', 'Michigan', 'Alabama', 'Georgia', 'South Carolina', 'North Carolina', 'Delaware', 'Connecticut', 'Rhode Island', 'Vermont', 'New Hampshire', 'Maine'];
console.log(statesNotVisited.length);

var statesVisited = (50 - statesNotVisited.length);
console.log(statesVisited);

//Question 6
var statesVisited = prompt('My next question is a little bit harder so I\'ll give you four chances and maybe even a few clues to help you out. In my lifetime I\'ve taken road trips from coast to coast, and from the Canadian border to the southern border. How many total states do you think I\'ve set foot in?');

for (var i = 0; i < 5; i++) {
  if (statesVisited === statesVisited) {
    prompt('You\'re amazing, ' + userName + '!!! You got it right!');
  } else {
    if (statesNotVisited > statesNotVisited.length) {
      alert('That\'s a little bit high.  Try a smaller number...');
    } else {
      if (statesNotVisited < statesNotVisited.length) {
      alert('I\'ve travelled more than that! Try a larger number...');

//Question 7
//var statesNotVisited =  prompt('There are only 18 states that I have NOT visited yet. I\'ll give you six chances to guess any of the states I still need to visit. Some of them might surprise you...');

/*for (statesNotVisited) {
  statesNotVisited = prompt('Congratulations, ' + userName + '! You guessed one of the states I\'m looking forward to checking out. The other states I still ned to see are' + console.log(statesNotVisited[i]))
} else {

}*/
