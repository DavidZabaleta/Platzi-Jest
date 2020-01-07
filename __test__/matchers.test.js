
describe('Matchers', () => {
    const user = {
        name: "David",
        lastName: "Zabaleta"
    };
    
    const user2 = {
        name: "David",
        lastName: "Zabaleta1"
    }

    /* test('objects should be equals', () => {
        expect(user).toEqual(user2);
    });
 */
    test('objects should not be equals', () => {
        expect(user).not.toEqual(user2);
    });   
});
