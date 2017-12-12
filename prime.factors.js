'use strict'

const primeFactorsOf = n => {
    const loop = (factors, divisor, n) => {
        if (n >1) {
           for (;n % divisor === 0; n /= divisor) {
              factors = [...factors, divisor]
           }
           return loop(factors, divisor + 1, n)
        }
        return factors
    }
    return loop([], 2, n)
}

module.exports = primeFactorsOf
