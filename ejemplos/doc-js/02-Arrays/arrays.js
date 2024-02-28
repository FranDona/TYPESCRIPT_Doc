function iniciarArrays() {
    var num = parseInt(prompt("Nº de cosas que vas a comprar"));
    alert(JSON.stringify(listaCompra(num), null, 2));
}
// Función con entrada y con salida
function listaCompra(num) {
    var listaCompra = new Array(num);
    for (var index = 0; index < listaCompra.length; index++) {
        listaCompra[index] = prompt("Di los articulos:");
    }
    return listaCompra;
}
