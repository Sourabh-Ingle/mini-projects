// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non - alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

//     Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//     Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//     Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non - alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// EFFECIENT OR OPTIMISE WAY TIME COMPLECITY(O(1)) AND TIME COMPLEXITY O(n)
let isPalindrome = (s) => {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            i++;
        } else if (!s[j].match(/[a-z0-9]/j)) {
            j--;
        } else if (s[i] === s[j]) {
            i++; j--;
        } else {
            return false;
        }
    }
    return false;
}

// WITHOUT USEING BUILTIN FUNCTIONS

// easy way  TIME COMPLEXITY O(n) SPACE COMPLECITY O(N)
let palamdromSentence = (s) => {
    let filterd = "";
    let reverse = "";
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++){
        if (s[i].match(/[a-z0-9]/i)) {
            filterd += s[i];
            reverse = s[i] + reverse;
        }
    }
    // let rev = filterd.split("").reverse().join("");
    // return (filterd === rev);
    return (filterd === reverse);
}