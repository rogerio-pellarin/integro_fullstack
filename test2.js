var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]

function apples(input) {

const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

var box = chunk(input, 4);
var package = chunk(box, 2);
var friends = chunk(package, 2);

// console.table(box);
// console.table(package);
// console.table(friends);

return friends;
}

console.table(apples(input))