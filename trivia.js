function init() {
    console.log("This is not Jeopardy!");

    let answerBlock = {};
    let counter = 0;

    let body = document.querySelector('main');
    let questionBox = document.querySelector('section');
    let question = document.querySelector('h2');
    let questionLine = document.querySelector('.clue');
    let input = document.querySelector('input');
    let submit = document.querySelector('button');
    let score = document.querySelector('h3');
    let answer = document.querySelector('.answer');

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
        console.log(question);
        answer.classList.add('hidden');
        score.textContent = `$` + counter;
        question.textContent = answerBlock.category.title;
        questionLine.textContent = answerBlock.question;
        console.log("current value of answer: " + answerBlock.answer);
        submit.addEventListener('click', submitAnswer);
        //submit.classList.add('hidden');
        //input.classList.add('hidden');
    };

    function submitAnswer() {
        // let body = document.querySelector('section');
        // let input = document.querySelector('input');
        // let submit = document.querySelector('button');
        //let submission = input.value.toLowerCase();
        //console.log(submission);
        console.log('button working!');
        if (input.value != answerBlock.answer) {
            console.log('WRONG, dummy!');
            answer.textContent = `Wrong. The correct answer is: ` + answerBlock.answer;
            answer.classList.remove('hidden');
            // submit.classList.add('hidden');
            // input.classList.add('hidden');
            //let nay = document.createElement('h2');
            //nay.textContent = "Wrong!";
            //body.appendChild(nay);
            setTimeout(newQuestion, 3500);
        } else {
            console.log("Yay!");
            increaseScore();
            newQuestion();
        };
    };

    function increaseScore() {
        console.log(counter);
        counter += answerBlock.value;
        score.textContent = `$` + counter;
    }

    newQuestion();
}

window.addEventListener('load', init);