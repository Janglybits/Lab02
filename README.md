# Lab02
About me for 201 Lab02

## Problem Domain
Teach us more about you! Build out an “About Me” webpage that quizzes the user on fun facts gives the user some basic information about who you are and where you came from. We will build onto this project over the next few labs. Be prepared to refactor your code each day and learn about how a web site incrementally goes from an idea to a deployed site through various iterations of development.

## User Stories
This is our first exposure to user stories. User stories are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view. They are presented in the manner of

As a __, I want __, so that __

This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the the clients need.

The development team will then create sub-bullets called Feature Tasks which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story.

Below are your lab requirements in this format with the feature tasks already created.

## Instructions
As a user, I would like to learn about the site owner so I can get to know them better..

Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

Ask the user their name through a prompt()

Display that name back to the user through a custom greeting welcoming them to your site.

Display the user’s name back to them in your final message to the user.

## Developer Style Guide
A style guide is a series of standards and practices that must be followed in order for your code to be accepted by the team. This can include variable naming, file structure, and process. Below is a list of practices that you will be required to follow within this lab:

Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.

# Lab 03

As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
Convert your work experience and education summary into an unordered list using HTML
As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.
As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.

Make sure that all code is cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.

Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.
