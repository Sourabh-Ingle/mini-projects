
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
    if (arr.length < 2) {
        console.log("Length of aray is less than 2,so there is no second highest!!!");
        return;
    }
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



// other optimised and resusable code
// 1.we use set for unique value
// 2.then sort the array in reverse order
// 3. for nth term, we use loop as arr is reverse sorted 
function getTopNUniqueValues(arr, n) {
    // Remove duplicates and sort descending
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);

    // Build a result object dynamically
    const result = {};

    for (let i = 0; i < n; i++) {
        result[ `${i + 1}`] = uniqueSorted[i] ?? undefined;
    }

    return result;
}

const top3 = getTopNUniqueValues(arr4, 3);
const top4 = getTopNUniqueValues(arr4, 4);

console.log("Top 3:", top3);
console.log("Top 4:", top4);


// another type of code for dynamic and optimise way

function getTopNUniqueOptimized(arr, n) {
    const topN = new Array(n).fill(Number.NEGATIVE_INFINITY);

    arr.forEach(num => {
        // Skip if already present in topN
        let exists = false;
        for (let i = 0; i < n; i++) {
            if (topN[i] === num) {
                exists = true;
                break;
            }
        }
        if (exists) return;

        // Compare with topN values
        for (let i = 0; i < n; i++) {
            if (num > topN[i]) {
                // Shift lower values down
                for (let j = n - 1; j > i; j--) {
                    topN[j] = topN[j - 1];
                }
                topN[i] = num;
                break;
            }
        }
    });

    // Label output
    const labels = ["first", "second", "third", "fourth", "fifth"];
    const result = {};
    for (let i = 0; i < n; i++) {
        result[labels[i] || `#${i + 1}`] = topN[i] === Number.NEGATIVE_INFINITY ? undefined : topN[i];
    }

    return result;
}

const arr6 = [1, 2, 3, 9, 6, 6, 10, 10, 9, 10];
console.log(getTopNUniqueOptimized(arr6, 4));
