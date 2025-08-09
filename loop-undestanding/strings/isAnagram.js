// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

let isValidAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++){
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }
    for (let j = 0; j < t.length; j++){
        if (!map[t[j]] || map[t[j] < 0]) {
            return false; 
        } else {
            map[t[j]]--;
        }  
    }

    return true;
}
