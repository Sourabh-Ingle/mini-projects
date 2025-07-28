
// Given a non - empty array of integers nums, every element appears twice except for one.
// Find that single one.
// You must implement a solution with a linear runtime complexity 
// and use only constant extra space.
    
// Example 1:
// Input: nums = [2, 2, 1]
// Output: 1

// Example 2:
// Input: nums = [4, 1, 2, 1, 2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1



let arr = [1, 3, 5, 1, 3, 5, 4];
function nonDuplicate(arr) {

    let hastmap = {};

    for (let i = 0; i < arr.length; i++) {
        if (!hastmap[arr[i]]) {
            hastmap[arr[i]] = 1;
        }
        else {
            hastmap[arr[i]]++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (hastmap[arr[i]] === 1) {
            return hastmap[arr[i]]
        }
    }
}


// by using bitwise operator

var singleNumber = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i]
    }

    return xor;
};