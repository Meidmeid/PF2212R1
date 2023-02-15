// Bài 1

let btnAction1 = document.getElementById('btn-action-1');
btnAction1.addEventListener("click", () => {
    let lengthElem = parseInt(document.getElementById('length').value);
    let widthElem = parseInt(document.getElementById('width').value);
    if (lengthElem == widthElem) { alert('This is a square') }
    else { alert('This is a rectangle') }
})

// Bài 2
let btnAction2 = document.getElementById('btn-action-2');
btnAction2.addEventListener('click', () => {
    let a = parseFloat(document.getElementById('number-a').value);
    let b = parseFloat(document.getElementById('number-b').value);
    if (a > b) { alert(`Số lớn nhất là ${a}`) }
    else { alert(`Số lớn nhất là ${b}`) }
})

// Bài 3
let btnAction3 = document.getElementById('btn-action-3');
btnAction3.addEventListener('click', () => {
    let n = parseFloat(document.getElementById('number-n').value);
    // if (n >= 0) { alert(`|${n}| = ${n} `); }
    // else { alert(`|${n}| = ${-n} `); }

    //Toán tử 3 ngôi 
    n >= 0 ? alert(`|${n}| = ${n} `) : alert(`|${n}| = ${-n} `)
})

// Bài 4
let btnAction4 = document.getElementById('btn-action-4');
btnAction4.addEventListener('click', () => {
    let day = parseFloat(document.getElementById('day').value);
    // if (day == 2) { alert(`Monday`) }
    // else if (day == 3) { alert(`Tuesday`) }
    // else if (day == 4) { alert(`Wednesday`) }
    // else if (day == 5) { alert(`Thursday`) }
    // else if (day == 6) { alert(`Friday`) }
    // else if (day == 7) { alert(`Saturday`) }
    // else { alert(`Sunday`) }

    switch (day) {
        case 2:
            alert(`Monday`);
            break;
        case 3:
            alert(`Tuesday`);
            break;
        case 4:
            alert(`Wednesday`);
            break;
        case 5:
            alert(`Thursday`);
            break;
        case 6:
            alert(`Friday`);
            break;
        case 7:
            alert(`Saturday`);
            break;
        default: alert(`Sunday`);
            break;
    }

})

// Bài 5
let btnAction5 = document.getElementById('btn-action-5');
btnAction5.addEventListener('click', () => {
    let n1 = parseFloat(document.getElementById('n-1').value);
    let n2 = parseFloat(document.getElementById('n-2').value);
    let n3 = parseFloat(document.getElementById('n-3').value);

    let maxValue = n1;

    // if (n1 > n2) {
    //     if (n1 > n3) alert(`Số lớn nhất là ${n1}`);
    //     else alert(`Số lớn nhất là ${n3}`);
    // }
    // else {
    //     if (n2 > n3) alert(`Số lớn nhất là ${n2}`);
    // }

    if (maxValue < n2) maxValue = n2;
    if (maxValue < n3) maxValue = n3;
    alert(`Max value is ${maxValue}`);
})