//3. Añadir al objeto Array un método que permita eliminar de un array un determinado valor.

Array.prototype.eliminar = function (elemento) {
    for (const i in this) {
        if (this[i] == elemento) {
            this.splice(i, 1);
            break
        }
    }


}

a1 = [1, 5, 2, 3, 4, 5, 6];
console.log(a1);
a2 = a1.eliminar(5);
console.log(a1);