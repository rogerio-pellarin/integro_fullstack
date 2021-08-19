var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {

    // Organizo las manzanas en cajas de manzanas (4 por caja)
    let boxes = organizeGroups(input, 4);
    // Organizo las cajas en paquetes (2 por paquete)
    let packages = organizeGroups(boxes, 2);
    // Organizo los paquetes para cada amigo (2 por amigo)
    let friends = organizeGroups(packages, 2);
    return friends;
}

function organizeGroups(input, quantiyPerGroup){
    let elements = input;
    let boxes = [];
    let box = [];
    let counter = 0;

    for(let i=0; i<elements.length; i++){
        let element = elements[i];
        box.push(element);

        counter += 1;
        if(counter >= quantiyPerGroup){
            boxes.push(box);
            box = [];
            counter = 0;
        } else if(counter < quantiyPerGroup && i == elements.length-1){
            boxes.push(box);
        }
    }
    return boxes;
}

console.log(apples(input))
