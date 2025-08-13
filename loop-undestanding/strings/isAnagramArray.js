// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// Example 1:
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// OPTIMISE SOLUTION
let groupAnagrams = (strs) => {
    let map = {};
    for (let i = 0; i < strs.length; i++){
        let s = strs[i];
        let freqArr = new Array(26).fill(0);

        for (let j = 0; j < s.length; j++){
            let index = s[i].charCodeAt() - "a".charCodeAt();
            freqArr[index]++;
        }
        let key = "";
        for (let j = 0; j < 26; j++){
            key += String.fromCharCode(k) + freqArr[k];
        }
        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }

    return [...Object.values(map)];

}


// NOT OPTIMISE SOLUTION
// TIME COMPLEXITY O(N*MLOGM); HERE N->length of array and M->length of string inside array

let isAnagramGroup = (strs) => {
    let map = {};
    for (let i = 0; i < strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]]; 
        } else {
            map[sortedStr].push(s[i]);
        }
    }
    return [...Object.values(map)];
}