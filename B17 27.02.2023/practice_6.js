// Bài 6: Hãy tìm và thay thế tất cả số 20 trong array thành 200
let array6 = [5, 10, 15, 20, 25, 50, 20];

for (let i = 0; i < array6.length; i++) {
    if (array6[i] == 20) {
        array6[i] = 200;
    }
}
document.write(array6);