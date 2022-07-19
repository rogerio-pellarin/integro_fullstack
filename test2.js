var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

function apples(input) {
    // fill boxes 
    const boxs = [];
    for (let index = 0; index < input.length; index += 4) {
        boxs.push(input.slice(index, index + 4))
    }

    // Fill Packages
    const packages = [];
    for (let index = 0; index < boxs.length; index += 2) {
        packages.push(boxs.slice(index, index + 2))
    }

    // Fill friends 
    const friends = [];
    for (let index = 0; index < packages.length; index += 2) {
        friends.push(packages.slice(index, index + 2))
    }

    return friends;

}

console.log(apples(input))

