
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


// QUES--->a)FIND SECOND LARGEST NUMBER IN ARR
//         b)FIND FIRST,SECOND,THIRD LARGEST IN OBJ

const arr4 = [1, 2, 3, 9, 6, 6, 10, 10, 9, 10];
const threeLargestNumObj = { "first": undefined, "second": undefined, "third": undefined };

function secondLargest(arr) {
    let largestNum = arr[0];
    let secondLargestNumber;
    let thirdLargestNumber;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === largestNum) {
            largestNum = arr[i];
            threeLargestNumObj.first = arr[i];
        }
        else if (arr[i] > largestNum) {
            // third largest
            thirdLargestNumber = secondLargestNumber;
            threeLargestNumObj.third = thirdLargestNumber;
            // second largest
            secondLargestNumber = largestNum;
            threeLargestNumObj.second = secondLargestNumber;

            // first latgest
            largestNum = arr[i];
            threeLargestNumObj.first = arr[i];
        }
        else {
            if (arr[i] > secondLargestNumber) {
                thirdLargestNumber = secondLargestNumber;
                threeLargestNumObj.third = secondLargestNumber;
                secondLargestNumber = arr[i];
                threeLargestNumObj.second = arr[i];
            }
            if (arr[i] === secondLargestNumber) {
                secondLargestNumber = arr[i];
                threeLargestNumObj.second = arr[i];
            }
        }
    }

    return secondLargestNumber;
}

let secondLargestNum = secondLargest(arr4);
console.log("The second largest number is : ", secondLargestNum);
console.log("The largest 3 number is : ", threeLargestNumObj);