// Nhập a, b. Tính tổng hai số đó
// Nhập c, d. Tính tổng hai số đó

// let a = parseInt(prompt("Please input a: "));
// let b = parseInt(prompt("Please input b: "));
// let sum AB = a +b;
// console.log(sumAB);

// let d = parseInt(prompt("Please input d: "));
// let c = parseInt(prompt("Please input c: "));
// let sumCD = c + d;
// console.log(sumCD);

function calulateSum() {
    let n1 = parseInt(prompt("Please input n1: "));
    let n2 = parseInt(prompt("Please input n2: "));
    let total = n1 + n2;
    // console.log(total);

    // sau khi tính toán xong, trả kết quả ra
    // bên ngoài thay vì trực tiếp

    return total; // trả kết quả mà hàm đã xử lý ra chương trình
    console.log('Hello') // vì chạy đến lệnh return đã trả ra kết quả ra ngoài function nên sẽ k thực hiện lệnh tiếp theo
}

let result = calulateSum();
console.log(result); 
// calulateSum(); // Nhập được lần 1
// calulateSum(); //Nhập được lần 2
// calulateSum(); //Nhập được lần 3
