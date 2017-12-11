'use strict'

const primeFactorsOf = n => {
    let factors = []
    let divisor = 2;
    while (n > 1) {
        for (;n % divisor === 0; n /= divisor) {
            factors.push(divisor)
        }
        divisor++
    }
    return factors
}

module.exports = primeFactorsOf
