'use strict'

const primeFactorsOf = n => {
    const loop = (factors, divisor, n) => {
        if (n >1) {
           if(n % divisor === 0) {
              return loop([...factors, divisor], divisor, n / divisor)
           }
           return loop(factors, divisor + 1, n)
        }
        return factors
    }
    return loop([], 2, n)
}

module.exports = primeFactorsOf
