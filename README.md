# JeoPARTY
A Jeopardy game using jService, a Jeopardy-like API

## Make a quiz game.

Make a quiz game that pulls random questions from [this awesome Jeopardy question API](jservice.io). Make an AJAX request to the following URL and you'll get back a question, answer, category, and point value, among other things.

`http://jservice.io/api/random`

Your challenge:

- [ ] Retrieve a question when the page loads and display it on the screen. Each question should display the category, point value, and the question text. You should also have a text box that people can type their answer into, and a button they can click to submit their answer.

- [ ] Keep track of the user's score. When the user clicks the 'guess' button, you should check to see if they got the answer right. If they did, increase their score by the value of the question (provided in the AJAX response). If they didn't, no points are awarded or lost.

- [ ] After users guess, load a new question.

> Hint: you can create the HTML that you need ahead of time and just change the textContent whenever you get a new question. You don't need to create a bunch of new elements for each question.

### Hard mode

- [ ] Style it using a grid.