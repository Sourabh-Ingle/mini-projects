// 47. Permutations II

// Medium

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:
// Input: nums = [1, 1, 2]
// Output:
// [[1, 1, 2],
// [1, 2, 1],
// [2, 1, 1]]

// Example 2:
// Input: nums = [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


// Constraints:

// 1 <= nums.length <= 8
//- 10 <= nums[i] <= 10

var permuteUnique = function (arr) {
    let ans = [];
    let backtrack = (path=[],choice=arr) => {
        if (arr.length === path.length) {
            ans.push([...path]);
            return;
        }
        for (let i = 0; i < choice.length; i++){

            if (i > 0 && choice[i] === choice[i - 1]) continue;

            path.push(choice[i]);
            backtrack(path,[...choice.slice(0,i),...choice.slice(i+1)]);
            path.pop();
        }
    }
    backtrack();
    return ans;
}