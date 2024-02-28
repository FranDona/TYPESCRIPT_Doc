function iniciarArrays() {
    let num: number = parseInt(prompt("Nº de cosas que vas a comprar"))
    alert(JSON.stringify(listaCompra(num), null, 2))
  }
  
  // Función con entrada y con salida
  function listaCompra(num: number): string[] {
    let listaCompra: string[] = new Array(num)
    for (let index: number = 0; index < listaCompra.length; index++) {
        listaCompra[index] = prompt("Di los articulos:")
    }
    return listaCompra
  }