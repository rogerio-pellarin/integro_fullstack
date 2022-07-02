var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  // Function to group items by size
  const group = (input, size) => {
    const box = [];
    while (input.length > 0) {
      const sub_box = [];
      for (i = 0; i < size; i++) {
        sub_box.push(input[0]);
        input.shift();
        if (input.length === 0) break;
      }
      box.push(sub_box);
    }

    return box;
  };

  // Apples grouped in boxes of 4 apples
  const boxes = group(input, 4);

  // Boxes grouped in packages of 2 boxes
  const packages = group(boxes, 2);

  // Packages grouped for friends, 2 packages for each friend
  const friends = group(packages, 2);

  return friends;
}

console.log(apples(input));
