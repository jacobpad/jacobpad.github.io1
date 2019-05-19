// COMPUTER VS COMPUTER
let upper = 1000;
let randomNum = getRandomNumber(upper);
let guess;
let attempts = 0;

function getRandomNumber(upper) {
     return Math.floor(Math.random() * upper) + 1;
}
while (guess !== randomNum) {
     guess = getRandomNumber(upper);
     attempts++;
}

document.getElementById("randomNumber").innerHTML = ("The random number the computer chose was: " + randomNum + ".");
document.getElementById("numOfGuesses").innerHTML = ("It took the computer " + attempts + " to find the random number " + randomNum + ".");