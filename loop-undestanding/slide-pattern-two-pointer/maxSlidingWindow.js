// 239. Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window
// of size k which is moving from the very left of the array to the
// very right.You can only see the k numbers in the window.
// Each time the sliding window moves right by one position.
// Return the max sliding window.

// Example 1:
// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]
// Explanation:
// Window position                Max
// --------------- -----
// [1  3 - 1] - 3  5  3  6  7       3
// 1[3 - 1 - 3] 5  3  6  7       3
// 1  3[-1 - 3  5]3  6  7       5
// 1  3 - 1[-3  5  3]6  7       5
// 1  3 - 1 - 3[5  3  6]7       6
// 1  3 - 1 - 3  5[3  6  7]7

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
//     - 104 <= nums[i] <= 104
// 1 <= k <= nums.length

var maxSlidingWindow = function (arr, k) {
    let i = j = 0;
    let res = dq = [];

    while (j < arr.length) {
        while (dq.length && dq[dq.length - 1] > arr[j]) {
            dq.pop()
        }
        dq.push(arr[j]);
        if (j >= k - 1) {
            res.push(dq[0]);
            if (arr[i] === dq[0]) {
                dq.shift() 
            }
            i++
            
        }
        j++
    }
   return res
}

var maxSlideWindow = function (nums, k) {
    const res = [];
    const deque = [];

    for (let right = 0; right < nums.length; right++) {
        while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }

        deque.push(right);

        const left = right - k + 1;
        if (deque[0] < left) {
            deque.shift();
        }

        if (right >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
}