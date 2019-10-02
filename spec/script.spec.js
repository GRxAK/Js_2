const script = require('../js/script_2');

const mSum = script.mSum;
const mSubt = script.mSubt;
const mMult = script.mMult;
const mDivi = script.mDivi;

describe('Функция mSum()', () => {
    it('должна возвращать 5 при аргументах (3, 2)', () => {
        expect(mSum(3, 2)).toBe(5);
    })
    it('должна возвращать 2 при аргументах (null, 2)', () => {
        expect(mSum(null, 2)).toBe(2);
    })
    it('должна возвращать NaN при аргументах (undefined, 2)', () => {
        expect(mSum(undefined, 2)).toBe('NaN');
    })
    it('должна возвращать Abc2 при аргументах (Abc, 2)', () => {
        expect(mSum('Abc', 2)).toBe('Abc2');
    })
});

describe('Функция mSubt()', () => {
    it('должна возвращать 3 при аргументах (5, 2)', () => {
        expect(mSubt(5, 2)).toBe(3);
    })
    it('должна возвращать -2 при аргументах (null, 2)', () => {
        expect(mSubt(null, 2)).toBe(-2);
    })
    it('должна возвращать NaN при аргументах (undefined, 2)', () => {
        expect(mSubt(undefined, 2)).toBe('NaN');
    })
    it('должна возвращать NaN при аргументах (Abc, 2)', () => {
        expect(mSubt('Abc', 2)).toBe('NaN');
    }) 
});

describe('Функция mMult()', () => {
    it('должна возвращать 10 при аргументах (5, 2)', () => {
        expect(mMult(5, 2)).toBe(10);
    })
    it('должна возвращать 0 при аргументах (null, 2)', () => {
        expect(mMult(null, 2)).toBe(0);
    })
    it('должна возвращать NaN при аргументах (undefined, 2)', () => {
        expect(mMult(undefined, 2)).toBe('NaN');
    })
    it('должна возвращать Nan при аргументах (Abc, 2)', () => {
        expect(mMult('Abc', 2)).toBe('NaN');
    })
});

describe('Функция mDivi()', () => {
    it('должна возвращать 5 при аргументах (10, 2)', () => {
        expect(mDivi(10, 2)).toBe(5);
    })
    it('должна возвращать 0 при аргументах (null, 2)', () => {
        expect(mDivi(null, 2)).toBe(0);
    })
    it('должна возвращать NaN при аргументах (undefined, 2)', () => {
        expect(mDivi(undefined, 2)).toBe('NaN');
    })
    it('должна возвращать Nan при аргументах (Abc, 2)', () => {
        expect(mDivi('Abc', 2)).toBe('NaN');
    })
});