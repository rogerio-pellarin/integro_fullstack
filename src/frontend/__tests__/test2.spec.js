const apples = require('../utils/test2')

test('array group', () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  const expected = [
    [
      //friend 1
      [
        //package 1
        [1, 2, 3, 4], //box1
        [5, 6, 7, 8], //box2
      ],
      [
        //package 2
        [9, 10, 11, 12], //box3
        [13, 14, 15, 16], //box 4
      ],
    ],
    [
      //friend 2
      [
        //package 2
        [17], //box 5 - this box is incomplete, because only 1 apple left
      ],
    ],
  ]
  const result = apples(input)
  expect(result).toEqual(expected)
})
