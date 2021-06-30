var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

function apples(input) {
    let output = new Array();
    let packages = new Array();
    let box = new Array();
    let apples = new Array();

    for (let i = 0; i < input.length; i++) {
        apples.push(input[i]);

        //Add apples to box
        if (apples.length == 4) {
            box.push(apples);
            apples = [];
        }

        //Add boxes to packages
        if (box.length == 2) {
            packages.push(box);
            box = [];
        }

        //Add pachages to output (friends)
        if (packages.length == 2) {
            output.push(packages);
            packages = [];
        }

        //Add apples to friends when the boxes arent completes
        if (i == input.length - 1) {
            box.push(apples);
            packages.push(box);
            output.push(packages);
        }
    }
    return JSON.stringify({output});
}

console.log(apples(input));