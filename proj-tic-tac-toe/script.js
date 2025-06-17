let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let msg = document.querySelector('#msg');
let newBtn = document.getElementById('new-btn');

let turn = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function checkDraw() {
    let allFilled = Array.from(boxes).every(box => box.innerText !== "");
    
    if (allFilled) {
        showWinner("danger", "It's a draw!");
        disabledBoxes();
    }
}

function disabledBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function enableBoxes() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = 'X';
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
       
        checkWinner();
        checkDraw();
    })
})

function checkWinner() {

    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos3Val !== '' && pos2Val !== '' && pos1Val !== '') {
            if (pos3Val === pos2Val && pos3Val === pos1Val) {
                disabledBoxes();
                showWinner("success", `winner is player ${pos1Val}`);
            }
        }
    }
} 



function showWinner(action, message) {
    msg.innerHTML = `${message}`;
    msg.classList.add(`action-${action}`)

    setTimeout(() => {
        msg.innerHTML = ``;
        msg.classList.remove(`action-${action}`)
    }, 2000)
}

newBtn.addEventListener('click', handleResetGame);
resetBtn.addEventListener('click', handleResetGame);


function handleResetGame() {
    turn = true;
    enableBoxes();
}
