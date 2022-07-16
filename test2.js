const basketApple=17
const box=4
const packages=2
const apple = [];
for (let index = 1; index <= basketApple; index++) {
  apple.push(index)
}
function createPackage(pkg, boxItemAmount, packageLength) {
  let box = [],
    package = [];
  const newArray = pkg.reduce((array, item) => {
    if (box.length < boxItemAmount) {
      box.push(item);
    }
    if (box.length === boxItemAmount && package.length < packageLength) {
      package.push(box);
      box = [];
    }
    if (
      box.length < boxItemAmount &&
      item === pkg[pkg.length - 1] &&
      box.length > 0
    ) {
      package.push(box);
    }
    if (package.length === packageLength) {
      array.push(package);
      package = [];
    }
    if (package.length > 0 && item === pkg[pkg.length - 1]) {
      array.push(package);
      package = [];
    }
    return array;
  }, []);

  return newArray;
}
function assignFriend(pkgs, amount) {
  let arrayResult = [];
  let initialSlice = 0;
  let pacakes = amount;
  let endSlice = pacakes;
  let arrayFriends = Math.round(pkgs.length / pacakes);
  for (let index = 0; index < arrayFriends; index++) {
    arrayResult.push(pkgs.slice(initialSlice, endSlice));
    initialSlice = initialSlice + pacakes;
    endSlice = endSlice + pacakes;
  }
  return {...arrayResult};
}

const pkgs = createPackage(apple, box, packages);
console.log(assignFriend(pkgs, packages));
