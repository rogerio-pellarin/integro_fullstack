var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

function apples(input) {

    var boxes = []
    var box = []
    input.forEach(function(value, index, array) {
        if ((index + 1) % 4 == 0) {
            box.push(value)
            boxes.push(box)
            box = []
        } else {
            box.push(value)
        }
    });

    if (box.length < 4 && box.length > 0) {
        boxes.push(box)
    }

    var packages = []
    var package = []

    boxes.forEach(function(value, index, array) {
        if ((index + 1) % 2 == 0) {
            package.push(value)
            packages.push(package)
            package = []
        } else {
            package.push(value)
        }
    });

    if (package.length < 2 && package.length > 0) {
        packages.push(package)
    }

    var response = []
    var friend = []

    packages.forEach(function(value, index, array) {
        if ((index + 1) % 2 == 0) {
            friend.push(value)
            response.push(friend)
            friend = []
        } else {
            friend.push(value)
        }
    });

    if (friend.length < 2 && friend.length > 0) {
        response.push(friend)
    }
    return response
}

console.log(apples(input))