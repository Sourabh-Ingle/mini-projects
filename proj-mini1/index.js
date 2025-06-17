
let container = document.getElementsByClassName("container")[0];
let inputColor = document.getElementById("color-input");
let currentColorValue = document.getElementsByClassName("currentColorValue")[0];

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]; //goog logic to get create hexacolor

// function handleRandomButton(){
//    let randomNumber = Math.floor(Math.random()*16777215);
//    let randomColor = randomNumber.toString(16);
//    colorChange(randomColor);   
// }

function handleApplyButton() {
   let color = inputColor.value;
   colorChange(color);
}

function colorChange(color) {
   container.style.backgroundColor = `#${color}`;
   currentColorValue.innerText = color.toUpperCase();
}



// hexa color 
function handleRandomButton() {
   let hexColor = "";

   for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * arr.length);
      hexColor += arr[randomNum];
   }
   colorChange(hexColor);
}


