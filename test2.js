var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


function apples(input) {
    const boxes = [];

    while(input.length !== 0){//
        boxes.push(input.splice(0,4));
    }
    const friends = [];
    
    while(boxes.length !== 0){
        if(boxes[3]){
            friends.push([boxes.splice(0,2),boxes.splice(0,2)]);
        }else{
            friends.push([boxes.splice(0,2)]);
        }
    }

    return friends;
}

console.log(JSON.stringify(apples(input)));
