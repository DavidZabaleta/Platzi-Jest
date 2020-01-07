describe('Check if it is string', () => {

    const text = 'Un horrible texto';

    test('should contain the following text', () => {
        expect(text).toMatch(/horrible/);
    });

    test('should not contain the following text', () => {
        expect(text).not.toMatch(/horribl /);
    });

    test('prove the length of the string', () => {
        expect(text).toHaveLength(17);
    });
        
    
});