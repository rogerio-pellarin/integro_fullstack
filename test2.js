var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {

    if( !input || input.length <= 0 ) return
    const box = []
    const package = []
    const friends = []

    for (let i = 0; i < input.length; i++) {
        if( i % 4 === 0 ){
            box.push( [ input[i], input[i + 1] ?? 0, input[i + 2] ?? 0, input[i+3] ?? 0 ] )
        }
    }

    const boxes = box.map( item => item.filter( box => box !== 0 ) )

    boxes.forEach( (item, index) => {
        if( index % 2 === 0 ){
            boxes[ index + 1 ] ? package.push( [ boxes[index], boxes[index + 1] ] )
            : package.push( [ boxes[index] ] )
        }
    } )

    package.forEach( (pack, index) => {
        if( index % 2 === 0 ){
            package[index + 1] ? friends.push( [ package[index], package[index + 1] ] )
            : friends.push( [ package[index] ] )
        }
    } )

    return { friends }

}
console.log(apples(input))
