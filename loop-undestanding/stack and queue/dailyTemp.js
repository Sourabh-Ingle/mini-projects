// 739. Daily Temperatures
// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to
// wait after the ith day to get a warmer temperature.If there is no future day for
// which this is possible, keep answer[i] == 0 instead.

//     Example 1:

// Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
// Example 2:

// Input: temperatures = [30, 40, 50, 60]
// Output: [1, 1, 1, 0]
// Example 3:

// Input: temperatures = [30, 60, 90]
// Output: [1, 1, 0]

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

var dailyTemperatures = function (temp) {
    let stack = [];
    let n = temp.length;
    let ans = new Array(n).fill(0);

    stack.push(n - 1);
    ans[n - 1] = 0;

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (temp[i] >= temp[top]) {
                stack.pop();
            } else {
                ans[i] = top - i;
                break
            }
        }
        stack.push(i)
    }

    return ans;
};