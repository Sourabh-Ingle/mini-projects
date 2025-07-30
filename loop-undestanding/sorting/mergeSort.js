// MERGESORT

let arr = [9, 0, 6, 2, 1, 4, 6];
function mergeSort(a) {
    if (a.length <= 1) return a;
    let mid = Math.floor(a.length / 2);
    let left = mergeSort(a.slice(0, mid));
    let right = mergeSort(a.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < length.length && j < right[j]) {
        if (left[i] < right[j]) {
            res.push[left[i]];
            i++;
        }
        else {
            res.push(right[j]);
            j++;
        }
    }
    return [...res,...left.slice(i),...right.slice(j)]
}

console.log(mergeSort(arr))