import { callbackHell } from '../callback';

describe('Trying a callback', () => {
    test('Callback', (done) => {
        function otherCallback(data) {
            expect(data).toBe('Hola xd');
            done();
        };

        callbackHell(otherCallback);
    });
    
})
