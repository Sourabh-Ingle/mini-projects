// QUES==> REVERSE THIS ARRAY


const s = ["h", "e", "l", "l", "o"];

var reverseString = function (s) {

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        let str;
        str = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = str;

    }
    return s;
};

console.log(reverseString(s));