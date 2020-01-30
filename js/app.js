// Get name //
var nickname = prompt('What is your name?');
// console.log('the user\'s name is ' + nickname);
alert('Welcome, ' + nickname);
// Question one //
var correctAnswer = 0;
var questionOne = prompt('Yes or No, I have two cats?');
questionOne = questionOne.toUpperCase();
// console.log(questionOne);
if (questionOne === 'Y' || questionOne === 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    //  console.log(correctAnswer);
} else if (questionOne === 'N' || questionOne === 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');

// Question two //
var questionTwo = prompt('Yes or No, I served in the US Army?');
questionTwo = questionTwo.toUpperCase();
// console.log(questionTwo);
if (questionTwo === 'Y' || questionTwo === 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    //  console.log(correctAnswer);
} else if (questionTwo === 'N' || questionTwo === 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// Question three //
var questionThree = prompt('Yes or No, I played the trumpet while growing up?');
questionThree = questionThree.toUpperCase();
// console.log(questionThree);
if (questionThree === 'Y' || questionThree === 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    //  console.log(correctAnswer);
} else if (questionThree === 'N' || questionThree === 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// Question four //
var questionFour = prompt('Yes or No, before passing away my parents were married fornearly 50 years?');
questionFour = questionFour.toUpperCase();
// console.log(questionFour);
if (questionFour === 'Y' || questionFour === 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    //  console.log(correctAnswer);
} else if (questionFour === 'N' || questionFour === 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
//Question five //
var questionFive = prompt('Yes or No, I have a tattoo of a fire-breathing dolphin as a tribute to my Mom?');
questionFive = questionFive.toUpperCase();
// console.log(questionFive);
if (questionFive === 'Y' || questionFive === 'YES') {
    alert('that\'s correct!');
    correctAnswer++;
    //  console.log(correctAnswer);
} else if (questionFive === 'N' || questionFive === 'NO') {
    alert('Sorry, that is not correct');
} else alert('Please enter yes or no');
// farewell//
alert('Thanks for visiting my page, ' + nickname + '! You had ' + correctAnswer + ' out of 5 correct!');