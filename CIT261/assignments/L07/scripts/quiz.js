var questions = [
     ['How many states are there in the United States?', 50],
     ['How many continents are there?', 7],
     ['How many legs does a spider have?', 8]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function printMe(message) {
     document.getElementById('output').innerHTML = message;
}

function buildList(arr) {
     var listHTML = '<ol>';
     for (var i = 0; i < arr.length; i++) {
          listHTML += '<li>' + arr[i] + '</li>';
     }
     listHTML += '</ol>';
     return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
     question = questions[i][0];
     answer = questions[i][1];
     response = prompt(question);
     response = parseInt(response);                    //  Changes to a number instead of a string
     if (response === answer) {
          correctAnswers += 1;
          correct.push(question);
     } else {
          wrong.push(question);
     }
}
html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);

printMe(html);













