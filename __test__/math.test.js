import { sum, substract, multiply, divide } from '../math.js';


describe('Arithmetic operations', () => {
    test('should return the addition of 2 numbers', () => {
        expect(sum(1, 1)).toBe(2);
    });

    test('should return the substraction of 2 numbers', () => {
        expect(substract(5, 4)).toBe(1);
    });

    test('should return the multiply of 2 numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });
    
    test('should return the divide of 2 numbers', () => {
        expect(divide(4, 2)).toBe(2);
    });
});
