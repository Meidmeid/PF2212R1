/**
 * Nhập vào 1 số nguyên dương n. Tính ra giai thừa của n
 * Giai thừa n được tính bằng công thức sau:
 * n! = n*(n - 1)*(n - 2)*...*1
 * ví dụ: 5! = 5 * 4 * 3 * 2 * 1 = 120
 */

let n = parseInt(prompt("Please input n: "));
let result = 1;

for (let i = 1; i <= n; i++) {
    result *= i;
}

alert(`${n}! = ${result}`);