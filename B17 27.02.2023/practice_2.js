//  Bài 2: Hãy tạo ra một mảng  mới bằng cách cộng các phần tử tương ứng của mảng  cũ theo index tương ứng
let array1 = ["M", "na", "i", "Ke"];
let array2 = ["y", "me", "s", "lly"];
// ['My', 'name', 'is', 'Kelly']

let display = [];
for (let i = 0; i < array1.length; i++) {
    display = array1[i] + array2[i] + ', ';
    document.write(display);
}
