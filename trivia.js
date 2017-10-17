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
        let questionBox = document.createElement('section');
        body.appendChild(questionBox);
        let question = document.createElement('h2');
        question.textContent = answerBlock.category.title;
        let questionLine = document.createElement('p');
        questionLine.textContent = answerBlock.question;
        questionBox.appendChild(question);
        questionBox.appendChild(questionLine);
        let input = document.createElement('input');
        questionBox.appendChild(input);
        input.placeholder = "Input answer here.";
        let submit = document.createElement('button');
        submit.textContent = "Submit";
        questionBox.appendChild(submit);
        submit.classList.add('submit');
        console.log("current value of answer: " + answerBlock.answer);
        submit.addEventListener('click', submitAnswer);
        //submit.classList.add('hidden');
        //input.classList.add('hidden');
    };

    function submitAnswer() {
        let input = document.querySelector('section:last-child input');
        //let submission = input.value.toLowerCase();
        //console.log(submission);
        console.log('button working!');
        if (input.value != answerBlock.answer) {
            console.log('WRONG, dummy!');
            let body = document.querySelector('section:last-child');
            let submit = document.querySelector ('section:last-child button');
            let input = document.querySelector('section:last-child input');
            submit.classList.add('hidden');
            input.classList.add('hidden');
            let nay = document.createElement('h2');
            nay.textContent = "Wrong!";
            body.appendChild(nay);
            newQuestion();
        } else {
            console.log("Yay!");
            let body = document.querySelector('section:last-child');
            let submit = document.querySelector ('section:last-child button');
            let input = document.querySelector('section:last-child input');
            submit.classList.add('hidden');
            input.classList.add('hidden');
            let yay = document.createElement('h2');
            yay.textContent = "Correct!";
            body.appendChild(yay);
            increaseScore();
            newQuestion();
        };
    };

    function increaseScore() {
        let header = document.querySelector('h3');
        console.log(score);
        score += answerBlock.value;
        header.textContent = `$` + score;
    }

    newQuestion();
}

window.addEventListener('load', init);