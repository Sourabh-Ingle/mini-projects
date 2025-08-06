// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have.
//  Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// OPTIMISE APPROCH
// TIME COMPLEXITY O(N) AS WE ARE USING SET 
var numJewelsInStones = function (jewels, stones) {
    count = 0;
    let jSet = new Set();
    for (let i = 0; i < jewels.length; i++) {
        jSet.add(jewels[i]);
    }

    for (let j = 0; j < stones.length; j++) {
        if (jSet.has(stones[j])) {
            count++;
        }
    }

    return count;
};

// BRUTE FORCE APPROCH
// TIME COMPLEXITY O(N**2)
let jewelCount = (jw,s) => {
    let count = 0;
    for (let i = 0; i < s.length; i++){
        // if (jw.includes(s[i])) {
        //     count++;
        // }
        for (let j = 0; j < jw.length; j++){
            if (jw[j] === s[i]) {
                count++;
                break;
            }
        }
    }
    return count;
}