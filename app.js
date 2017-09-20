'use strict';

var userName = prompt('What is your name?');

alert('Hi, ' + userName + ' thank you for checking out my bio page!');

//Question 1

var siblings = prompt('Do I have any sisters?').toLowerCase();
console.log('Do I have any siblings?', siblings);

if (siblings === 'n' || siblings === 'no') {
  // Tell the user they are correct
  alert('I actually have three sisters. And although they were sometimes hard on me, I wouldn\'t have traded any one of them for a brother...most of the time...');
} else {
    // Tell the user they are wrong
  alert('That\'s right. I have three amazing sisters. I\'m so lucky to have them!');
}

var spoiledNephews = prompt('I\'m lucky enough to have two little nephews. Do I spoil them?').toLowerCase();
console.log('Do I have any children?', spoiledNephews);

if (spoiledNephews === 'n' || spoiledNephews === 'no') {
  alert('My sister\'s don\'t like it, but I actually do. If you could see them, you wouldn\'t be able to control yourself either. They\'re the cutest little guys ever!')
} else {
  alert('I only spoil them a little bit. Mostly I try to explore the world with them.');
}

var kingDome = prompt('Have I ever hit a baseball in a Major League stadium?').toLowerCase();
console.log('Have I ever hit in a major league stadium', kingDome);

if (kingDome === 'n' || kingDome === 'no') {
  alert('Do you doubt my talent? Just kidding.  I actually coached a high school team that got invited to take batting practice in the Kingdome.  I took my turn and had one of my hits bounce over the fence on one hop.  Warning track power is all I ever had... d:)')
} else {
  alert('You\'re right! I got to take batting practice in the Kingdome with a highschool team I coached.  I actually snuck into the Mariners locker room and sat in Ken Griffey Jr\'s fancy recliner chair. I\m not sure why but he had a baseball card of Matt Sinatro pinned to his locker.')
}

var marinersFan = prompt('Do I like the Mariners?').toLowerCase();
console.log('Am I a Mariners fan?', marinersFan);

if (marinersFan === 'n' || marinersFan === 'no') {
  alert(userName +'You are correct. I don\'t just like the Mariners, I love my Mariners!');
} else {
  alert('I grew up loving the Mariners. Even though they cause me great pain, there\'s no sense changing horses in mid-stream')
}
