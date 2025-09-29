// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.


// var strStr = function (haystack, needle) {
//     let m = haystack.length;
//     let n = needle.length;
//     let lps = [0];
//     let i = 0; let j = 1;
//     while (j < n) {
//         if (needle[i] === needle[j]) {
//             lps[j] = i + 1;
//             i++; j++;
//         } else {
//             if (i === 0) {
//                 lps[j] = 0;
//                 j++;
//             } else {
//                 i = lps[i - 1];
//             }
//         }
//     }

//     i = j = 0;
//     while (m > i) {
//         if (needle[j] === haystack[i]) {
//             i++; j++;
//         } else {
//             if (j === 0) {
//                 i++;
//             } else {
//                 j=lps[j-1]
//             }
//         }
//         if (j===n) {
//             return i - n;
//         }
//     }

//     return -1
// }

var strSt = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    let lps = [0];
    let i = 0;
    let j = 1;
    while (n > j) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            i++;
            j++;
        } else {
            if (i === 0) {
                lps[j] = 0;
                j++;
            } else {
                i = lps[i - 1];
            }
        }
    }

    i = j = 0;

    while (m > i) {
        if (needle[j] === haystack[i]) {
            i++; j++;
        } else {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        }

        if (j === n) {
            return i - n;
        }
    }

    return -1
};