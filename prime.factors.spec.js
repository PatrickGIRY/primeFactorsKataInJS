'use strict'

const primeFactorsOf = require('./prime.factors')

describe('PrimeFactors', () => {
    it ('1 should not have prime factors', () => {
        expect(primeFactorsOf(1)).toEqual([])
    })
})
