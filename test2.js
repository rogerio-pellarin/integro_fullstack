var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
    let manzanasPorCaja = 4;
    let cajaPorPaquete = 2;
    let paquetePorAmigos= 2;

  function organizador(input, cantidadGrupo) {
    let manzanas = input;
    let cajas = [];
    let caja = [];
    let counter = 0;

    for (let i = 0; i < manzanas.length; i++) {
      caja.push(manzanas[i]);
      counter += 1;
      if (counter >= cantidadGrupo) {
        cajas.push(caja);
        caja = [];
        counter = 0;
      } else if (counter < cantidadGrupo && i == manzanas.length - 1) {
        cajas.push(caja);
      }
    }
    return cajas;
  }

  let cajas = organizador(input, manzanasPorCaja);
  let paquetes = organizador(cajas, cajaPorPaquete);
  let amigos = organizador(paquetes, paquetePorAmigos);
  return amigos;
}

console.log(apples(input));
