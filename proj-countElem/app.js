let inputValue = document.getElementById('num');
let showInput = document.querySelector('.showArr');
let showResult = document.querySelector('.count-num');
let submit = document.getElementById('submit');
let alert = document.querySelector('.alert');
let newStart = document.querySelector('.new-start');

let arr = [];
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let numValue = inputValue.value;
    inputValue.value = '';
    if (!isNaN(numValue) && numValue) {
        handleCountElem(numValue);
        handleShowOutput(showInput, numValue);
    } else if (numValue === "") {
        handleAlert("danger", ` Plz enter valid number value.`)
    }
    else {
        handleAlert("danger", ` Plz enter valid number. (${numValue}) is not number!!!`)
    }

})

function handleCountElem(num) {

    let countObj = {};
    arr.push(num);

    arr.forEach((item) => {
        countObj[item] = (countObj[item] || 0) + 1;
    })
    let stringObj = JSON.stringify(countObj);
    handleShowOutput(showResult, stringObj , true)
}

function handleShowOutput(eleVal, num,val) {
    if (val) {
        eleVal.innerText = ``;
    }
    eleVal.innerText += ` ${num} ,`;
}

function handleAlert(action, text) {
    alert.innerText = text;
    alert.classList.add(`action-${action}`);
    setTimeout(() => {
        alert.innerText = "";
        alert.classList.remove(`action-${action}`);
    }, 2000)
}

newStart.addEventListener('click',()=>{
     arr = [];
     showInput.innerText=``;
     showResult.innerText=``;
})