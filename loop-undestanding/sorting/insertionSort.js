// INSERTION SORT

const arr = [1, 4, 2, 5, 3, 7, 9];

function insertionSort(a) {
    let n = a.length;

    for (let i = 0; i < n - 1; i++){
        let curr = a[i];
        let prev = i - 1;
        while (a[prev] > curr && prev >= 0) {
            a[prev + 1] = a[prev];
            prev--;
        }
       a[prev + 1] = curr;
    }
    return a
}

console.log(insertioSort(arr));