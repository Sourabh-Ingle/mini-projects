
// QUES---> LARGEST NUMBER OF ARRAY
const arr3 = [1, 2, 5, 3, 6, 8, 0];

function largestNumber(arr) {
    let largestNum = arr[0];
    // arr.forEach(item => {
    //     if (item > largestNum) {
    //         largestNum = item;
    //     }
    // })
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

let largestNumberOfArr = largestNumber(arr3)
console.log("Largest Number in arr is : ", largestNumberOfArr);


