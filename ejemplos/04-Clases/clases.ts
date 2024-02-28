class Libro {
    titulo: string = ""
    paginas: number
     = 0

    constructor(titulo: string, paginas: number) {
        this.titulo = titulo
        this.paginas = paginas
    }

    // Imprimir datos
    imprimir(): string {
        return `Título: 
            ${this.titulo} 
            Páginas: ${this.paginas}`
    }
}

function iniciarClases() {
let miLibro = new Libro("La verdad de Fran", 322)
alert(miLibro.imprimir())
}