// Các thuộc tính và phương thức của mảng
let nameList = ['Anthony', 'Bella', 'Chris'];
document.write(`Mảng ban đầu: ${nameList} <br>`);

// Độ dài của mảng
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

// Thêm phần tử vào mảng
nameList.push('David');
document.write(`Mảng sau khi thêm 'David': ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

nameList[nameList.length] = 'Emily';
document.write(`Mảng sau khi thêm 'David': ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

nameList[nameList.length] = 'Federick';
document.write(`Mảng sau khi thêm 'Fed': ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

// Xóa phần tử ra khỏi mảng
// cách 1 - shift - xóa phần tử đầu mảng
let removedItem = nameList.shift(); // xóa phần tử đầu tiên của mảng
document.write(`Phần tử đã bị xóa: ${removedItem} <br>`);
document.write(`Mảng sau khi shift: ${nameList} <br>`);
document.write(`Độ dài của mảng là: ${nameList.length} <br>`);

removedItem = nameList.shift();
document.write(`Phần tử đã bị xóa: ${removedItem} <br>`);
document.write(`Mảng sau khi shift: ${nameList} <br>`);
document.write(`Độ dài của mảng là: ${nameList.length} <br>`);

// cách 1 - pop - xóa phần tử cuối mảng
removedItem = nameList.pop(); // xóa phần tử cuối cùng của mảng
document.write(`Phần tử đã bị xóa: ${removedItem} <br>`);
document.write(`Mảng sau khi pop: ${nameList} <br>`);
document.write(`Độ dài của mảng là: ${nameList.length} <br>`);

removedItem = nameList.pop(); // xóa phần tử cuối cùng của mảng
document.write(`Phần tử đã bị xóa: ${removedItem} <br>`);
document.write(`Mảng sau khi pop: ${nameList} <br>`);
document.write(`Độ dài của mảng là: ${nameList.length} <br>`);



