//5. Crea un objeto Furgoneta y un objeto Todoterreno, ambas tienen que heredar del objeto Vehiculo. El
// objeto Furgoneta tiene que añadir una propiedad para indicar el número de pasajeros y el objeto todoterreno
// debe de añadir una propiedad que indique si tiene tracción o no.Crea una instancia de cada
// uno de ellos y muestra los datos.

class Vehiculo {
    constructor(marca, modelo, color, anoFabricacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anoFabricacion = anoFabricacion;
    }
}
class Furgoneta extends Vehiculo {
    constructor(marca, modelo, color, anoFabricacion, pasajeros) {
        super(marca, modelo, color, anoFabricacion)
        this.pasajeros = pasajeros;
    }
}

class Todoterreno extends Vehiculo {
    constructor(marca, modelo, color, anoFabricacion, traccion) {
        super(marca, modelo, color, anoFabricacion)
        this.traccion = traccion;
    }
}

t1 = new Todoterreno("Mishubishi", "Pajero", "Rosa", "1994", "16");
f1 = new Furgoneta("Fiat", "Multipla", "Rojigualda", "1994", "59 bien apretaos")
console.log(t1);
console.log(f1);
