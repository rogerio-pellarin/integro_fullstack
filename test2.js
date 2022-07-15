
function apples(input, arrayApple = []) {
    let corte = input.splice(0, 4)
    arrayApple.push(corte)
    if (input.length) apples(input, arrayApple)
    // else objApple.push(input);


    return function boxes(box = []) {
        let boxesCorte = arrayApple.splice(0, 2);
        box.push(boxesCorte)
        if (arrayApple.length >= 2) boxes(box)
        else box.push(arrayApple)

        return function finishBox(box2 = []) {
            let boxesCorte = box.splice(0, 2);
            box2.push(boxesCorte)
            if (box.length) finishBox(box2);
            return box2
        }
    }
}

module.exports = apples;
