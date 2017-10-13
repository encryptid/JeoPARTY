function init() {
    console.log("This is not Jeopardy!");

    let answer = {};

    let request = new XMLHttpRequest();

    request.open('GET', "http://jservice.io/api/random");
    request.addEventListener('load', function() {
        console.log('fetching...');
        let response = JSON.parse(request.responseText);
        console.log(response);
        answer = response[0];
        console.log(answer);
        //displayQuestion(question);
    });
    request.send();
    console.log('Sucessfully sent');
    //console.log(answer);

    // function displayQuestion(info) {

    // }
}

window.addEventListener('load', init);