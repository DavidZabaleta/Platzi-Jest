import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Try null results', () => {
    test('should be null', () => {
        expect(isNull()).toBeNull();
    });   
});

describe('Try true results', () => {
    test('should be true', () => {
        expect(isTrue()).toBeTruthy();
    });    
});

describe('Try false results', () => {
    test('should be false', () => {
        expect(isFalse()).toBeFalsy();
    });    
});

describe('Try undefined results', () => {
    test('should be undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });    
});

describe('Try not true results', () => {
    test('should be true or false', () => {
        expect(isFalse()).not.toBeTruthy();
    });    
});




