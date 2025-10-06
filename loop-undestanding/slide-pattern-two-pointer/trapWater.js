// 42. Trapping Rain Water

// Given n non - negative integers representing an elevation map where the width of
//  each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output: 6
// Explanation: The above elevation map(black section) is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].In this case, 6 units of rain water(blue section) are being trapped.

// Example 2:
// Input: height = [4, 2, 0, 3, 2, 5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

var trap = function (arr) {
    let n = arr.length;
    let maxL = maxR = [];
    maxL[0] = arr[0];
    maxR[n - 1] = arr[n - 1];

    for (let i = 1; i < n; i++){
        maxL[i] = Math.max(arr[i], maxL[i - 1]);
    }

    for (let j = n - 2; j >= 0; j--){
        maxR = Math.max(arr[j], maxR[j + 1]);
    }

    let sum = 0;
    for (let k = 0; k < n; k++){
        let waterTrap = Math.min(maxL[k], maxR[k]) - arr[k];
        sum+=waterTrap>0?waterTrap:0
    }

    return sum
}

var trapp = function (arr) {
    let n = arr.length;
    let maxL = [];
    let maxR = [];
    maxL[0] = arr[0];
    maxR[n - 1] = arr[n - 1];
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
        maxR[n-1-i]=Math.max(arr[n-1-i],maxR[n-i])
    }
    
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
        ans += Math.max(waterTrapped, 0);  // Avoid negative values
    }
    return ans;
};


