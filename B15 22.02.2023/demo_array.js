// Khai báo mảng 
let nameList = ["Long", "Hien", "Phuc"]; // danh sách tên
let numberList = [1, 2, 3, 4, 5]; // danh sách số tự nhiên
let info = ["Long", "longlamduc@hmail.com", true, 5.0]; // thông tin cá nhân
let weekdays = new Array['Monday', 'Sunday', 'Tuessay'];

console.log(numberList)
document.write(nameList + "<br>");

// kiểm tra kiểu dữ liệu của mảng
document.write(typeof (nameList) + "<br>");

// truy vấn 1 phần tử trong mảng
let numbers = [1, 2, 3, 4, 5];

// in ra giá trị 4 trong mảng
document.write(`Mảng ban đầu: ${numbers} <br> `)
document.write(`Phần tử tại vị trí 3 trong mảng có giá trị là: ${numbers[3]} <br>`);

// thay đổi giá trị tại index 3
numbers[3] = 10;
document.write(`Mảng sau khi thay đổi giá trị: ${numbers} <br> `)
document.write(`Phần tử tại vị trí 3 trong mảng có giá trị là: ${numbers[3]} <br>`);