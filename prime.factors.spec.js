'use strict'

const primeFactorsOf = require('./prime.factors')

describe('PrimeFactors', () => {
    it ('1 should have no prime factor', () => {
        expect(primeFactorsOf(1)).toEqual([])
    })

    it ('2 should have one prime factor 2', () => {
        expect(primeFactorsOf(2)).toEqual([2])
    })

    it ('3 should have one prime factor 3', () => {
        expect(primeFactorsOf(3)).toEqual([3])
    })

    it ('4 should have two prime factors 2 and 2', () => {
        expect(primeFactorsOf(4)).toEqual([2, 2])
    })

    it ('5 should have one prime factor 5', () => {
        expect(primeFactorsOf(5)).toEqual([5])
    })

    it ('6 should have two prime factors 2 and 3', () => {
        expect(primeFactorsOf(6)).toEqual([2, 3])
    })

    it ('7 should have one prime factor 7', () => {
        expect(primeFactorsOf(7)).toEqual([7])
    })

    it ('8 should have three prime factors 2, 2 and 2', () => {
        expect(primeFactorsOf(8)).toEqual([2, 2, 2])
    })

    it ('9 should have two prime factors 3 and 3', () => {
        expect(primeFactorsOf(9)).toEqual([3, 3])
    })
})
