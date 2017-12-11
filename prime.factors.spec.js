'use strict'

const primeFactorsOf = require('./prime.factors')

describe('PrimeFactors', () => {
    it ('1 should have no prime factor', () => {
        expect(primeFactorsOf(1)).toEqual([])
    })

    it ('2 should have one prime factor 2', () => {
        expect(primeFactorsOf(2)).toEqual([2])
    })
})
