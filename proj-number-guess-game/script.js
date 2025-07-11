let userInput = document.getElementById('num-input');
let subBtn = document.getElementById('subBtn');
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowHigh = document.querySelector('.lowHigh');
let alert = document.querySelector('.alert')
const resultPattern = document.querySelector('.resultPattern');

const para = document.createElement('p');

let randomNum;
function randomNumberGen() {
    randomNum = Math.floor(Math.random() * 100) + 1;
}

randomNumberGen();

let prevGuess = [];
let numGuess = 1;
let playGame = true;
let maxChance = 5;

if (playGame) {
    subBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

// validate number given by user
function validateGuess(guess) {
    if (isNaN(guess)) {
        userInput.value = '';
        alertMassage("danger", "please enter valid number")
    } else if (guess < 0) {
        userInput.value = '';
        alertMassage("danger", "please enter positive number");
    }
    else if (guess > 100) {
        userInput.value = '';
        alertMassage("danger", "please enter number less than 100");
    } else {
            prevGuess.push(guess);
            displayGuess(guess); //issue resolved
        if (numGuess > maxChance) {
            displayMassage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }else {
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMassage(`congratulations!!! You guessed it right.`);
        alertMassage("success", `congratulations!!! You won.`);
        endGame();
    } else if (guess < randomNum) {
        displayMassage(`Yor guess is tooo low than number.`);
        alertMassage("danger", `Yor guess is TOOO LOW than number.`);
    }
    else {
        displayMassage(`Yor guess is tooo high than number.`);
        alertMassage("danger", `Yor guess is TOO0 HIGH than number.`);

    }
}

function displayGuess(guess) {
    userInput.value = '';
     guessSlot.innerText = prevGuess.join(', ');
    // guessSlot.innerText += `${guess}, `; //this is also one-method
    
    remaining.innerText = `${maxChance - numGuess}`;
    numGuess++;

}

function displayMassage(massage) {
    lowHigh.innerText = massage;
}

function newGame() {
        playGame = true;
        userInput.removeAttribute('disabled');
        randomNumberGen();
        numGuess = 1;
        prevGuess = [];
        guessSlot.innerText = ``;
        remaining.innerText = `${maxChance}`;
        displayMassage(``);
         // Remove previous button to avoid duplicates
    if (document.getElementById('newGame')) {
        document.getElementById('newGame').remove();
    }
}



function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    para.classList.add('button');
    para.setAttribute('id', 'newGame');
    para.innerText = `Start Game`;
    resultPattern.append(para);
    playGame = false;
    para.addEventListener('click', newGame);
}


function alertMassage(action, massage) {
    alert.classList.add(`action-${action}`);
    alert.innerText = `${massage}`;
    setTimeout(() => {
        alert.classList.remove(`action-${action}`);
        alert.innerText = ``;
    }, 3000)
}