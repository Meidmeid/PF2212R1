//  Bài 2: Hãy tạo ra một mảng  mới bằng cách cộng các phần tử tương ứng của mảng  cũ theo index tương ứng
let array1 = ["M", "na", "i", "Ke"];
let array2 = ["y", "me", "s", "lly"];
// ['My', 'name', 'is', 'Kelly']


let list = [];
for (let i = 0; i < array1.length; i++) {
    list[i] = array1[i] + array2[i];
};
document.write(list);

/* Bài thẩy sửa
let array3 = [];
for(let i in array1){
    array3.push(array1[i]+array2[i]);
    
}
console.log(array3);*/