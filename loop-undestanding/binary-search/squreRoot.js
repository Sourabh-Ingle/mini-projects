//69. Sqrt(x)
// Given a non - negative integer x, return the square root of x rounded down to the nearest
// integer.The returned integer should be non - negative as well.
// You must not use any built -in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


// Constraints:
// 0 <= x <= 231 - 1

var mySqrt = function (x) {
    if (x < 2) return x;
    let n = Math.floor(x / 2);
    let left = 2;
    let right = n;

    while (right >= left) {
        let mid = Math.floor((right + left) / 2)
        let midSqu = mid * mid;
        if (midSqu === x) {
            return mid;
        }
        else if (midSqu > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return right;

};
    