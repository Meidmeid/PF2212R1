function isPrimeNumber(number) {
    // if (number == 2) { return true } else {
    //     for (let i = 2; i < number; i++) {
    //         return (number % i != 0);
    //     }
    // }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) { return false }
    }
    return true
}
