
// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.


const duplicateArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let removeDuplicates = function (nums) {

    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }


    return x + 1;
};

console.log(removeDuplicates(duplicateArr));