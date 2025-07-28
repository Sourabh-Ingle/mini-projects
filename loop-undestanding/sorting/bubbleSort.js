
// BUBBLE SORT
// time complexity is O(n**2) and time complexicity O(1);


// in 2nd loop (j loop) we put condition j<n-1-i is conditionto optimise the code as we know
// last elements are bigger in increasing order so no need of comparision

// we can again optimise this if there is already sorted array
// here in sortedArr it loop once and it get break loop as we put variable isSorted over here 
// for that 


let arr = [-1, 0, 3, 5, 1, 9, 2, 10];
let sortedArr = [-1, 0, 2, 3, 6, 8, 9];


function bubbleSort(a) {
    let n = a.length;

    for (let i = 0; i < n - 1; i++){
        let isSorted = false;
        for (let j = 0; j < n - 1 - i; j++){
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                isSorted = true;
            }
            
            if (!isSorted) break;
        }
    }

    return a;
}

console.log(bubbleSort(arr))