'use strict'

const primeFactorsOf = n => {
    let factors = []
    for (let divisor = 2; n > 1; divisor++) {
        for (;n % divisor === 0; n /= divisor) {
            factors = [...factors, divisor]
        }
    }
    return factors
}

module.exports = primeFactorsOf
