
let container=document.getElementsByClassName("container")[0];
let inputColor = document.getElementById("color-input");
let currentColorValue=document.getElementsByClassName("currentColorValue")[0];

function handleRandomButton(){
   let randomNumber = Math.floor(Math.random()*16777215);
   let randomColor = randomNumber.toString(16);
   colorChange(randomColor);   
}

function handleApplyButton(){
    let color = inputColor.value;
     colorChange(color);
}

function colorChange(color){
       container.style.backgroundColor=`#${color}`;
       currentColorValue.innerText= color.toUpperCase();
}


