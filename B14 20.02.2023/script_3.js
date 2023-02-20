/**
 * Viết chương trình nhập vào 1 số n và đếm xem n có nhiêu chữ số
 * sau đó tính tổng các chữ số của n
 * Ví dụ n = 12345
 * Output: n có 5 chữ số, tổng các chữ số: 15.
 */

let n = parseInt(prompt("Please input n: "));
let number = n;
let totalValue = 0;
let totalDigit = 0;
let reverse = 0;

document.write("Số đảo ngược của n là: ")
while (n > 0) {
    totalValue += n % 10;
    document.write(n%10);
    // Cách viết số ngược khác
    // reverse = reverse *10 + n % 10;
    n = Math.floor(n /= 10);
    totalDigit++
}

document.write(`<br> Tổng các chữ số của ${number} là: ${totalValue} <br>`)
document.write(`${number} có ${totalDigit} chữ số`)

