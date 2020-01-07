import { arrayFruits, arrayColors } from '../arrays';

describe('Element exists', () => {
    test('Contains a banana', () => {
        expect(arrayFruits()).toContain('banana');
    });
    
    test('Does not contain a platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });

    test('Prove the size of the array', () => {
       expect(arrayFruits()).toHaveLength(6); 
    });
    
    test('Contains a color', () => {
        expect(arrayColors()).toContain('azul');
    });
    
});
