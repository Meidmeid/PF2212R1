// Tạo ra một danh sách mới từ 2 danh sách ban đầu theo thứ tự như sau:
let array1 = ["Hello", "take"];
let array2 = ["Dear", "Sir"]
// let result1 = [];
// let result2 = [];

// for (let i in array1) {
//     result1[i] = array1[0] + array2[i];
// }
// for (let i in array1) {
//     result2[i] = array1[1] + array2[i];
// }

// console.log([].concat(result1, result2));

// Cách thầy làm
let array3 = [];
for (let i in array1) {
    for (let j in array2) {
        array3.push(array1[i]+array2[j])
    }
}
console.log(array3);