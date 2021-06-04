var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
    var arregloAmigo = [];
    var arregloPaquete = [];
    var arregloCaja = []; // Aquí almacenamos los nuevos arreglos

    var BOX = 4;

    for (var i = 0; i < input.length; i += BOX) {
        var pedazo = input.slice(i, i + BOX);
        arregloCaja.push(pedazo);
    }

    var PACKAGE = 2; 

    for (var ip = 0; ip < arregloCaja.length; ip += PACKAGE) {
        var pedazop = arregloCaja.slice(ip, ip + PACKAGE);
        arregloPaquete.push(pedazop);
    }

    var FRIEND = 2; 

    for (var ipa = 0; ipa < arregloPaquete.length; ipa += FRIEND) {
        var pedazoa = arregloPaquete.slice(ipa, ipa + FRIEND);
        arregloAmigo.push(pedazoa);
    }

    return arregloAmigo;
}

console.log(apples(input));