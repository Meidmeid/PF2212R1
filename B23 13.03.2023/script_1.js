/**
 * Mô tả một lớp PhanSo, lớp này gồm có 2 thuộc tính: tuSo, mauSo
 * Hai thuộc tính này được khởi tạo trong constructor
 */

class PhanSo {
    constructor(tuSo, mauSo) {
        this.tuSo = tuSo;
        this.mauSo = mauSo;
    }

    add(other) {
        // other là một đối tượng PhanSo khác
        // Phanso 1 : this
        // Phanso 2 : other
        let tuSoCong = this.tuSo * other.mauSo + other.tuSo * this.mauSo;
        let mauSoCong = this.mauSo * other.mauSo;
        console.log(`Kết quả của phép cộng: ${tuSoCong} / ${mauSoCong}`);
    }

    subtract (other2) {
        let tuSoTru = this.tuSo * other2.mauSo - other2.tuSo * this.mauSo;
        let mauSoTru = this.mauSo * other2.mauSo;
        console.log(`Kết quả của phép trừ: ${tuSoTru} / ${mauSoTru}`);
    }

    multiply (other3) {
        let tuSoNhan = this.tuSo * other3.tuSo;
        let mauSoNhan = this.mauSo * other3.mauSo;
        console.log(`Kết quả của phép trừ: ${tuSoNhan} / ${mauSoNhan}`);
    }

    divide (other4) {
        let tuSoChia = this.tuSo * other4.mauSo;
        let mauSoChia = this.mauSo * other4.tuSo;
        console.log(`Kết quả của phép trừ: ${tuSoChia} / ${mauSoChia}`);
    }
}

// tạo ra object từ class PhanSo đã mô tả
let ps1 = new PhanSo(3, 5);
let ps2 = new PhanSo(4, 5);

ps1.add(ps2);
ps1.subtract(ps2);
ps1.multiply(ps2);
ps1.divide(ps2);
