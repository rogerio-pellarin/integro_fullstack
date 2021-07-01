var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

/**
 * Apples management
 * 
 * @param {string} input 
 * @returns {Array}
 */
function apples(input) {

    const boxAmount = 4;
    const packAmount = 2;
    const friendAmount = 2;

    // Making boxes
    const boxes = groupingApples(input, boxAmount);

    // Making packs
    const packs = groupingApples(boxes, packAmount);    

    // Distributing to friends
    const friends = groupingApples(packs, friendAmount);    

    return friends;
}

/**
 * Distribute products
 * 
 * @param {Array} products 
 * @param {number} productLength 
 * @returns {Array}
 */
function groupingApples(products, productLength) {

    let groups = [];
    let count = 0;

    for(let [index, value] of products.entries()) {

        if(index == 0) {
            
            groups[count] = Array();
        }
        
        if(index > 0 && index % productLength == 0){
            
            count++;
            groups[count] = Array();
        }

        groups[count].push(value);
    }

    return groups;
}

module.exports = apples;

console.log(apples(input));