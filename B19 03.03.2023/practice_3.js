// Viết hàm solveEquation() để giải phương trình bậc nhất ax + b = 0 
// với a và b là 2 tham số đầu vào.

function solveEquation(a, b) {
    let x = 0;
    if (a != 0) {
        if (b == 0) {
            document.write('Phương trình có nghiệm là x = 0' + '<br>');
        } else {
            document.write(`Phương trình có nghiệm là x = ${(-b) / a}` + '<br>')
        }
    } else if (a == 0) {
        if (b == 0) {
            document.write('Phương trình vô số nghiệm' + '<br>')
        } else {
            document.write('Phương trình vô nghiệm' + '<br>')
        }

    }
}

solveEquation(2, -4)
solveEquation(0, 0)
solveEquation(0, -4)
solveEquation(-4, 0)
