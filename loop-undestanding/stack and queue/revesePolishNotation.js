//150. Evaluate Reverse Polish Notation
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression.Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32 - bit integer.

// Example 1:

// Input: tokens = ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22


// Constraints:
// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range[-200, 200].
// USING MAP AND LIGIC

let evalRPoN = (arr) => {
    let stack = [];
    let map = {
        "*": (a, b) => b * a,
        "+": (a, b) => b + a,
        "/": (a, b) => Math.trunc(b / a),
        "-": (a, b) => b - a,
    }
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            stack.push(arr[i]);
        }
        else {
            let p1 = Number(stack.pop());
            let p2 =Number(stack.pop());
            let ans = map[arr[i]](p1, p2);
            stack.push(ans)
        }
    }

    return stack.pop();
}
    


// USING EVAL AND LOGIC
var evalRPN = function (arr) {
    let stack = [];
    let op = ["+", "-", "*", "/"];

    for (let i = 0; i < arr.length; i++) {
        if (op.includes(arr[i])) {
            let p1 = (stack.pop());
            let p2 = (stack.pop());
            let ans = eval(`${p2}${arr[i]}${p1}`);
            stack.push(Math.trunc(ans));
        }
        else {
            stack.push(arr[i]);
        }
    }



    return +(stack.pop());
};