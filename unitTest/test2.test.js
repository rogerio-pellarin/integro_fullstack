const apples = require("../test2");

test('should have a length of one', () => {
    var input = [1,2,3,4,5,6,7,8];
    let result = apples(input)()().length;
    expect(result).toEqual(1);
})

test('should have a length of two', () => {
    var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    let result = apples(input)()().length;
    expect(result).toEqual(2);
})

test('should have a length of three', () => {
    var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    let result = apples(input)()().length;
    expect(result).toEqual(3);
})