const input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const PACKAGES = 2;
const BOXES = 2;
const APPLES_IN_BOX = 4;

function apples(input) {
  let friend = [];
  let packages = [];
  let boxes = [];
  
  for (let i = 0; i < input.length; i = i + APPLES_IN_BOX) {
    boxes.push(input.slice(i, i + APPLES_IN_BOX));
  }

  for (let i = 0; i < boxes.length; i = i + BOXES) {
    packages.push(boxes.slice(i, i + BOXES));
  }
  
  for (let i = 0; i < packages.length; i = i + PACKAGES) {
    friend.push(packages.slice(i, i + PACKAGES));
  }

  return JSON.stringify(Object.assign({}, friend));
}

console.log(apples(input));
