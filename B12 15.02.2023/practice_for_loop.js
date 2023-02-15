// Bài 1
let btnAction1 = document.getElementById('btn-action-1');
btnAction1.addEventListener('click', () => {
    let n = parseInt(document.getElementById('n').value);
    let sum = 0;
    for (let i = 1; i <= n; i++) { sum += i };
    alert(`Tổng các số nguyên từ 1 đến ${n} là ${sum}`);
})