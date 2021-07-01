const apples = require('./../../test2');

// Verify friends count
describe('Verify friends count', () => {
    test('Test 1', () => {

        let input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        expect(apples(input)).toHaveLength(2);
    });

    test('Test 2', () => {

        let input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        expect(apples(input)).toHaveLength(1);
    });
});