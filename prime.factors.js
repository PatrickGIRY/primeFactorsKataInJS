'use strict'

const primeFactorsOf = n => {
    let factors = []
    let divisor = 2;
    while (n > 1) {
        while (n % divisor === 0) {
            factors.push(divisor)
            n /= divisor
        }
        divisor++
    }
    return factors
}

module.exports = primeFactorsOf
