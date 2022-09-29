# Password Generator

## Deployable Link
https://elduderino23.github.io/apparao_vasu_password_generator/

## Goal
The task was to make password generator with some starter code and a bare bones script.js file without touching the style.css and or the index.html.
It also needed to to be able show prompts that determined which of the 4 class of characters,(numerical, lowercase, uppercase, ands symbols) would generate a random password with a character length more than 8 but less that 128 character.

## Technology Use
  - Javascript
  - VS Code
  - Git Bash 
  - GitHub

## Execution

The plan of attack started with simply creating an array. The reason behind making the array first before creating any functions or alerts is because a password generator needs characters in order to generate a password. It was also the easiest to conceptualize. 

An example for my array is as follows:

```Javascript
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = [" ", "!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~",]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
```
After the array was written down, I started with the functions for each array. For example, a simple boolean with an if statement like the example below:

```Javascript
var askSpecial = false;
  if (confirm("Do You Want Special Characters!")) {
    askSpecial = true;

    general.push(symbols);

  }
  ```
  the genera(dot)(symbols) adds symbols the general array.

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-challenge-demo.png)

## Grading Requirements

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * The challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
