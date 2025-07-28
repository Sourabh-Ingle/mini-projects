// SELECTION SORT


const arr = [9, 3, 5, 6, 7, 8];

function selectionSort(a) {
    let n = a.length;
    for (let i = 0; i < n - 1; i++){
        min = i;
        for (let j = i; j < n; j++){
            if (a[j] < a[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp; 
    }
    return a;
}

console.log(selectionSort(arr));