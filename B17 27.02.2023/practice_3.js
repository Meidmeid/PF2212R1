// Bài 3: Cho sẵn một mảng  chứa các số tự nhiên. 
// Bình phương các phần tử trong mảng và lưu vào một mảng  mới.
let array = [1, 2, 3, 4, 5, 6, 7];

// [1, 4, 9, 16, 25, 36, 49]

let result = [];
for (let i = 0; i < array.length; i++) {
    result = array[i] * array[i];
    document.write(result + ', ')
}