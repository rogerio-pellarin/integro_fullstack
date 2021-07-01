var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

const apples = (input) => {

    const packageSize = 4;
    const friendPackageSize = 2;
    let index = 0;
    const arrayLength = input.length;
    const container = [];
    let friend = [];

    for (index = 0; index < arrayLength; index += packageSize) {

        const packageApple = input.slice(index, index+packageSize);
        const friendIsFull = friend.length === friendPackageSize;

        if (friendIsFull) {
            container.push(friend);
            const newFriend = [];
            friend = newFriend;
        }
        friend.push(packageApple);
    }

    if (friend.length < friendPackageSize){
        container.push(friend);
    }
    return container;
}

console.log(apples(input))
