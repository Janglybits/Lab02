// Get name //
var nickname = prompt('What is your name?');
console.log('the user\'s name is ' + nickname);
alert('Welcome, ' + nickname);
// Question one //
var correctAnswer = 0;
var questionOne = prompt('Yes or No, I have two cats?');
questionOne = questionOne.toUpperCase();
console.log(questionOne);
if (questionOne === 'Y' || 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    console.log(correctAnswer);
} else if (questionOne === 'N' || 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// Question two //
var questionTwo = prompt('Yes or No, this is a placeholder?');
questionTwo = questionTwo.toUpperCase();
console.log(questionTwo);
if (questionTwo === 'Y' || 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    console.log(correctAnswer);
} else if (questionTwo === 'N' || 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// Question three //
var questionThree = prompt('Yes or No, this is a placeholder?');
questionThree = questionThree.toUpperCase();
console.log(questionThree);
if (questionThree === 'Y' || 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    console.log(correctAnswer);
} else if (questionThree === 'N' || 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// Question four //
var questionFour = prompt('Yes or No, this is a placeholder?');
questionFour = questionFour.toUpperCase();
console.log(questionFour);
if (questionFour === 'Y' || 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    console.log(correctAnswer);
} else if (questionFour === 'N' || 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
//Question five //
var questionFive = prompt('Yes or No, this is a placeholder?');
questionFive = questionFive.toUpperCase();
console.log(questionFive);
if (questionFive === 'Y' || 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    console.log(correctAnswer);
} else if (questionFive === 'N' || 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// farewell//
alert('Thanks for visiting my page, ' + nickname + '! You had ' + correctAnswer + ' out of 5 correct!');