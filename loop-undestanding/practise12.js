

// SOME OF ARRAY    
function sum(arr, n) {
    if (n === 0) return arr[0];

    return arr[n] + sum(arr, n - 1);
}

const ar = [1, 4, 7, 9, 2, 4];
console.log(sum(ar, ar.length - 1))


//  SOME OF ODD NUMBERS OF ARRAY
function oddSum(arr, n) {
    let isOdd = (arr[n] % 2 !== 0) ? true : false;

    if (n === 0) return isOdd ? arr[0] : 0;

    console.log("n", n, "arr[n]", arr[n])

    return (isOdd ? arr[n] : 0) + oddSum(arr, n - 1)
}
const arOdd = [1, 4, 10, 3, -2, 7];
console.log(oddSum(arOdd, arOdd.length - 1));