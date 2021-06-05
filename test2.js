var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  /** Constants */
  let APPLES_PER_BOX = 4;
  let BOX_PER_PACK = 2;
  let PACK_PER_FRIEND = 2;

  let boxes = [];
  let packages = [];
  let output = [];

  /** Separate apples in boxes*/
  while (input.length > 0) {
    let box = input.splice(0, APPLES_PER_BOX);
    boxes.push(box);
  }

  /** Build packages */
  while (boxes.length > 0) {
    let pack = boxes.splice(0, BOX_PER_PACK);
    packages.push(pack);
  }

  /** Give packages to friend */
  while (packages.length > 0) {
    let give_pacakage = packages.splice(0, PACK_PER_FRIEND);
    output.push(give_pacakage);
  }

  return JSON.stringify({ output });
}

console.log(apples(input));
