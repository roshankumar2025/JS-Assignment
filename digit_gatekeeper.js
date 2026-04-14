let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let count = 0;

for (let x = L; x <= R; x++) {
    if (x % K === 0 && !x.toString().includes('0')) {
        let sum = 0;
        let temp = x;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        if (isPrime(sum)) count++;
    }
}

alert(count);