var Libro = /** @class */ (function () {
    function Libro(titulo, paginas) {
        this.titulo = "";
        this.paginas = 0;
        this.titulo = titulo;
        this.paginas = paginas;
    }
    // Imprimir datos
    Libro.prototype.imprimir = function () {
        return "T\u00EDtulo: \n            ".concat(this.titulo, " \n            P\u00E1ginas: ").concat(this.paginas);
    };
    return Libro;
}());
function iniciarClases() {
    var miLibro = new Libro("La verdad de Fran", 322);
    alert(miLibro.imprimir());
}
