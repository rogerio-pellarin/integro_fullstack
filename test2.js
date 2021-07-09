var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  let boxes = divideArray(input, 4);
  let packages = divideArray(boxes, 2);
  let friends = divideArray(packages, 2);
  return JSON.stringify(friends, null, 2);
}

function divideArray(array, count) {
  const subArray = [];

  const length = parseInt(array.length / count);
  const residuo = parseInt(array.length % count);

  for (let i = 0; i < length; i++) {
    subArray.push(array.slice(i * count, i * count + count));
  }

  if (residuo !== 0)
    subArray.push(array.slice(array.length - residuo, array.length));

  return subArray;
}

console.log(apples(input));
