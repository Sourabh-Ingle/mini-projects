// QUE COUNT, MAKE ARR, MAKE OBJECT WITH NEGATIVE VALUE AND ITS INDEX OF NEGATIVE AVALUES IN ARRAY
let arr2 = [1, -2, 3, -4, -5, 6, -3];
const negativeCountArr = [];
const negativeCountObj = {};
function countNegativeNum(arr) {
    let count = 0;

// arr.forEach(item => {
//     if (item < 0) {
//         count++;
//     }
// })
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCountArr.push(arr[i]);
            negativeCountObj[arr[i]]=i ;
            count++;
        }
    }
    return count;
}

let negativeCount = countNegativeNum(arr2)

console.log("Total negative Count is : ", negativeCount);
console.log("Total negative number arr is : ", negativeCountArr);
console.log("Total negative number Obj is : ", negativeCountObj);