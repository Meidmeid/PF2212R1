function findPrimes(number1, number2) {
    for (let i = number1; i <= number2; i++) {
        if (isPrimeNumber(i))
            document.write(i + " ");
    }
}
findPrimes(2, 24)
