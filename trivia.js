function init() {
    console.log("This is not Jeopardy!");

    let answerBlock = {};
    let score = 0;

    let request = new XMLHttpRequest();

    request.open('GET', "http://jservice.io/api/random");
    request.addEventListener('load', function() {
        console.log('fetching...');
        let response = JSON.parse(request.responseText);
        console.log(response);
        answerBlock = response[0];
        console.log(answerBlock);
        displayQuestion();
    });
    request.send();
    console.log('Sucessfully sent');

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
        submit.addEventListener('click', submitAnswer);
    }

    function submitAnswer() {
        let input = document.querySelector('input');
        //let submission = input.value.toLowerCase();
        //console.log(submission);
        console.log('button working!');
        if (input.value !== answerBlock.answer) {
            console.log('WRONG, dummy!');
        } else {
            console.log("Yay!");
        }

    }

    function increaseScore() {
        let header = document.querySelector('h3');
        header.textContent = `$` + answerBlock.value;
    }
}

window.addEventListener('load', init);