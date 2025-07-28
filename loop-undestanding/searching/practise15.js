// BINARY SEARCH
// CONDITION ---> ARRAY IS ALWAYS IN SORTED FORM LIKE INCREASERING OR DECRESING
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(a, num) {
    
    let left = 0;
    let right = a.length - 1;
    while (right >= left) {
        let mid = Math.floor((right + left) / 2);
        if (a[mid] === num) {
            return mid;
        } else if (num < a[mid]) {
            right = mid - 1;
        } else {
            left=mid+1
        }
    }
    return -1;
}

console.log(binarySearch(arr,4))