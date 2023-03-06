function isPrimeNumber(number) {
    if (number == 2) { return true } else {
        for (let i = 2; i < number; i++) {
            return (number % i != 0);
        }
    }

}

console.log(isPrimeNumber(17))
console.log(isPrimeNumber(18))

