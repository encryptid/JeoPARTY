function init() {
    console.log("This is not Jeopardy!");

    let answerBlock = {};
    let score = 0;

    function newQuestion() {
        let request = new XMLHttpRequest();
        request.open('GET', "http://jservice.io/api/random");
        request.addEventListener('load', function () {
            console.log('fetching new question...');
            let response = JSON.parse(request.responseText);
            console.log("response from API: " + response);
            answerBlock = response[0];
            console.log("answer block is currently... ");
            console.log(answerBlock);
            displayQuestion();
        });
        request.send();
        console.log('Sucessfully sent');
    };

    function displayQuestion(info) {
        let body = document.querySelector('main');
        let question = document.createElement('ul');
        question.textContent = answerBlock.category.title;
        let questionLine = document.createElement('li');
        body.appendChild(question);
        question.appendChild(questionLine);
        questionLine.textContent = answerBlock.question;
        let input = document.createElement('input');
        question.appendChild(input);
        input.placeholder = "Input answer here.";
        let submit = document.createElement('button');
        submit.textContent = "Submit";
        question.appendChild(submit);
        submit.classList.add('submit');
        console.log("current value of answer: " + answerBlock.answer);
        submit.addEventListener('click', submitAnswer);
    };

    function submitAnswer() {
        let input = document.querySelector('input');
        //let submission = input.value.toLowerCase();
        //console.log(submission);
        console.log('button working!');
        console.log("Your submission is: " + input.value);
        console.log("Actual answer is: " + answerBlock.answer);
        console.log("inputs: " + querySelectorAll('input').length);
        if (input.value != answerBlock.answer) {
            console.log('WRONG, dummy!');
            // answerBlock is updating, but function is looking at first
            // input box. Need to either remove first box or cause function
            // to look at last box
            newQuestion();
        } else {
            console.log("Yay!");
            increaseScore();
            newQuestion();
        };

    };

    function increaseScore() {
        let header = document.querySelector('h3');
        console.log(score);
        score += answerBlock.value;
        header.textContent = `$` + score; 
        //needs to add current value to previous value
    }

    newQuestion();
}

window.addEventListener('load', init);