'use strict'

const primeFactorsOf = n => {
    const loop = (factors, n) => {
        for (let divisor = 2; n > 1; divisor++) {
            for (;n % divisor === 0; n /= divisor) {
                factors = [...factors, divisor]
            }
        }
        return factors
    }
    return loop([], n)
}

module.exports = primeFactorsOf
