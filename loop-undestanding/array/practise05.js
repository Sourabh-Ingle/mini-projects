// QUES--->REVERSE NUMBER EX x=123  output 321 and if number is -ve then x=-123 output x=-321 
// and ifnumber is more than 32 bit then return 0 [-2**31 to 2**31+1]we want number between this



var reverse = function (x) {
    let xCopy = x;
    
    xCopy = Math.abs(x);
    let limit = Math.pow(2, 31);
    if (x < -limit || x > limit) {
        return 0;
    }
    if (x === 0) {
        return 0;
    }
    let revNum = 0;


    while (xCopy > 0) {
        let lastDig = xCopy % 10;
        revNum = (revNum * 10) + lastDig;

        xCopy = Math.floor(xCopy / 10);
    }
    return (x < 0) ? -revNum : revNum;
};

console.log(reverse(-123))