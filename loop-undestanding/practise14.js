// FIBONACHI SERIES
// ONLY BY RECURSSION WHICH IS NOT OPTIMISED AND ITS TIME COMPLEXICTY IS 2**N OVER HERE
// WHICH IS EXPONENTIAL


function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(2));