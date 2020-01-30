// Get name //
var nickname = prompt('What is your name?');
console.log('the user\'s name is ' + nickname);
alert('Welcome, ' + nickname);
// Question one //
var questionOne = prompt('Yes or No, I have two cats?');
questionOne = questionOne.toUpperCase();
if (questionOne === 'Y' || 'YES') {
    alert('that\'s correct!');
} else if (questionOne === 'N' || 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// Question two //
var questionTwo = prompt('Yes or No, this is a placeholder?');
questionTwo = questionTwo.toUpperCase();
// Question three //
var questionThree = prompt('Yes or No, this is a placeholder?');
questionThree = questionThree.toUpperCase();
// Question four //
var questionFour = prompt('Yes or No, this is a placeholder?');
questionFour = questionFour.toUpperCase();
//Question five //
var questionFive = prompt('Yes or No, this is a placeholder?');
questionFive = questionFive.toUpperCase();
// farewell//
alert('Thanks for visiting my page, ' + nickname);