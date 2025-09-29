// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//     Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//     Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Constraints:
// 2 <= nums.length <= 104
//     - 109 <= nums[i] <= 109
//     - 109 <= target <= 109
// Only one valid answer exists
//


// time compleity=o(n)
let twoSUM = (arr, target) => {
    let n = arr.length;
    let map = {};
    for (let i = 0; i < n; i++){
        map[arr[i]] = i;
    }

    for (let j = 0; j < n; j++){
        let diff = target - arr[j];
        if (map[diff] && map[diff] !== i) {
            return [j, map[diff]];
        }
    }
}


//simple solution->brutforce solution using slide elemtent
var twoSum = function (nums, target) {
    let n = nums.length;
    // here first loop is for first slide element
    for (let i = 0; i < n - 1; i++) {
        // here second loop is for second slide element
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j]
            }
        }
    }
};