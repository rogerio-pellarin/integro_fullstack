/**
 * This exercise was made with a functional programming style. The constants APPLES_PER_BOX, BOXES_PER_PACK,
 * PACKS_PER_FRIEND define how will be the distribution for this example, but the function distribution can deal with
 * unlimited sub-levels.
 *
 * For example with the example array, a deepest configuration can be defined in the piecesArray:
 *    const piecesArray = [16, 8, 4, 2];
 *
 * You can get:
    [
      [
        [
          [[1,2], [3,4]],
          [[5,6], [7,8]],
        ],
        [
          [[9,10], [11,12]],
          [[13,14], [15,16]],
        ],
      ],
      [
        [
          [[17]],
        ]
      ]
    ]
 * that is another partition over the groups of apples.
 *
 * Also the printDistribution() function was included to view distributions with any deep
 */

const APPLES_PER_BOX = 4;
const BOXES_PER_PACK = 2;
const PACKS_PER_FRIEND = 2;

const input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

const groupsByPieces = (array, pieces) => Array(Math.ceil(array.length / pieces)).fill(0)
  .map((_, group) => array.slice(group * pieces, group * pieces + pieces))

const distribute = (array, piecesArray) =>
  groupsByPieces(array, piecesArray[0]).map(g => piecesArray.length === 1 ? g : distribute(g, piecesArray.slice(1)))

const apples = input => {
  const piecesArray = [
    APPLES_PER_BOX * BOXES_PER_PACK * PACKS_PER_FRIEND,
    APPLES_PER_BOX * BOXES_PER_PACK,
    APPLES_PER_BOX
  ];

  return distribute(input, piecesArray);
}

console.log(apples(input));


// Helper function to print the distribution
const printDistribution = (distribution, level = 0) => {
  if(Array.isArray(distribution)) {
    if(Array.isArray(distribution[0])) {
      console.log(" ".repeat(level) + "[");
      distribution.map(g => printDistribution(g, level + 2));
      console.log(" ".repeat(level) + "],");
    } else {
      console.log(" ".repeat(level) + JSON.stringify(distribution), ",")
    }
  }
}
console.log(printDistribution(apples(input)));
