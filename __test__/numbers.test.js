import { numbers } from '../numbers';

describe('Comparacion numeros', () => {
    test('should be greater than', () => {
        expect(numbers(2, 2)).toBeGreaterThan(3);
    });

    test('should be greater or equals than', () => {
        expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
    });

    test('should be less than', () => {
        expect(numbers(2, 2)).toBeLessThan(5);
    });

    test('should be less or equals than', () => {
        expect(numbers(2 ,2)).toBeLessThanOrEqual(4);
    });

    test('should be float', () => {
        expect(numbers(2.1, 2.1)).toBeCloseTo(4.2);
    })
    
});
