// 3541. Find Most Frequent Vowel and Consonant
// You are given a string s consisting of lowercase English letters('a' to 'z').
// Your task is to:
// Find the vowel(one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant(all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.
// Note: If multiple vowels or consonants have the same maximum frequency,
//  you may choose any one of them.
// If there are no vowels or no consonants in the string, consider their frequency as 0.
// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:
// Input: s = "successes"
// Output: 6
// Explanation:
// The vowels are: 'u'(frequency 1), 'e'(frequency 2).The maximum frequency is 2.
// The consonants are: 's'(frequency 4), 'c'(frequency 2).The maximum frequency is 4.
// The output is 2 + 4 = 6.\

// Example 2:
// Input: s = "aeiaeia"
// Output: 3
// Explanation:
// The vowels are: 'a'(frequency 3), 'e'(frequency 2), 'i'(frequency 2).The maximum frequency is 3.
// There are no consonants in s.Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.

// little bit optimise and using some proper code BOTH SOLUTION IS VALID
var maxFreq = (s) => {
    let vow = new Set(["a", "e", "i", "o", "u"]);
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : map[s[i]] + 1;
    }
    console.log(map, "map")
    let sumVowel = 0;
    let sumConsonant = 0;
    let mapKeyArr = Object.keys(map);
    console.log(mapKeyArr, "mapKeyArr")
    for (let j = 0; j < mapKeyArr.length; j++) {
        if (vow.has(mapKeyArr[j])) {
            sumVowel = Math.max(map[mapKeyArr[j]], sumVowel);
        } else {
            sumConsonant = Math.max(map[mapKeyArr[j]], sumConsonant);
        }
    }
    console.log(sumVowel, "sumVowel", sumConsonant, "sumConsonant")
    return sumVowel + sumConsonant;
}


// simple way
var maxFreqSum = function (s) {
    let vow = ["a", "e", "i", "o", "u"];
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    let vowSum = 0;
    let otherSum = 0;

    for (let j = 0; j < s.length; j++) {
        if (vow.includes(s[j])) {
            if (map[s[j]] > vowSum) {
                vowSum = map[s[j]]
            }
        } else {
            if (map[s[j]] > otherSum) {
                otherSum = map[s[j]]
            }
        }
    }
    return otherSum + vowSum;
};