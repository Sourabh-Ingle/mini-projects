let inputValue = document.getElementById('num-input');
let userInput = document.getElementById('subBtn');
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowHigh = document.querySelector('.lowHigh');

const para=document.createElement('p');

let randomNum = parseInt(Math.random()*100+1);

const prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    userInput.addEventListener('click',(e)=>{
        e.preventDefault();
        let guess =parseInt(inputValue.value);
        validateGuess(guess);
    })
}

// validate number given by user
function validateGuess(guess){
    if(isNaN(guess)){
       alertMassage("danger","please enter valid number")
    }else if(guess<1){
        alertMassage("danger","please enter positive number");
    }
    else if(guess>100){
        alertMassage("danger","please enter number less than 100");
    }else{
       prevGuess.push(guess);
       if(numGuess>10){
        displayGuess(guess);
        displayMassage(`Game Over. Random number was ${randomNum}`);
       }
    }

}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMassage(massage){

}

function newGame(){

}

function endGame(){
    
}

function alertMassage(action,massage){

}
