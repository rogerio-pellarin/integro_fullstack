var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 19,20, 21,22,23,24,25 ,26,27,28,29,30,31,32,33,34]

function separarArray(input, mod, cant){
    let new_array = []
    let cont = mod;

    for(let i = 1; i <= cant; i++){
        new_array.push(input.slice((cont-mod), cont)) 
        cont = cont + mod
    }
    return new_array;
}   

function agruparEnPaquetes(input){
    return input.length;
}

function apples(input) {
    input = separarArray(input, 4, Math.ceil(input.length/4));
    input = separarArray(input, 2, Math.ceil(input.length/2))
    input = separarArray(input, 2, Math.ceil(input.length/2))

    return input
}

console.log(apples(input))
