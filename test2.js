const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const groupArray = (arr, size) => {
  const acc = [];
  const iterations = Math.ceil(arr.length/size);
  for(var i=0; i < iterations; i++) {
    acc.push(arr.splice(0, size));
  } 
  return acc;
};

const apples = (arr) => {
  return groupArray(groupArray(groupArray(arr, 4), 2), 2);
}

console.log(apples(arr));