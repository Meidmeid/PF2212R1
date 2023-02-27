// Bài 3: Cho sẵn một mảng  chứa các số tự nhiên. 
// Bình phương các phần tử trong mảng và lưu vào một mảng  mới.
let array = [1, 2, 3, 4, 5, 6, 7];

// [1, 4, 9, 16, 25, 36, 49]

let result = [];
for (let i = 0; i < array.length; i++) {
    result[i] = array[i] * array[i];
}
document.write(result);

/**
 * Bài thẩy sửa
 * for(let i in array1 ) {
    // array3 = array1[i]*array1[i];
    array2.push(Math.pow(array1[i], 2)); //hàm tính bình phương

}
console.log(array2);
 */
