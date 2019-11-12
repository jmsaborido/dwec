// 2. Cree un script que defina un objeto llamado Producto_alimenticio. Este objeto debe presentar las
// propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los
// valores de sus propiedades. A continuación, cree tres instancias de este objeto y guárdelas en un array.
// Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos
// instanciados. 


class productoAlimenticio {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDatos() {
        return `El producto alimenticio tiene codigo ${this.codigo}, nombre ${this.nombre} y con el precio ${this.precio} centimos`;
    }
}
a1 = new productoAlimenticio("111", "Pera", 50)
a2 = new productoAlimenticio("121", "Manzana", 75)
a3 = new productoAlimenticio("411", "Nabo", 25)
console.log(a1.mostrarDatos())
console.log(a2.mostrarDatos())
console.log(a3.mostrarDatos())
