// Bài 5: Đếm xem trong array có tổng cộng bao nhiêu số 20
let array = [5, 10, 15, 20, 25, 50, 20];
let result1 = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] == 20) {
        result1 += 1
    }
}
document.write(`Trong array có ${result1} số 20`);