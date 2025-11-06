// 40. Combination Sum II

// Medium

// Given a collection of candidate numbers(candidates) and a target number(target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
// Output:
// [
//     [1, 1, 6],
//     [1, 2, 5],
//     [1, 7],
//     [2, 6]
// ]

// Example 2:
// Input: candidates = [2, 5, 2, 1, 2], target = 5
// Output:
// [
//     [1, 2, 2],
//     [5]
// ]

// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

var combinationSum2 = function (arr, target) {
    let ans = [];
    arr.sort((a, b) => a - b);
    
    let backtrack = (remainingSum=target,path=[],start=0) => {
        if (remainingSum === 0) {
            ans.push([...path]);
        }

        if (remainingSum <= 0) return;

        for (let i = start; i < arr.length && arr[i] <= remainingSum; i++){

            if (i > start && arr[i] === arr[i - 1]) continue;

            path.push(arr[i]);
            backtrack(remainingSum - arr[i], path, i + 1);
            path.pop();
        }
    }
    backtrack();

    return ans;
}